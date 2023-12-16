/* Desenvolva seu código aqui... */
function creatAcount() {
    modalControler = document.querySelector('.modal__creat-acount')
    button = document.querySelector('.form__register-link')

    button.addEventListener('click', (event) => {
        event.preventDefault()
        modalControler.showModal()
        closeModal()
    })
}

function closeModal() {
    modalControler = document.querySelector('.modal__creat-acount')
    button = document.querySelector('.modal__button-close')

    button.addEventListener('click', () => {
        modalControler.close()
    })
}

creatAcount()
