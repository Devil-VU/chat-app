const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyD2aVa2rokkFpDp1NkIgWaO1XoM1zANsio",
    authDomain: "chat-app-d05a7.firebaseapp.com",
    databaseURL: "https://chat-app-d05a7.firebaseio.com",
    projectId: "chat-app-d05a7",
    storageBucket: "chat-app-d05a7.appspot.com",
    messagingSenderId: "405252101426",
    appId: "1:405252101426:web:30251ca366b749152ff32b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((res) => {
    if(res !== null) {
      if(res.emailVerified === true) {
        model.currentUser = {
          displayName : res.displayName,
          email: res.email
        }
        view.setActiveScreen('chatScreen')
      }
      else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email!')
      }
    }
    else {
      view.setActiveScreen('registerScreen')
    }
  });
// firestoreQueries()
}
window.onload = init
firestoreQueries = async () => {
  // get once document

  // const response = await  firebase.firestore().collection('Users')
  //   .doc('24ccxiX6dRezcIA8hvWo').get()
  //   const user = getDataFromDoc(response)
  //   console.log(user)

  // get many documetns

  // const response = await   firebase.firestore()
  // .collection('Users').where('phones', 'array-contains' , '0345')
  // .get()
  // const user = getDataFromDocs(response.docs)
  // console.log(user)
  

  // add new document

  // const dataToAdd = {
  //   name : 'hieu',
  //   age: 20,
  // }
  // firebase.firestore().collection('Users')
  // .add(dataToAdd)

  // delete document

  // const docId = 'rbCO0Dt9ie0hXr0FJK9m'
  // firebase.firestore().collection('Users').doc(docId).delete()

  // update document

  // const dataToUpdate = {
  //   name: 'hahhahahahahaha',
  //   address : 'Ha Noi',
  //   age : 21  ,
  //   phones : firebase.firestore.FieldValue.arrayUnion('0678')
  // firebase.firestore.FieldValue.delete()
  // }
  // const docID = 'pK2YeA11fi9mQzuGl2kC'
  // firebase.firestore().collection('Users').doc(docID).update(dataToUpdate)

}
getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}
getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
}
