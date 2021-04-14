function weather(index){
    
    var cities1 = ["51.5074", "12.9716", "40.7128", "37.8136", "41.8781", "34.0522", "45.5017", "52.5200", "55.8642", "14.6819"];
    var cities2 = ["0.1278", "77.5946", "74.0060", "144.9631", "87.6298", "118.2437", "73.5673", "13.4050", "4.2518", "77.6006"]
   
    fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat="+cities1[index]+"&lon="+cities2[index]+"&exclude=hourly, daily&appid=099a2dc8aa0ee407e56d363517206bf3",{
        mode:"cors",
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    }).then(response => response.json()).then((response) => {
        
        
         var humidity = response.current.humidity;
        document.getElementById('humidity').innerHTML ='Humidity' + ' : ' + humidity;
        
        var temperature = response.current.temp - 273.15;
            document.getElementById('temperature').innerHTML = 'Temperature' + ' : ' + temperature.toFixed(2) + '&deg C ';
        var cloudiness = response.current.clouds;
            document.getElementById('cloudiness').innerHTML = 'Clouds' + ' : ' + cloudiness;
        
        if(temperature < 20){
           document.querySelector('.container').classList.add('cool');
            document.querySelector('.container').classList.remove('normal');
            document.querySelector('.container').classList.remove('hot');
        }
        else if(temperature >= 20 && temperature <= 30){
          document.querySelector('.container').classList.add('normal');
             document.querySelector('.container').classList.remove('cool');
            document.querySelector('.container').classList.remove('hot');
        }
        else{
            
            document.querySelector('.container').classList.add("hot");
             document.querySelector('.container').classList.remove('normal');
            document.querySelector('.container').classList.remove('cool');
        }
        
       
    }).then().catch((e) => {
        console.log(e)
    })
    
}