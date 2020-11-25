const request = require('postman-request');
/*request('https://us1.locationiq.com/v1/reverse.php?key=pk.27201fbaf715051008db3ecc29bba6ef&lat=19.265472&lon=-103.741081&format=json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/

const reverseGeocode = (coordenada, callback)=>{
  //URL con la latitud y longitud concatenada a la peticion;
  let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=pk.27201fbaf715051008db3ecc29bba6ef&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;

  request(urlLatLon, (error,response,body)=>{
    
    if(error)
    {
      callback('Ocurrio algun error con la busqueda', undefined);
    }
    else
    {
      let data = JSON.parse(body);

      callback(undefined,{
        road: data.address.road,
        neighborhood: data.address.neighborhood,
        county: data.address.county,
        state: data.state,
        country: data.address.country,
        postcode: data.address.postcode
      });
    }
  });
}

module.exports = reverseGeocode;