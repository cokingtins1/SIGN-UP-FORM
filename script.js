const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const form = document.getElementById('form')
const errorElement = document.getElementById('password-error')


form.addEventListener('submit', (e) => {
    let messages = []
    // if (firstName.value === '' || firstName.value == null) {
    //     messages.push('name is required')
    // }
    if(password.value.length <=6) {
        messages.push('Password must be longer than 6 characters')
    }

    if(confirmPassword.value = password.value) {
        messages.push('Your passwords do not match')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

form.addEventListener('keyup', (e) =>{
    
})
