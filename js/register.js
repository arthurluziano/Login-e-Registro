const register = document.querySelector('#register')
let users = []

class User {
    constructor(name, email, phone, password, confirm_password) {
        this.name = name
        this.email = email
        this.phone = phone
        this.password = password
        this.confirm_password = confirm_password
    }
}

function addUser(user) {
    localStorage.setItem('Users', JSON.stringify(user))
}

register.addEventListener('click', () => {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let phone = document.querySelector('#phone')
    let password = document.querySelector('#password')
    let confirm_password = document.querySelector('#confirm_password')

    let user = new User(name.value, email.value, phone.value, password.value, confirm_password.value)

    if (name.value == '') {
        alert('Por favor, insira seu nome.')
    } else if (email.value == '') {
        alert('Por favor, insira seu email.')
    } else if (phone.value == '') {
        alert('Por favor, insira seu telefone.')
    } else if (password.value == '') {
        alert('Por favor, insira sua senha.')
    } else if (confirm_password.value == '') {
        alert('Digite novamente sua senha.')
    } else if (confirm_password.value != password.value) {
        alert('Por favor, insira senhas iguais.')
    } else {
        users.push(user)
        addUser(users)

        name.value = ''
        email.value = ''
        phone.value = ''
        password.value = ''
        confirm_password.value = ''

        name.focus()
        alert('Registrado com sucesso!')
    }
})