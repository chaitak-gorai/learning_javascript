class Weather{
    constructor(city, state){
        this.apiKey='57e69b1703e7dd474c8b70fe4511d06a';
        this.city=city;
        this.state=state;

    }

    async getWather(){
        const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
const responseData=await response.json();
return responseData;
        }
        changeLocation(city){
            this.city=city;
        }
    }
