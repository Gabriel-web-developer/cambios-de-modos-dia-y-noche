
// funcion para cambiar de modos seguns los clicks 

const itemSwicth = document.getElementById('switch')

itemSwicth.addEventListener('click', () => {
    document.body.classList.toggle('dark')
});