document.addEventListener("DOMContentLoaded", function() {
document.querySelector('.btn-primary').addEventListener("click", function() {
        // Código a ejecutar cuando se haga clic en el botón "Ready"
      window.location.href = "/register/register.html"; // Redirigir a la página de registro
      });
document.querySelector('.btn-success').addEventListener("click", function() {

      window.location.href = "/login/login.html"; 
      });
    });
document.querySelector('.buttonreturn').addEventListener("click", function() {
      
    window.location.href = "/index/index.html"; 
    });
  