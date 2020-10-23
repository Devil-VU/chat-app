const controller = {} 

controller.register = ({
    firstName, 
    lastName, 
    email,
    password, 
    confirmPassword,
}) => {
   if(firstName ==='') {
       view.setErrorMessage('first-name-error','Please input your first name.')
   }
   else {
    view.setErrorMessage('first-name-error','')
   }
   if(lastName ==='') {
    view.setErrorMessage('last-name-error','Please input your last name.')
    }
    else {
        view.setErrorMessage('last-name-error','')
    }
    if(email ==='') {
        view.setErrorMessage('email-error','Invalid email.')
    }
    else{
        view.setErrorMessage('email-error','')
    }
    if(password ==='') {
        view.setErrorMessage('password-error','The password field is required.')
    }else {
        view.setErrorMessage('password-error','')
    }
    if(confirmPassword ==='') {
        view.setErrorMessage('confirm-password-error','Confirm password is required.')
        
    }
    else if(confirmPassword !== password) {
        view.setErrorMessage('confirm-password-error','Confirm password not match')
    }
    else {
        view.setErrorMessage('confirm-password-error','')
    }
    // set message err on register screen

    //* get data register to model
    if( firstName !== '' 
        && lastName !== '' 
        && email !== '' 
        && password !== ''
        && confirmPassword !== ''
        && password === confirmPassword
    ){
        const dataRegister = {
             firstName : firstName,
             lastName: lastName,
             email: email,
             password: password
        }
        model.register(dataRegister) 
    } 
}

controller.login = ({email, password})  => {
     // set message err on login screen
    if(email === ''){
        view.setErrorMessage('email-error', 'Please enter your email.')
    }
    else {
        view.setErrorMessage('email-error', '')
    }
    if(password === '') {
        view.setErrorMessage('password-error', 'Please enter your password.')
    }
    else {
        view.setErrorMessage('password-error', '')
    }
    // get data to model 
    if(email !== ''
    && password !== '') {
        const dataLogin = {
            email: email,
            password: password,
        }
        model.login(dataLogin)
    }
}
