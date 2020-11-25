const request = require('postman-request');

const statusClima = (city, callback)=>{
  let urlLatLon = `http://api.weatherstack.com/current?access_key=afcd7b1582bd4c5b0ad8534fd2febb86&query=${city}&format=json`;
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