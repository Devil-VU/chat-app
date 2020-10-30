const components = {} 
components.chatScreen = `
<div class="chat-container">
        <div class="header">App Chat</div>
        <div class="main">
        <div class="aside-left">
                    <div class="create-conversation">
                        <button class="btn" id="addNewCon">+ New Conversation</button>
                    </div>
                    <div class="list-conversations">
                    </div>
                </div>
        <div class="conversation-detail">
            <div class="conversation-title">First Conversation</div>
            <div class="list-messages">
            </div>
            <form id="send-message-form">
                    <input type="text" placeholder="Type a message" name="message">
                <button class="btn">Send</button>
            </form>
        </div>
        </div>
        </div>
    </div>   
`
components.registerScreen = `
<div class="register-container">
        <div class="background-img"></div>
        <div class="form-wrapper">
            <div class="register-header">MindX Chat</div>
            <form id="register-form">
               <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First Name" name="firstName">
                    <div id="first-name-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last Name" name="lastName">
                    <div id="last-name-error" class="err"></div>
                </div>
               </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div id="email-error" class="err"></div>
                </div> 
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword">
                    <div id="confirm-password-error" class="err"></div>
                </div>
                <div class="register-form-action">
                    <div class="line-direct">
                        Already have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                    </div>
                    <button type="submit" class="btn">Register</button>
                </div>
            </form>
        </div>
    </div>
`
components.loginScreen=`
<div class="login-container">
        <div class="login-background"></div>
        <div class="form-wrapper">
            <div class="login-header">MindX Chat</div>
            <form id="login-form">
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="login-form-action">
                    <div>Don't have an account? <span id="redirect-register" class="cursor-pointer">Register</span></div>
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
        </div>
    </div>
`
components.createConversationScreen = `
<div class="create-conversation-container">
<div class="header"> App Chat </div>
<form id="create-conversation-form" style="padding: 60px 30%;">
    <h3 style="padding: 20px;">Create new conversation</h3>
        <div class="input-wrapper">
            <input type="text" name="title" placeholder="Conversation Name">
            <div id="conversation-title-error" class="err"></div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Friend Email">
            <div id="conversation-email-error" class="err"></div>
        </div>
        <div class="action">
            <button type="submit" class="btn">Save</button>
            <button id="backToChat" type="button" class="btn btn-light">Cancel</button>
        </div>
</form>
</div>
`