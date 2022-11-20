
window.onload = function(){
  /*This is for the responsive*/
  let menu = document.querySelector(".bouton-menu")
  let lienMenu = document.querySelector(".menu-lien")
  menu.addEventListener('click', () => {
      lienMenu.classList.toggle('mobile-menu')
  }); 


/*this is to change the page mode dark or light*/
  let mode = document.getElementById('bouton')
  let change = document.getElementById('theme')
  let footColor = document.getElementsByTagName('footer')
  let sousTitre = document.getElementsByClassName('modeSoustitre')
  let underline = document.getElementsByClassName('underlined')
  let test = true
  mode.addEventListener('click', () => {
      if(test){
      change.style.backgroundColor ='white'
      change.style.color = 'black'
      for(let i=0; i<sousTitre.length;i++){
      sousTitre[i].style.backgroundColor='antiquewhite';
      }
      for(let j = 0; j < underline.length; j++){
        underline[j].style.color = 'teal'
      }
      footColor[0].style.color = 'white'
      test = false
  } else {
      change.style.backgroundColor = '#121212'
      change.style.color = 'white'
      for(let i=0; i<sousTitre.length;i++){
        sousTitre[i].style.backgroundColor='#44464a';
        }
        for(let j = 0; j < underline.length; j++){
          underline[j].style.color = '#f69d3c'
        }
      test= true
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
