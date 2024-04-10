document.addEventListener("DOMContentLoaded", function () {
  async function fetchData(city) {
    document.getElementById("cityName").innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9569cb3f14mshab51ece1def134dp1ffad4jsn1911ce952631",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      // Update DOM with weather data
      updateWeatherData(result);
    } catch (error) {
      console.error(error);
      // Display error message to the user
      alert("Failed to fetch weather data. Please try again later.");
    }
  }

  function updateWeatherData(data) {
    // Update DOM elements with weather data
    document.getElementById("temp").innerHTML = data.temp;
    document.getElementById("temp2").innerHTML = data.temp;
    document.getElementById("min_temp").innerHTML = data.min_temp;
    document.getElementById("max_temp").innerHTML = data.max_temp;
    document.getElementById("feels_like").innerHTML = data.feels_like;
    document.getElementById("humidity").innerHTML = data.humidity;
    document.getElementById("humidity2").innerHTML = data.humidity;
    document.getElementById("sunrise").innerHTML = data.sunrise;
    document.getElementById("sunset").innerHTML = data.sunset;
    document.getElementById("wind_speed").innerHTML = data.wind_speed;
    document.getElementById("wind_speed2").innerHTML = data.wind_speed;
    document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
  }

  // Event listener for form submission
  document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    const city = document.getElementById("city").value;
    fetchData(city);
  });

  // Fetch data for default city
  fetchData("Delhi");
});

// document.getElementById("submit").addEventListener("click", (e) => {
//   e.preventDefault();
//   const city = document.getElementById("city").value;
//   fetchData(city);
// });
