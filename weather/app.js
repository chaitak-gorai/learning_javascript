const storage=new Storage();
const weatherLocation=storage.getLocationData();
const weather=new Weather(weatherLocation.city);
const ui=new UI;
document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
const city=document.getElementById('add-city').value;
weather.changeLocation(city);
storage.setLocationData(city);
getWeather();
});
var locate=document.querySelectorAll('.add-loc');
for (var i = 0; i < locate.length; i++) {
   locate[i].addEventListener('click', (e)=> {
        const loc=e.target.innerText;
        weather.changeLocation(loc);
        storage.setLocationData(loc);
        getWeather();
    });
}



function getWeather(){
weather.getWather()
.then(results=>{
    console.log(results);
   ui.paint(results);
})
.catch(err=>console.log(err));}