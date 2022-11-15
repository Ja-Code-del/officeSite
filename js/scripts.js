
window.onload = function(){
    let menu = document.querySelector(".bouton-menu")
    let lienMenu = document.querySelector(".menu-lien")
    menu.addEventListener('click', () => {
        lienMenu.classList.toggle('mobile-menu')
    });

    let mode = document.getElementById('bouton')
    let change = document.getElementById('theme')
    let footColor = document.getElementsByTagName('footer')
    let test = true
    mode.addEventListener('click', () => {
        if(test){
        change.style.backgroundColor ='white'
        change.style.color = 'black'
        footColor[0].style.color = 'white'
        test = false
    } else {
        change.style.backgroundColor = '#333'
        change.style.color = 'whitesmoke'
        test= true
    }
    });
}
