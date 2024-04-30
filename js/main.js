let today = document.getElementById("today"); //
let todayHistory = document.getElementById("todayHistory"); //
let tomorrow = document.getElementById("tomorrow"); //
let nextTomorrow = document.getElementById("nextTomorrow"); //
let city = document.getElementById("city"); //
let todayTemprature = document.getElementById("todayTemprature"); //
let todayLogo = document.getElementById("todayLogo"); //
let todayStatus = document.getElementById("todayStatus"); //
let humidity = document.getElementById("humidity");//
let wind_kph = document.getElementById("wind_kph");//
let wind_dir = document.getElementById("wind_dir");//
let tomorrowLogo = document.getElementById("tomorrowLogo");//
let tomorrowMaxtemp_c = document.getElementById("tomorrowMaxtemp_c");//
let tomorrowMintemp_c = document.getElementById("tomorrowMintemp_c");//
let tomorrowStatus = document.getElementById("tomorrowStatus");//
let nextTomorrowLogo = document.getElementById("nextTomorrowLogo");//
let nextTomorrowMaxtemp_c = document.getElementById("nextTomorrowMaxtemp_c");//
let nextTomorrowMintemp_c = document.getElementById("nextTomorrowMintemp_c");//
let nextTomorrowStatus = document.getElementById("nextTomorrowStatus");//

getdetails("Cairo" )
async function getdetails(id) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8b30d5a6d9f0438f883155620242804&q=${id}&days=3`);
if (response.status != 200) {
    response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8b30d5a6d9f0438f883155620242804&q=Cairo&days=3`);
}
    let responsedata = await response.json();

    city.innerHTML = responsedata.location.name ;

    today.innerHTML = new Date(responsedata.forecast.forecastday[0].date).toLocaleDateString("en-US",{weekday:"long"})
    
    todayHistory.innerHTML = new Date(responsedata.forecast.forecastday[0].date).getDate() + 
 new Date(responsedata.forecast.forecastday[0].date).toLocaleDateString("en-US",{month:"long"})

 tomorrow.innerHTML = new Date(responsedata.forecast.forecastday[1].date).toLocaleDateString("en-US",{weekday:"long"})

 nextTomorrow.innerHTML = new Date(responsedata.forecast.forecastday[2].date).toLocaleDateString("en-US",{weekday:"long"})

 todayTemprature.innerHTML = responsedata.current.temp_c + "°C";

 todayLogo.setAttribute("src",`https:${responsedata.current.condition.icon}`);

 todayStatus.innerHTML = responsedata.current.condition.text;

 humidity.innerHTML = responsedata.current.humidity + "%";

 wind_kph.innerHTML = responsedata.current.wind_kph + "km/h";

 wind_dir.innerHTML = responsedata.current.wind_dir;

 tomorrowLogo.setAttribute("src",`https:${responsedata.forecast.forecastday[1].day.condition.icon}`);

 tomorrowMaxtemp_c.innerHTML = responsedata.forecast.forecastday[1].day.maxtemp_c + "°C";

 tomorrowMintemp_c.innerHTML = responsedata.forecast.forecastday[1].day.mintemp_c + "°C";

 tomorrowStatus.innerHTML = responsedata.forecast.forecastday[1].day.condition.text;

 nextTomorrowLogo.setAttribute("src",`https:${responsedata.forecast.forecastday[2].day.condition.icon}`);

 nextTomorrowMaxtemp_c.innerHTML = responsedata.forecast.forecastday[2].day.maxtemp_c + "°C";

 nextTomorrowMintemp_c.innerHTML = responsedata.forecast.forecastday[2].day.mintemp_c + "°C";

 nextTomorrowStatus.innerHTML = responsedata.forecast.forecastday[2].day.condition.text;


}
