/*código para apenas executar quando o HTML estiver carregado completamente. A função só vai funcionar depois da página ser carregada*/
document.addEventListener("DOMContentLoaded", function() {


    var btnSignin = document.querySelector("#entrar");
    var btnSignup = document.querySelector("#criarconta");
    
    var body = document.querySelector("body");
    
    
    btnSignin.addEventListener("click", function () {
       body.className = "sign-in-js"; 
    });
    
    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    })
    });