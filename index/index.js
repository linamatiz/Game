var map = L.map('mapid').setView([44.0462, -123.022], 13);
 //  homero
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    var customIcon = L.icon({
            iconUrl: 'http://127.0.0.1:5500/assets/simpson.ico',
            iconSize: [38, 38], // pixeles 
            iconAnchor: [19, 38], // anclaje icono
            popupAnchor: [0, -38] 
        });
        
        

        // griffin
        L.marker([44.0462, -123.022], { icon: customIcon }).addTo(map)
            .bindPopup('¡ HOMER!') ; // se agrega un popup al marcador
            riseOnHover: true 


            var customIcon = L.icon({
            iconUrl: 'http://127.0.0.1:5500/assets/Family-Guy-PNG-Photos.ico',
            iconSize: [38, 38], // pixeles 
            iconAnchor: [19, 38], 
            popupAnchor: [0, -38] // Punto de anclaje del popu
        });
        
        

        
        L.marker([44.0462, -122.920], { icon: customIcon }).addTo(map)
            .bindPopup('¡ PETTER!') ; // MENSAJE PERSONALIZADO

            //event button config
            document.querySelector('.buttonconfig').addEventListener("click", function() {
                window.location.href = "/deactive/Deactive.html"; 
              });
             
              
              document.querySelector('.btn-success').addEventListener("click", function() {
                // Code to be executed when the "Register" button is clicked
                window.location.href = "/register/Register.html"; // Redirigir a la página de inicio de sesión
              });
              
          
  
              