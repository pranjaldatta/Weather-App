# Weather App 

The App was built using Node.js, React & Express. The app is in accordance with FreeCodeCamp's take home challenge.

Pre-requisites : A version of Node.js installed

API Used : 1. OpenWeatherMap's Weather API \(https://openweathermap.org/api \).
               We use their current Weather data API \(https://openweathermap.org/current \) to fetch the current weather of any                city.          
           2.  IP Geolocation API \(http://ip-api.com/docs/ \). We use this to get the current city of the user. 




### Installation

        

* *STEP 1 : Clone the repository*  
   
   Copy the following code into the terminal

  ```
  git clone https://github.com/pranjaldatta/Weather-App.git
  ```
  

* *STEP 2 : Navigate into the repository*
   
   Open VS Code or any other editor of your choice and copy the following code into the terminal to navigate into the root        directory  
   ```
   cd Weather-App
   ```
   
   
* *STEP 3 : Installing the dependencies*
    
   Copy the following code into the terminal to install the dependencies
   ```
   npm install
   ```
   
   
* *STEP 4 : Setting up the assets*

   We store all our additional files that is needed by the webapp like API references, lookups etc here. Keys.js is
   where we store api keys , endpoints etc and make them available for exporting so they can be easily accessed from one        place whenever needed
   
   If using Open WeatherMap API ( Its Free! ) follow the steps listed below :    
   
   1. Extract city.list.tar.gz into assets . You can do that either by using 'extract here' option or navigating into assets
      and copy the following code into the terminal
     
      ```
      tar -xvf city.list.tar.gz
      ```
   2. Go to https://openweathermap.org/ and sign up. Follow the instructions to get your unique api key.
      Open keys.js in your editor and make the following changes.
      
      ```
      const appid = "..";
      ```
      to
      
      ```
      const appid = "{Your api key}";
      ```
    
    If you are not using OpenWeatherMap's API , then follow the documentation of the preferred api and install all additional
    files into assets and store the PI key in appid as defined above. 
    
 
 
* *STEP 5 : Starting the server*

   Navigate into the root and copy the following command into the terminal 
   
   ```
   npm start
   ```
   
   You should be seeing a message in the terminal like
   
   ```
   server running at port  8000
   ```


* *STEP 6 : Open up the browser*
    
    Go to localhost: \< port Number displayed above \> . In this case go to localhost:8000 and Voila! The WebApp is ready for use! 

 
    
 
