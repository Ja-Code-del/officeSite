
window.onload = function(){
    let menu = document.querySelector(".bouton-menu")
    let lienMenu = document.querySelector(".menu-lien")
    menu.addEventListener('click', () => {
        lienMenu.classList.toggle('mobile-menu')
    });

    let modeLight = document.querySelector('#light_button')
 let modeDark = document.querySelector('#dark_button')
 let test = true
 let change = document.getElementById('theme')
 let footColor = document.getElementsByTagName('footer')

  modeLight.addEventListener('click', ()=>{
    if(test){
      change.style.backgroundColor ='white'
      change.style.color = 'black'
      footColor[0].style.color = 'white'
      test = false
    }
  });

  modeDark.addEventListener('click', ()=>{
    if(test==false){
      change.style.backgroundColor = '#333'
      change.style.color = 'whitesmoke'
      test= true
    }
  })

//display or hide the pop up
let themeSetter = document.querySelector('.changeTheme')
let popUp = document.querySelector('.pop') // add id="pop" at "bouton" place
let pop_up_hidden = true;// popup is hidden
popUp.addEventListener('click',() => {
  if(pop_up_hidden){
 themeSetter.style.display = 'block';
 pop_up_hidden = !pop_up_hidden;
  }
  else{
    themeSetter.style.display = 'none';
    pop_up_hidden = !pop_up_hidden;
  }
});
}
