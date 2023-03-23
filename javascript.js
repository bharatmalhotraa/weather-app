function findweather(){
    const API_KEY = 'YOUR_API_KEY';
    const LATITUDE = document.getElementById("latitude").value;
    const LONGITUDE = document.getElementById("longitude").value;
    // Define the URL for the API request
    const API_URL = `https://api.tomorrow.io/v4/timelines?location=${LATITUDE},${LONGITUDE}&fields=temperature,humidity&timesteps=1d&units=metric&apikey=zYYaoFgRBq0TJkTqp42E49uMNMk4vKNH`;
    // Fetch the weather forecast data
    fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Extract the forecast data for the next 5 days
   
    const dailyData = data.data.timelines[0].intervals.slice(0, 5);
    const forecast = dailyData.map(interval => {
      return {
        date: new Date(interval.startTime).toLocaleDateString(),
        temperature: interval.values.temperature,
        humidity: interval.values.humidity
      }
    });
    // Loop through the forecast data and create a new paragraph element for each interval
    var a=0
    const bh=document.createElement('h1');
    bh.textContent = `weather forecast of the given location for the next 5 days are as follows`;
    forecastContainer=document.getElementById("day1");
    forecastContainer.appendChild(bh);
    LATITUDE.value='';
    LONGITUDE.value='';
    forecast.forEach(interval => {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Date: ${interval.date}, Temperature: ${interval.temperature}°C, Humidity: ${interval.humidity}%`;
      forecastContainer.appendChild(paragraph);
    });
  })
  .catch(error => console.error(error));
  forecastContainer.replaceChildren();
  
}


