const model = {}
// post data to firebase
 model.currentUser = {}
 model.conversations = []
 model.currentConversation = {}
 model.register = async ({firstName, lastName, email, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    // update profile
    firebase.auth().currentUser.updateProfile({
      displayName : firstName + ' ' + lastName,
    })
  // send email verify
    firebase.auth().currentUser.sendEmailVerification()
    alert("Register Success! Please confirm your email!")
    view.setActiveScreen('loginScreen')
  } catch (error) {
    alert(error.message)
    console.log(error)
  }
} 
// get data login
model.login  = async ({email, password}) => {
  // xu li bat dong bo 
  try {
    const response =  await firebase.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    alert(error.message)
  }
}
  
// tra data ve database
model.addMessage = (message) => {
  const docId = model.currentConversation.id
  const dataToUpdate = {
    messages : firebase.firestore.FieldValue
    .arrayUnion(message)
  }
  firebase.firestore().collection('conversations').doc(docId).update(dataToUpdate)
}
model.getConversations = async () => {
   const response  = await firebase.firestore()
  .collection('conversations').where('users', 'array-contains', model.currentUser.email).get()
  model.conversations = getDataFromDocs(response.docs)
  if(model.conversations.length > 0) {
    model.currentConversation = model.conversations[0]
    view.showCurrentConversation()
    view.showListConversation()
  }
}
model.listenCoversationChange = () => {
  let isFirstRun = true
  firebase.firestore().collection('conversations')
  .where('users', 'array-contains', model.currentUser.email)
  .onSnapshot((snapShot) => {
    if(isFirstRun) {
      isFirstRun = false
      return 
    }
    const docChanges = snapShot.docChanges()
    for(const elem of docChanges) {
      if(elem.type === 'modified') {
          const dataChange = getDataFromDoc(elem.doc)
          for(let i = 0 ; i <model.conversations.length; i++) {
            if(model.conversations[i].id = dataChange.id){
              model.conversations[i] = dataChange
            }
          }
          if(dataChange.id === model.currentConversation.id) {
            model.currentConversation = dataChange
             view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length -1])
             view.scrollToEndElm()
          }
      }
    }
  })
}
