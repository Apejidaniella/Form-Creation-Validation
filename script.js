document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("registration-form") 

    const feedbackDiv = document.
        getElementById("form-feedback")
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const usernameInput = document.
            getElementById("username")
        
        const emailInput = document.
            getElementById("email")
        const passwordInput = document.
            getElementById("password")
        
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        

        let isValid = true
        const messages = []

        if (username.length < 3) {
            isValid = false
            messages.push("Username must be greater than 3 characters.")
        }

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false
            messages.push("'@' or '.' is missing on your Email")
        }

        if (password.length < 9) {
            isValid = false
            messages.push("Password must be atleast 8 characters.")
        }

        feedbackDiv.style.display = "block" 
        if (isValid === true) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        } else {
            const error = messages.join("<br>")
            feedbackDiv.innerHTML = error
             feedbackDiv.style.color = "#dc3545"
        } 
    })
 })