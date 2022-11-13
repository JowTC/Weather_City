let weather = {
    Apikey: "16bf4a882815f0dccd57227fb504d1f4",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.Apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
    document.querySelector(".temp").innerHTML = temp+"	°C";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity+"%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + speed+"km/hr";
    },
    search: function(){
this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key =="Enter"){
        weather.search();
    }
});