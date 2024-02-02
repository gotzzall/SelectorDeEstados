// Tipo de cache
const staticCache = "static";

// Elementos que se guardarán en cache
const  recursosCache = 
[
    "/SelectorDeDatos/",
    "/SelectorDeDatos/index.html",
    "/SelectorDeDatos/js/main.js",
    "/SelectorDeDatos/img/icono.png"
];

// El metodo guardará los elementos en la cache
self.addEventListener("install", (e) => {
    // Se abre el cache y se le agrega los elementos con un promise
    const cacheStatica = caches
    .open(staticCache)
    // Se espera que regrese los recursos
    .then((cache) => cache.addAll(recursosCache));
    
    // Esperando los recursos para instalarlos
    e.waitUntil(cacheStatica);
});

// Se hace un fetch para traer los datos 
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches
        .match(e.request)
        .then((res) => res || fetch(e.request))
        .catch(console.log)
    );
});