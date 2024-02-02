/*
    Es la parte en la que se registrará el service worker para hacer la PWA
*/ 

//Se establece la ruta del serviceworker
let ubicacionSw = "js/sw.js";

//Verifica si existe el sw o se agrega

if (navigator.serviceWorker)
{
    // En el caso de que esté en localhost, se le agrega la diagonal para evitar posibles problemas
    if (window.location.href.includes("localhost"))
    { 
        ubicacionSw = "/js/sw.js";
    }

    // Se registra el serviceworker
    navigator.serviceWorker.register(ubicacionSw);
}