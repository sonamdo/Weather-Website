$(document).ready(function(){

  var weatherApi = "https://fcc-weather-api.glitch.me/api/current?";
  var long = 0;
  var lat = 0;
  var city = "";

  $.getJSON("https://ipinfo.io/json",function(location){
    lat = (location.loc).slice(0,7);
    long = (location.loc).slice(8,16);
    city = location.city;
    url = weatherApi + "lat=" + lat + "&lon=" + long;
    console.log(lat+" "+long)
    console.log(url);
       $.getJSON(url,function(weather){

         $("#place").html("The Weather in " + city);

         $("#cond").html(weather.weather[0].main);

         $("#temp").html(Math.round(weather.main.temp) + " °C");

         var Conditions = weather.weather[0].id;
         var K = weather.main.temp;
         var fTemp = (K)*(9/5) + 32;
         var cTemp = K;
         var trueFalse = true;
         console.log(fTemp);

         $("#wind").html(weather.wind.speed);

         temp = weather.main.temp

         $("#btn").on("click",function(){
            if (trueFalse == true){
              $("#temp").html(Math.round(fTemp) + " °F");
                trueFalse = false;
            }
           else {$("#temp").html(Math.round(cTemp) + " °C");
           trueFalse = true;};

        });
       if ((600 > Conditions) && (Conditions > 199)){
             $("#pic").attr("src", "/js/images/rain.png")
           }
         else if ((800 > Conditions) && (Conditions > 599)){
           $("#pic").attr("src", "/js/images/snow.png")
         }
         else if (Conditions > 800){
           $("#pic").attr("src", "/js/images/cloudy.png")
         }
         else if (Conditions == 800){
           $("#pic").attr("src", "/js/images/sun.nypng")
         };
     });
  });

});
