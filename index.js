//Efeito Rolagem inicio
function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('header h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);
//Fim efeito rolagem

//Funções de idioma
function portugues(){
    //titulos h1
    document.getElementById("mudarSobre").innerHTML = "Sobre";
    document.getElementById("mudarContato").innerHTML = "Contato";
    
    //menu
    document.getElementById("ini").innerHTML = "Início";
    document.getElementById("linkSobre").innerHTML = "Sobre";
    document.getElementById("linkContato").innerHTML = "Contato";
    
    document.getElementById("drop-ini").innerHTML = "Início";
    document.getElementById("drop-Sobre").innerHTML = "Sobre";
    document.getElementById("drop-Contato").innerHTML = "Contato";
    
    //titulos e paragrafos
    document.getElementById("mudarForm").innerHTML = "Formulário de Contato";
    document.getElementById("mudarCont").innerHTML = "Entre em Contato";
    
    //formulario
    document.getElementById("nome").innerHTML = "Nome";
    document.getElementById("email").innerHTML = "E-mail";
    document.getElementById("telefone").innerHTML = "Telefone";
    document.getElementById("assunto").innerHTML = "Assunto";
    document.getElementById("mensagem").innerHTML = "Mensagem";
    document.getElementById("enviar").innerHTML = "Enviar";
    
}

function ingles(){
    //titulos h1
    document.getElementById("mudarSobre").innerHTML = "About Us";
    document.getElementById("mudarContato").innerHTML = "Contact";
    
    //menu
    document.getElementById("ini").innerHTML = "Home";
    document.getElementById("linkSobre").innerHTML = "About";
    document.getElementById("linkContato").innerHTML = "Contact";
    
    document.getElementById("drop-ini").innerHTML = "Início";
    document.getElementById("drop-Sobre").innerHTML = "Sobre";
    document.getElementById("drop-Contato").innerHTML = "Contato";
    
    //titulos e paragrafos
    document.getElementById("mudarForm").innerHTML = "Contact Form";
    document.getElementById("mudarCont").innerHTML = "Contact us";
    
    //formulario
    document.getElementById("nome").innerHTML = "Name";
    document.getElementById("email").innerHTML = "E-mail";
    document.getElementById("telefone").innerHTML = "Phone";
    document.getElementById("assunto").innerHTML = "Subject";
    document.getElementById("mensagem").innerHTML = "Message";
    document.getElementById("enviar").innerHTML = "Submit";
}

function espanhol(){
    //titulos h1
    document.getElementById("mudarSobre").innerHTML = "Acerca de";
    document.getElementById("mudarContato").innerHTML = "Contacto";
    
    //menu
    document.getElementById("ini").innerHTML = "Inicio";
    document.getElementById("linkSobre").innerHTML = "Acerca de";
    document.getElementById("linkContato").innerHTML = "Contacto";
    
    document.getElementById("drop-ini").innerHTML = "Início";
    document.getElementById("drop-Sobre").innerHTML = "Acerca de";
    document.getElementById("drop-Contato").innerHTML = "Contato";
    
    //titulos e paragrafos
    document.getElementById("mudarForm").innerHTML = "Formulario de Contacto";
    document.getElementById("mudarCont").innerHTML = "Entre en Contacto";
    
    //formulario
    document.getElementById("nome").innerHTML = "Nombre";
    document.getElementById("email").innerHTML = "E-mail";
    document.getElementById("telefone").innerHTML = "Telefono";
    document.getElementById("assunto").innerHTML = "Asunto";
    document.getElementById("mensagem").innerHTML = "Mensagem";
    document.getElementById("enviar").innerHTML = "Enviar";
}

//Fim Funções de idioma

//Dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Fim dropdown
