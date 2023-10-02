export default function () {
    activarModal()
    desactivarModal()
}
let elementoModal = document.getElementById('modal')
let elementoContainerCross = document.getElementById('container-cross')
function activarModal() {
    let btn = document.getElementById('btn')
    let btn2 = document.getElementById('btn2')
    btn.addEventListener('click', function () {
        x('modal','hidden','hidde-modal') 
    })
    btn2.addEventListener('click', function () {
        x('modal','hidden','hidde-modal') 
    })
}

function desactivarModal() {
    let elementoCross = document.getElementById('icon-cross')
    elementoCross.addEventListener('click', function () {
        x('hidde-modal','scroll','modal') 
    })
}

function x(modal,hidden,hiddeModal) {
    elementoModal.classList.add(modal)
    document.body.style.overflowY = hidden
    elementoModal.classList.remove(hiddeModal)
}


