document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn-primary').addEventListener("click", function() {
        // Código a ejecutar cuando se haga clic en el botón "Ready"
      window.location.href = "/src/register/register.html"; // Redirigir a la página de registro
      });
    document.querySelector('.btn-success').addEventListener("click", function() {
        // Código a ejecutar cuando se haga clic en el botón "Register"
      window.location.href = "/src/login/login.html"; // Redirigir a la página de inicio de sesión
      });
    });