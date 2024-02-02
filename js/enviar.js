document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var pais = document.getElementById('pais').value;
      var estado = document.getElementById('estado').value;
      var municipio = document.getElementById('municipio').value;
      var localidad = document.getElementById('localidad').value;
      
      localStorage.setItem('paisSelect', pais);
      localStorage.setItem('estadoSelect', estado);
      localStorage.setItem('municipioSelect', municipio);
      localStorage.setItem('localidadSelect', localidad);
      
      window.location.href = "pages/vista.html";
    });