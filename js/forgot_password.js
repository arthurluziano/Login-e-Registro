const btn_confirm = document.querySelector('#btn_confirm')

btn_confirm.addEventListener('click', () => {
    let email = document.querySelector('#email')
    let new_password = document.querySelector('#new_password')
    let confirm_password = document.querySelector('#confirm_password')

    for (let user of JSON.parse(localStorage.Users)) {
        if (email.value == '') {
            alert('Insira um email.')
        } else if (email.value == user.email) {
            if (new_password.value == '') {
                alert('Insira sua nova senha.')
            } else if (new_password.value == user.password) {
                alert('A senha não pode ser a mesma que a anterior.')
            } else if (new_password.value != user.password) {
                if (confirm_password.value == new_password.value) {
                    user.password = new_password.value

                    email.value = ''
                    new_password.value = ''
                    confirm_password.value = ''

                    email.focus()
                    alert('Senha alterada com sucesso!')
                } else {
                    alert('Digite a mesma senha para confirmar a alteração.')
                }
            }
        } else if (!JSON.parse(localStorage.Users).hasOwnProperty('user.email')) {
            alert('Esse email não existe.')
        }
    }
})