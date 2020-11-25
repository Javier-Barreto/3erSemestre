const request = require('postman-request');

const statusClima = (city, callback)=>{
  let urlLatLon = `http://api.weatherstack.com/current?access_key=a34cfae803604bdab8806c48e319f90d&query=${city}&format=json`;
  request(urlLatLon, (error,response,body)=>{

  if(error)
  {
    callback('Ocurrio algun error con la busqueda', undefined);
  }
  else
  {
    let data = JSON.parse(body);
    callback(undefined,{
      temperature: data.current.temperature
    });
  }
});
}

module.exports = statusClima;
