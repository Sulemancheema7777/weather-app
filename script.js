const apiKey = "9334a664ed06a31cc3decc8f275a610a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherContainer = document.querySelector('.weather');
const errorContainer = document.querySelector('.error');



const checkWeather =  (city)=>{
    const promiseOne =  fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`); // returns a promise
    promiseOne.then((response)=>{
        return response.json(); // also returns a promise
    })
    .then((data)=>{
       if(data.cod != 404){
          errorContainer.style.display='none';
          showData(data);
       } 
       else{
        errorContainer.style.display='block';
       }
    })
    .catch((error)=>{
        console.log(error);
    });
}
searchButton.addEventListener('click',()=>{
checkWeather(searchInput.value);
});
function showData(data){
   if(data.weather[0].main == 'Clouds'){
    weatherIcon.src='images/clouds.png';
  }
  else if(data.weather[0].main == 'Clear'){
    weatherIcon.src='images/clear.png';
  }  
  else if(data.weather[0].main == 'Rain'){
    weatherIcon.src='images/rain.png';
  }
  else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src='images/drizzle.png';
  }
  else if(data.weather[0].main == 'Mist'){
    weatherIcon.src='images/mist.png';
  }
  document.querySelector('.city').textContent = data.name;
  document.querySelector('.temperature').textContent = Math.round(data.main.temp)+' °C ';
  document.querySelector('.humidity').textContent = data.main.humidity+' % '; 
  document.querySelector('.wind').textContent = data.wind.speed+' km/h ';  
  weatherContainer.style.display='block';
}




