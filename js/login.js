const btn_login = document.querySelector('#btn_login')

btn_login.addEventListener('click', () => {
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    if (email.value == '' && password.value === '') {
        alert('Preencha os campos abaixo.')
    } else {
        for (let user of JSON.parse(localStorage.Users)) {
            if (email.value == '') {
                alert('Insira um email.')
            } else if (email.value == user.email) {
                if (password.value == user.password) {
                    alert('Logado com sucesso!')

                    email.value = ''
                    password.value = ''

                    email.focus()
                } else if (password.value == '') {
                    alert('Insira uma senha.')

                    password.value = ''
                } else {
                    alert('Senha incorreta.')
                }
            } else if (!JSON.parse(localStorage.Users).hasOwnProperty('user.email')) {
                alert('Esse email não existe.')
            }
            else {
                alert('Essa conta não existe.')
            }
        }
    }
})