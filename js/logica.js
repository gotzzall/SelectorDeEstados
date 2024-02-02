// Obtener el elemento select


var elementoSelecMunicipio = document.getElementById('municipio');
var elementoSelecLocalidad = document.getElementById('localidad');

// Crear el json con los paises

var paises = [
      {
            pais : 'México',
            estados : [
                  {
                        estado : 'Hidalgo',
                        municipios : [
                              {
                                    municipio : 'Tepeji del Río de Ocampo',
                                    localidades : [
                                          {
                                                localidad : 'Zona Azul'
                                          },
                                          {
                                                localidad : 'San Mateo'
                                          },
                                          {
                                                localidad : 'La Romera'
                                          }
                                    ]
                              },
                              {
                                    municipio : 'Tula de Allende',
                                    localidades : [
                                          {
                                                localidad : 'El Carmen'
                                          },
                                          {
                                                localidad : 'Tula Centro'
                                          },
                                          {
                                                localidad : 'Monte Alegre'
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        estado : 'Estado de México',
                        municipios : [
                              {
                                    municipio : 'Huehuetoca',
                                    localidades : [
                                          {
                                                localidad : 'Barranca Prieta'
                                          },
                                          {
                                                localidad : 'Santa Teresa'
                                          },
                                          {
                                                localidad : 'Jorobas'
                                          }
                                    ]
                              },
                              {
                                    municipio : 'Jilotepec',
                                    localidades : [
                                          {
                                                localidad : 'Ojo de Agua'
                                          },
                                          {
                                                localidad : 'Canalejas'
                                          },
                                          {
                                                localidad: 'Las Pilas'
                                          }
                                    ]
                              }
                        ]
                  }
            ]
      },
      {
            pais : 'Estados Unidos',
            estados : [
                  {
                        estado : 'California',
                        municipios : [
                              {
                                    municipio : 'Los Angeles',
                                    localidades : [
                                          {
                                                localidad : 'Acton'
                                          },
                                          {
                                                localidad : 'Artesia'
                                          }
                                    ]
                              },
                              {
                                    municipio : 'San Francisco',
                                    localidades : [
                                          {
                                                localidad : 'Alcatrz'
                                          },
                                          {
                                                localidad : 'Downtow'
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        // agregar estado distinto
                        estado : 'California',
                        municipios : [
                              {
                                    municipio : 'Los Angeles',
                                    localidades : [
                                          {
                                                localidad : 'Acton'
                                          },
                                          {
                                                localidad : 'Artesia'
                                          }
                                    ]
                              },
                              {
                                    municipio : 'San Francisco',
                                    localidades : [
                                          {
                                                localidad : 'Alcatrz'
                                          },
                                          {
                                                localidad : 'Downtow'
                                          }
                                    ]
                              }
                        ]
                  }
            ]
      }
]

var elementoSelectPais = document.getElementById('pais');
window.onload = function () {
     // elementoSelectPais.innerHTML = '';
     elementoSelectEstado.disabled = true;
     elementoSelecMunicipio.disabled = true;
     elementoSelecLocalidad.disabled = true;
      for(var nivel1 of paises)
      {
            var opcion = document.createElement('option');
            opcion.text = nivel1.pais;
            opcion.value = nivel1.pais;
            elementoSelectPais.add(opcion);
      }
      estadosOpciones();
      municipiosOpciones();
      localidadesOpciones();
}


var elementoSelectEstado = document.getElementById('estado');
function estadosOpciones()
{
      if(elementoSelectPais.value != 0)
     { 
            elementoSelectEstado.disabled = false;
            for(var nivel1 of paises)
            {
                  if(elementoSelectPais.value == nivel1.pais)
                  {
                        var cache1 = nivel1.estados;
                        for(var nivel2 of cache1)
                        {
                              var opciones = document.createElement('option');
                              opciones.text = nivel2.estado;
                              opciones.value = nivel2.estado;
                              elementoSelectEstado .add(opciones);
                        }
                  }
            }
           
      } 
      else
      {
            elementoSelectEstado.disabled = true;
            elementoSelectEstado.innerHTML = '<option value="0">Selecciona un estado</option>';
      }
      municipiosOpciones();
      localidadesOpciones();
}

function municipiosOpciones()
{
      if(elementoSelectPais.value != 0 && elementoSelectEstado.value != 0)
      {
            elementoSelecMunicipio.disabled = false;
            for(var nivel1 of paises)
            {
                  if(elementoSelectPais.value == nivel1.pais)
                  {
                        var cache1 = nivel1.estados;
                        for(var nivel2 of cache1)
                        {
                              if(elementoSelectEstado.value == nivel2.estado)
                              {
                                    var cache2 = nivel2.municipios;
                                    for(var nivel3 of cache2)
                                    {
                                    var opciones = document.createElement('option');
                                          opciones.text = nivel3.municipio;
                                          opciones.value = nivel3.municipio;
                                          elementoSelecMunicipio .add(opciones);
                                    }
                              }
                        }
                  }
            }
      }
      else
      {
            elementoSelecMunicipio.disabled = true;
            elementoSelecMunicipio.innerHTML = '<option value="0">Selecciona un estado</option>';
      }
      localidadesOpciones();
}


function localidadesOpciones()
{
      if(elementoSelectPais.value != 0 && elementoSelectEstado.value != 0 && elementoSelecMunicipio.value != 0)
      {
            elementoSelecLocalidad.disabled = false;
            for(var nivel1 of paises)
            {
                  if(elementoSelectPais.value == nivel1.pais)
                  {
                        var cache1 = nivel1.estados;
                        for(var nivel2 of cache1)
                        {
                              if(elementoSelectEstado.value == nivel2.estado)
                              {
                                    var cache2 = nivel2.municipios;
                                    for(var nivel3 of cache2)
                                    {
                                          if(elementoSelecMunicipio.value == nivel3.municipio)
                                          {
                                                var cache3 = nivel3.localidades;
                                                for(var nivel4 of cache3)
                                                {
                                                      var opciones = document.createElement('option');
                                                      opciones.text = nivel4.localidad;
                                                      opciones.value = nivel3.localidad;
                                                      elementoSelecLocalidad.add(opciones);
                                                }
                                          }
                                    }
                              }
                        }
                  }
            }
      }
      else
      {
            elementoSelecLocalidad.disabled = true;
            elementoSelecLocalidad.innerHTML = '<option value="0">Selecciona un estado</option>';
      }
}


