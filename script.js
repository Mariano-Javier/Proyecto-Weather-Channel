let boton = document.querySelector("#boton");
let entrada;

boton.addEventListener("click", function () {
  entrada = document.querySelector("#entrada").value;
  if (!!entrada) {
    cargarCiudad(entrada);
  } else {
    alert("Ingrese una ciudad");
  }
});

function cargarCiudad(ciudad) {
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function (data) {
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").innerHTML = data.main.temp + "<sup>°C</sup>";
        document.querySelector("#wicon").setAttribute("src","http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png");
        document.querySelector("#descripcion").textContent = data.weather[0].description;
        document.querySelector("#entrada").value = "";
   }
  ).fail(function() { 
      alert('La ciudad es inexistente');
      document.querySelector("#entrada").value = "";
     });
}


