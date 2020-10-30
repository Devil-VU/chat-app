const view = {}
view.setActiveScreen = (screenName, fromCreate = false) => {
    switch(screenName) {
        // case go to welcomeScreen
        case 'chatScreen' :
        document.getElementById('app').innerHTML
         = components.chatScreen
        const sendMessageForm = document.getElementById('send-message-form')
        sendMessageForm.addEventListener('submit', (e) => {
        e.preventDefault() 
        const message = sendMessageForm.message.value;
        const messageSend = {
            owner : model.currentUser.email,
            content : message,
            createdAt : new Date().toISOString(),
        }
        if(message.trim() !== '') {
            model.addMessage(messageSend)
            sendMessageForm.message.value =''
        }
        })
        if(!fromCreate) {
        //lay cac cuoc hoi thoai ve
        model.getConversations()
        // lang nghe thay doi cua cac cuoc hoi thoai
        model.listenCoversationChange()
        }
        else {  
            view.showCurrentConversation()
            view.showListConversation()
        }
        document.querySelector('.create-conversation button').addEventListener('click', () => {
            view.setActiveScreen('createConversationScreen',)
        })
     break
        // case go to create conversation Screen 
        case 'createConversationScreen' :
            document.getElementById('app').innerHTML 
            = components.createConversationScreen
            document.getElementById('backToChat').addEventListener('click', () => {
                view.setActiveScreen('chatScreen', true);
            })
            const createConversationForm = document.querySelector('#create-conversation-form')
            createConversationForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    title : createConversationForm.title.value,
                    email: createConversationForm.email.value
                }
                controller.createConversation(data)

            })


        break

        //  case go to registerScreen
        case 'registerScreen' :
        document.getElementById('app').innerHTML 
        = components.registerScreen
        document.getElementById('redirect-login')
        .addEventListener('click', () => {
            view.setActiveScreen('loginScreen')
        })
        const registerForm = document.getElementById('register-form')
        registerForm.addEventListener('submit',(event) => {
            event.preventDefault()
            const dataRegister = {
                firstName : registerForm.firstName.value,
                lastName : registerForm.lastName.value,
                email : registerForm.email.value,
                password : registerForm.password.value,
                confirmPassword : registerForm.confirmPassword.value,
            }
            controller.register(dataRegister)
        })
        break

        // case go to login Screen
        case 'loginScreen' :
        document.getElementById('app').innerHTML
         = components.loginScreen
        document.getElementById('redirect-register')
        .addEventListener('click',() => {
            view.setActiveScreen('registerScreen')
        })
        const loginForm = document.getElementById('login-form')
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const dataLogin = {
                email : loginForm.email.value,
                password : loginForm.password.value,
            }   
          controller.login(dataLogin)
        })
        break
    }  
}
// set message error
view.setErrorMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message
}   
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if( model.currentUser.email === message.owner) {
        messageWrapper.classList.add('message-mine')
        messageWrapper.innerHTML = `
        <div class='message-content'>${message.content}</div>
         `
    }
    else {
        messageWrapper.classList.add('message-other')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="message-content">${message.content}</div>
        `
    }
    document.querySelector(".list-messages").appendChild(messageWrapper)
}
view.showCurrentConversation = () => {
    document.querySelector('.list-messages').innerHTML =''
    document.querySelector('.conversation-title').innerHTML = 
    model.currentConversation.title
    for(const elem of model.currentConversation.messages ) {
        view.addMessage(elem)
    }
    view.scrollToEndElm()
}
view.showListConversation = () => {
    for(const conversation of model.conversations) {
        view.addConversation(conversation)  
    }
}
view.addConversation = (conversation) => {
    //tao the div
  const conversationWrapper = document.createElement('div')
  // conversationWrapper = <div></div>
    // them class 
    conversationWrapper.classList.add('conversation')
    //conversationWrapper = <div class="conversation"></div>
    
    if(conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add('current')
    }
    //sua innerHTMl
    conversationWrapper.innerHTML = `
    <div class="left-conversation-title" >
    ${conversation.title}
    </div>
    <div class="num-of-user" >
    ${conversation.users.length} Users
    </div>
    `
    // them len tren giao dien
    document.querySelector('.list-conversations').appendChild(conversationWrapper)
    conversationWrapper.addEventListener('click',  (e) => {
        e.preventDefault() 
        // xoa current class cu
        const current = document.querySelector('.current')
        current.classList.remove('current') 
        // them current vao cai dc click
        conversationWrapper.classList.add('current')
        // show conversation dc click len conversation  detail
        model.currentConversation = conversation
        view.showCurrentConversation()
    })
}
    view.scrollToEndElm = () => {
        const elm = document.querySelector('.list-messages')
        elm.scrollTop = elm.scrollHeight
    }
