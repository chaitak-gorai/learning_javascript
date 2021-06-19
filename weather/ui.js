class UI{
    constructor() {
        this.location=document.getElementById('w-location');
        this.desc=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.icon=document.getElementById('w-icon');
        this.humidity=document.getElementById('w-humidity');
        this.feelsLike=document.getElementById('w-feels-like');
        this.dewpoint=document.getElementById('w-dewpoint');
        this.wind=document.getElementById('w-wind');
        this.details=document.getElementById('w-details');
      
        
    }

    paint(weather){
        this.location.textContent=weather.name;
        this.desc.textContent=weather.weather[0].description;
        this.string.textContent=weather.main.temp+"°C";
        var iconcode=weather.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        this.icon.setAttribute('src',iconurl);
        this.humidity.textContent=`  ${weather.main.humidity} %`;
        this.feelsLike.textContent=`   ${weather.main.feels_like} °C`;
        this.dewpoint.textContent=`   ${weather.main.pressure}hPa`;
        var winds=(parseFloat(weather.wind.speed)*3.6).toFixed(2);
        this.wind.textContent=`   ${winds}km/hr`;
}
}