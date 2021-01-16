const nextIcon = '<img src="img/arrowright.png">';
const prevIcon = '<img src="img/arrowleft.png">';
var acc = document.getElementsByClassName("accordion");
var imgtop = document.getElementById("header");
var imgIni = document.getElementById("inicial");

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900: {
            items:3
        }
    }
})


function removeAtivos(){
  for(i = 0; i < acc.length; i++){
    if(acc[i].classList.contains('ativo')){ //JQuery verifica se existe a classe no elemento
      acc[i].classList.remove('ativo');
      var painel = acc[i].nextElementSibling;
      painel.style.maxHeight = null;
      if(acc[i].classList.contains('ultimo')){
        acc[i].style.borderRadius = "0 0 10px 10px";
      }
      return;
    };
  };
};

function ativar(a) {
  removeAtivos();
  let painel = a.nextElementSibling;
  a.classList.toggle("ativo");
  if (painel.style.maxHeight) {
    painel.style.maxHeight = null;
  } else {
    painel.style.maxHeight = painel.scrollHeight*2.5 + "px";
  }  
  if(a.classList.contains('ultimo')){
    a.style.borderRadius = "0 0 0 0";
  }
}

function trocaFoto(a) {
  imgtop.style.backgroundImage = `url(img/img${a}.jpg)`;
  imgIni.style.backgroundImage = `url(img/img${a}.jpg)`;
}
