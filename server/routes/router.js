var express = require('express');
var router = express.Router();
var keys = require("../../assets/keys");
var cityIds = require("../../assets/city.list.json");
var axios = require('axios');



router.get("/" , function(req , res){
    console.log("rendering");
    res.render("index");
}
);

router.get("/getWeather" , function(req , res){ 
        //we call getWeather func and return the result
        cityName = req.query.city

        /*We first determine the city id of the selected city*/
        
        var cityid = "";
        for(var i = 0 ; i < cityIds.length ; i++ ){
            if(cityIds[i].name == cityName){
                cityid = cityIds[i].id;
                break;
            }
        }
        
        if(cityid == ""){
            res.send("404");
            }
        else{
        /**Now We perform the actual get request to openWeather api using the cityId found above */

        /*Response structure :
        res.weather.des = des,
        res.main.* = temp, humidity
        res.wind.speed = wind_speed
        res.name = name

        NOTE : all relevant info (appid ,endpoints) are stored in keys.js
        */
       data = keys.data;            
    
       var promise = makeRequest(cityid);
       
       promise.then(function(promise){
           data.temp = parseFloat(promise.main.temp - 273.15).toPrecision(3);
           data.humidity = promise.main.humidity;
           data.wind_speed = promise.wind.speed;
           data.name = promise.name ;
           data.main = promise.weather[0].main;
           data.ico = promise.weather[0].icon;
           
           console.log("Sending data successfully!")
           
           res.send(data);
           
       
       }).catch(function(err){
        console.log("Error : " , err);
        res.send(err);
       });        
    }     
          
    
})

router.get("/getLoc" , function(req , res){    /** calls ip-api.com to get city name through public ip */
                                               /** Format : "http://ip-api.com/json/?fields=city */
    axios.get(keys.loc+"?fields=city")
         .then(function(response){
             res.send(response.data);
         })
         .catch(function(err){
             console.log(err);
         })
})

function makeRequest(idx){    //makes the weather request to https://api.openweathermap.org/data/2.5/weather?id={cityid}&APPID={API_KEY}"

    return axios.get("https://" + keys.endpoint + "id=" + idx + "&APPID=" + keys.appid)
                .then(function(res){
                    return res.data;
                })
                .catch(function(err){
                    console.log("Error in api call : " , err);
                })
                    
                
}



module.exports = router ; 

