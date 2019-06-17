import React from  'react';
import axios from 'axios';
import styles from "../css/weather.css";
import  Button  from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



var keys = require("../../assets/keys");



class Weather extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            cityName : "",
            temp : "",
            humidity : "",
            wind_speed : "",
            name : "",
            main : "",
            ico : "",

            




        }


        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
        this.useMyLocation = this.useMyLocation.bind(this);
        
    }


    componentDidMount(){
        console.log("Weather Component has mounted");
    }

    handleChange(e){
        this.setState({
            cityName : e.target.value
        })
       
        
        
    }

    makeRequest(ev , name ){    //gets the weather condition of the given city
        axios.get("/getWeather?city="+name)  //see router.js
        .then(function( res){
           
           if(res.data == "404"){
                alert("No such city"); //checks if it was a valid city name / location
           }else{
           ev.setState({
               temp : res.data.temp,
               humidity : res.data.humidity,
               wind_speed : res.data.wind_speed,
               name : res.data.name,
               main : res.data.main,
               ico : res.data.ico

           });
        }
           
           console.log("Get request from component successful");
        }).catch(function(err){
            console.log("Error in get request from component : " , err);
        })


    }

    handleSubmit(e){   //event handler thats fired when submit button is clicked
        
        if(this.state.cityName == ""){   //setting a defualt scenario where if submit is pressed
            this.useMyLocation(this);   // without filling the input field then location would be used
            return;
        }
        e.preventDefault();
        this.makeRequest(this , this.state.cityName);
        
    }

    useMyLocation(e){           // when users clicks use my location
        console.log("using my loc");
        axios.get("/getLoc")
             .then((response) => {
                 this.setState({
                     cityName : response.data.city
                 })
                 this.makeRequest(this , this.state.cityName);
             })
             .catch( (err) => {
                 console.log(err)
             })
    }
    
    render(){

        
        if(this.state.temp == ""){
            return(
                <div className = "weatherContainer"  >
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    
                    <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet"/>
                    
                    
                    <form onSubmit = {this.handleSubmit} className = "forms">
                        
                    
                        <div className = "cityname" id = "fields">
                            <label for = 'city'>Enter Your Current City : </label>
                            <input type = "text" id = "city" value = {this.state.cityName}  onChange = {this.handleChange}></input>
                        </div>

                        <div className = "btn" id = "submitBtn">
                            <Button variant = "contained" color = "primary" id = "btnLocate" onClick = {this.useMyLocation} >Use My Location</Button>
                            <Button  variant = "contained" color = "primary" id = "btnSubmit"  onClick={this.handleSubmit} >Submit</Button>
                            
                        </div>

                    </form>

                </div>    
            )
        }

        else{
            return(

                <div className = "weatherContainer"  >
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    
                    <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet"/>
                    
                    
                    <form onSubmit = {this.handleSubmit} className = "forms">
                        
                    
                        <div className = "cityname" id = "fields">
                            <label for = 'city'>Enter Your Current City : </label>
                            <input type = "text" id = "city" value = {this.state.cityName}  onChange = {this.handleChange}></input>
                           
                        </div>

                        <div className = "btns" id = "locate">
                             <Button variant = "contained" color = "primary" id = "btnLocate" p = {10} onClick={this.useMyLocation}>Use My Location</Button>
                        </div>

                        <div className = "btns" id = "submit">    
                             <Button  variant = "contained" color = "primary" id = "btnSubmit" p ={10} onClick={this.handleSubmit} >Submit</Button>
                            
                        </div>    
                                 
                        
                        



  

                    </form>

                    

            <div className = "result" id = "weatherData">
                        <Table>
                            <TableBody>
                                <TableCell>City Name</TableCell>
                                <TableCell>Main Weather</TableCell>
                                <TableCell>Temperature</TableCell>
                                <TableCell>humidity</TableCell>
                                <TableCell>Wind speed</TableCell>
                                <TableCell></TableCell>
                                
                                <TableRow>
                                    <TableCell>{this.state.name}</TableCell>
                                    <TableCell>{this.state.main}</TableCell>
                                    <TableCell>{this.state.temp}</TableCell>
                                    <TableCell>{this.state.humidity}</TableCell>
                                    <TableCell>{this.state.wind_speed}</TableCell>
                                    
                                    <TableCell><img src={"http://openweathermap.org/img/w/"+this.state.ico+".png"}></img></TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
            </div>
            </div>


            )
        }
    }
}

export default Weather;