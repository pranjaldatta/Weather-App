//we store various constant values like app ids etc that we may need here for extra  convinience

const appid = ".."; //replace with openweather api key (or any other service's api key that you may be using)
const weather_endpoint = "api.openweathermap.org/data/2.5/weather?";
var data = {     "temp" : "",                  
                  "humidity" : "",
                  "wind_speed" : "",
                  "name" : "" ,
                   "main" : "",
                   "ico" : "",
                };


const locWithIp = "http://ip-api.com/json/"  //+{query}+?fields=city //Leave query blank to use current ip

module.exports.appid = appid ; 
module.exports.endpoint = weather_endpoint;
module.exports.data = data;

module.exports.loc = locWithIp;

