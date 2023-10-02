export default function () {
    toggleOpciones()
}
let activacion = true
let elemetoOpciones = document.getElementById('opciones')
function toggleOpciones() {
    let elemetoSelect = document.getElementById('select')
    elemetoSelect.addEventListener('click',function (params) {
        if (activacion) {
            return x('scaleX(1)',false)
        }
        return x('scaleX(0)',true)
       
    })
}

function x(scaleX,boolean) {
    elemetoOpciones.style.transform = scaleX
    activacion = boolean
    return activacion
}