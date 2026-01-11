const apiKey="54783f9e9e1251a657a2adb6115f13a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const inputBox=document.querySelector(".container-search input");
const Btn=document.querySelector(".container-search button");

const wicon=document.querySelector(".icon");


async function weather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".container-city").style.display="none";
        document.querySelector(".container-temp").style.display="none";
        document.querySelector(".container-details").style.display="none";
    }else{
 var data= await response.json();

    document.querySelector(".city").innerHTML=data.name; 
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".temp-condition").innerHTML=data.weather[0].description;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"m/s";
    document.querySelector(".pressure").innerHTML=data.main.pressure+"hPa";

    if(data.weather[0].main=="Clouds"){
        wicon.src="https://openweathermap.org/img/wn/03d@2x.png";
    }
    else if(data.weather[0].main=="Clear"){
        wicon.src="https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if(data.weather[0].main=="Few Clouds"){
        wicon.src="https://openweathermap.org/img/wn/02d@2x.png";
    }
    else if(data.weather[0].main=="Scattered Clouds"){
        wicon.src="https://openweathermap.org/img/wn/03d@2x.png";
    }
     else if(data.weather[0].main=="Broken Clouds"){
        wicon.src="https://openweathermap.org/img/wn/04d@2x.png";
    }
    else if(data.weather[0].main=="Shower Rain"){
        wicon.src="https://openweathermap.org/img/wn/09d@2x.png"
    }
    else if(data.weather[0].main=="Rain"){
        wicon.src="https://openweathermap.org/img/wn/10d@2x.png"
    }
     else if(data.weather[0].main=="Thunderstorm"){
        wicon.src="https://openweathermap.org/img/wn/11d@2x.png"
    }
     else if(data.weather[0].main=="Snow"){
        wicon.src="https://openweathermap.org/img/wn/13d@2x.png"
    }
     else if(data.weather[0].main=="Mist"){
        wicon.src="https://openweathermap.org/img/wn/50d@2x.png"
    }
   document.querySelector(".container-city").style.display="block";
   document.querySelector(".container-temp").style.display="block";
   document.querySelector(".container-details").style.display="flex";
   document.querySelector(".error").style.display="none"
}
    }

Btn.addEventListener("click",function(){
    weather(inputBox.value.trim());
})



