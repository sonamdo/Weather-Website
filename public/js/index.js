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

         $("#temp").html(Math.round(weather.main.temp));

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
              $("#temp").html(Math.round(fTemp));
                trueFalse = false;
            }
           else {$("#temp").html(Math.round(cTemp));
           trueFalse = true;};

        });
       if ((600 > Conditions) && (Conditions > 199)){
             $("#pic").attr("src", "http://demo.sc.chinaz.com/Files/pic/icons/6256/k12.png")
           }
         else if ((800 > Conditions) && (Conditions > 599)){
           $("#pic").attr("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/33414-200.png")
         }
         else if (Conditions > 800){
           $("#pic").attr("src", "http://iconshow.me/media/images/ui/ios7-icons/png/256/cloudy-outline.png")
         }
         else if (Conditions == 800){
           $("#pic").attr("src", "http://www.myforecast.com/img/1.png")
         };
     });
  });

});
