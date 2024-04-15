/**
 * add eventListener for getLocationBtn
 */
document.addEventListener('DOMContentLoaded', function() {
    // get button for location
    var getLocationBtn = document.getElementById('getLocationBtn');
if (getLocationBtn) {
    getLocationBtn.addEventListener('click', function() {
    getLocation();
        });
    }
});
/**
 * get current location
 */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("La geolocalización no es compatible con este navegador.");
    }
}
/**
 * Method for view the position
 * @param {*} position //position current
 */
function showPosition(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
}
/**
 * set function to btn-primary and btn-success add href to location
 */
document.querySelector('.btn-success').addEventListener("click", function() {
      // Code to be executed when the "Register" button is clicked
      window.location.href = "/register/Register.html"; // Redirigir a la página de inicio de sesión
});