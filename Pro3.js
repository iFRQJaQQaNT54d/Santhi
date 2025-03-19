const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key

function weatherFn(city) {
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    $.getJSON(url, function (data) {
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        $("#city-name").text(`${data.name}, ${data.sys.country}`);
        $("#date").text(moment().format("dddd, MMMM Do YYYY"));
        $("#weather-icon").attr("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        $("#temperature").text(`Temperature: ${data.main.temp}°C`);
        $("#description").text(`Weather: ${data.weather[0].description}`);
        $("#wind-speed").text(`Wind Speed: ${data.wind.speed} m/s`);
    }).fail(function () {
        alert("Error fetching weather data");
    });
}
