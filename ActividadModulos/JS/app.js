let reverseGeocode = require("../MODULES/geocode.js")

let coordenada={
  lat: 12.369515,
  lon: -1.495141
}

let geocodeReverse = require('../MODULES/geocode.js');
let statusClima=require('../MODULES/clima.js')

/*reverseGeocode(coordenada, (error,dataresponse)=>{
  if(error)
  {
    console.log(console.log('Ocurrio un error'));
  }
  else
  {
    console.log(dataresponse.state);
  }
});*/

/*StatusClima(localidad,(error,ClimaResponse)=>{
  if(error){
    console.log("Se presenó un error");
  }
  else{
    console.log(ClimaResponse.current.temperature);
  }
});*/

geocodeReverse(coordenada,(error,dataresponse)=>{
  if(error)
  {
    console.log(console.log('Ocurrio un error'));
  }
  else
  {
    console.log(dataresponse.country);
    statusClima(dataresponse.country,(error,ClimaResponse)=>{
      if(error){
        console.log("Se presentó un error");
      }
      else{
        console.log(ClimaResponse.temperature);
      }
    });
  }
})