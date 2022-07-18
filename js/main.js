const btsn = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btsn.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btsn[manual].classList.add("active");

    slides[manual].classList.add("active");

    contents[manual].classList.add("active");
}


btsn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

AOS.init();

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin" && senha == "admin"){
        alert('Bem-Vindo(a)!');
        location.href = "index.html";
    } else{
        alert('Usuário ou senha incorretos');
    }
    
    }

    function validar_form_contato(){
        var nome = formContato.nome.value;
        var mail = formContato.mail.value;
        var subject = formContato.subject.value;
        var message = formContato.message.value;

        if(nome == ""){
            alert("Preenchimento do campo Nome obrigatório.");
            formContato.nome.focus();
            return false;
        }
        if(mail == ""){
            alert("Preenchimento do campo E-mail obrigatório.");
            formContato.mail.focus();
            return false;
        }
        if(subject == ""){
            alert("Preenchimento do campo Assunto obrigatório.");
            formContato.subject.focus();
            return false;
        }
        if(message == ""){
            alert("Preenchimento do campo Mensagem obrigatório.");
            formContato.message.focus();
            return false;
        }else{
            alert('Agradecemos a sua mensagem!')
        }
    }