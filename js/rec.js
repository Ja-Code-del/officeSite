
window.onload = function(){
  /*This is for the responsive*/
  let menu = document.querySelector(".bouton-menu")
  let lienMenu = document.querySelector(".menu-lien")
  menu.addEventListener('click', () => {
      lienMenu.classList.toggle('mobile-menu')
  }); 


/*this is to change the page mode dark or light*/
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

  
  
  
  /* display articles when user clicks on a link*/
 
  let choixArticle = document.getElementsByClassName('partie') // array of articles//
  let choixArtDeco = document.getElementsByClassName('choix') //                  //
  let nbre_article = choixArticle.length;
  let nbre_articleDeco = choixArtDeco.length;
  let choixLien = document.getElementsByClassName('alire') // array of links
  let choixLienDeco = document.getElementsByClassName('ArtDeco')
 
  function enleverAffichage(){ // this function remove the '.partie' class from an article ||
    for(let i = 0; i < nbre_article; i++){    //                                           ||
      choixArticle[i].classList.remove('affiche');  //                              <<<====
    }
  }
  function enleverAfficheur(){
    for(let i = 0; i < nbre_articleDeco; i++){
      choixArtDeco[i].classList.remove('afficheur');
    }
  }

 for(let i = 0; i < choixLien.length; i++){
    choixLien[i].addEventListener('click', () => {
      enleverAffichage();
      choixArticle[i].classList.add('affiche');  // this add the class affiche to the article choosed
    });
 }
 for(let i = 0; i < choixLienDeco.length; i++){
  choixLienDeco[i].addEventListener('click',()=> {
    enleverAfficheur();
    choixArtDeco[i].classList.add('afficheur');
  });
 } 
 

/* THE SLIDER*/

 let img_slider = document.getElementsByClassName('img__slider')
 let etape = 0;
 let nbr_img = img_slider.length;
 let precedent = document.querySelector('.precedent');
 let suivant = document.querySelector('.suivant');
 
 function removeActive(){
  for(let i = 0 ; i < nbr_img ; i++){
    img_slider[i].classList.remove('active');
  }
 }
 
 suivant.addEventListener('click', function(){
  etape++;
  if(etape >= nbr_img){
    etape = 0;
  }
  removeActive();
  img_slider[etape].classList.add('active');
 });

 precedent.addEventListener('click', function(){
  etape--;
  if(etape < 0){
    etape = nbr_img-1;
  }
  removeActive();
  img_slider[etape].classList.add('active');
 });

setInterval(() => {
  etape++;
  if(etape >= nbr_img){
    etape = 0;
  }
  removeActive();
  img_slider[etape].classList.add('active');
}, 4000);
}
