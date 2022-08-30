let locationName = document.querySelector('#location')
let todayWrapper = document.querySelector('#todayData')
const icon = [
    {
        "code": 1000,
        "day": "Sunny",
        "night": "Clear",
        "icon": 'sun/26.png'
    },
    {
        "code": 1003,
        "day": "Partly cloudy",
        "night": "Partly cloudy",
        "icon": 'sun/27.png'
    },
    {
        "code": 1006,
        "day": "Cloudy",
        "night": "Cloudy",
        "icon": 'cloud/35.png'
    },
    {
        "code": 1009,
        "day": "Overcast",
        "night": "Overcast",
        "icon": 'cloud/35.png'
    },
    {
        "code": 1030,
        "day": "Mist",
        "night": "Mist",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1063,
        "day": "Patchy rain possible",
        "night": "Patchy rain possible",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1066,
        "day": "Patchy snow possible",
        "night": "Patchy snow possible",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1069,
        "day": "Patchy sleet possible",
        "night": "Patchy sleet possible",
        "icon": 'cloud/22.png'
    },
    {
        "code": 1072,
        "day": "Patchy freezing drizzle possible",
        "night": "Patchy freezing drizzle possible",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1087,
        "day": "Thundery outbreaks possible",
        "night": "Thundery outbreaks possible",
        "icon": 'cloud/12.png'
    },
    {
        "code": 1114,
        "day": "Blowing snow",
        "night": "Blowing snow",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1117,
        "day": "Blizzard",
        "night": "Blizzard",
        "icon": 'cloud/22.png'
    },
    {
        "code": 1135,
        "day": "Fog",
        "night": "Fog",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1147,
        "day": "Freezing fog",
        "night": "Freezing fog",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1150,
        "day": "Patchy light drizzle",
        "night": "Patchy light drizzle",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1153,
        "day": "Light drizzle",
        "night": "Light drizzle",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1168,
        "day": "Freezing drizzle",
        "night": "Freezing drizzle",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1171,
        "day": "Heavy freezing drizzle",
        "night": "Heavy freezing drizzle",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1180,
        "day": "Patchy light rain",
        "night": "Patchy light rain",
        "icon": 'sun/13.png'
    },
    {
        "code": 1183,
        "day": "Light rain",
        "night": "Light rain",
        "icon": 'sun/8.png'
    },
    {
        "code": 1186,
        "day": "Moderate rain at times",
        "night": "Moderate rain at times",
        "icon": 'sun/13.png'
    },
    {
        "code": 1189,
        "day": "Moderate rain",
        "night": "Moderate rain",
        "icon": 'sun/13.png'
    },
    {
        "code": 1192,
        "day": "Heavy rain at times",
        "night": "Heavy rain at times",
        "icon": 'sun/13.png'
    },
    {
        "code": 1195,
        "day": "Heavy rain",
        "night": "Heavy rain",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1198,
        "day": "Light freezing rain",
        "night": "Light freezing rain",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1201,
        "day": "Moderate or heavy freezing rain",
        "night": "Moderate or heavy freezing rain",
        "icon": 'cloud/5.png'
    },
    {
        "code": 1204,
        "day": "Light sleet",
        "night": "Light sleet",
        "icon": 'cloud/22.png'
    },
    {
        "code": 1207,
        "day": "Moderate or heavy sleet",
        "night": "Moderate or heavy sleet",
        "icon": 'cloud/22.png'
    },
    {
        "code": 1210,
        "day": "Patchy light snow",
        "night": "Patchy light snow",
        "icon": 'sun/4.png'
    },
    {
        "code": 1213,
        "day": "Light snow",
        "night": "Light snow",
        "icon": 'cloud/18.png'
    },
    {
        "code": 1216,
        "day": "Patchy moderate snow",
        "night": "Patchy moderate snow",
        "icon": 'sun/4.png'
    },
    {
        "code": 1219,
        "day": "Moderate snow",
        "night": "Moderate snow",
        "icon": 'cloud/18.png'
    },
    {
        "code": 1222,
        "day": "Patchy heavy snow",
        "night": "Patchy heavy snow",
        "icon": 'cloud/18.png'
    },
    {
        "code": 1225,
        "day": "Heavy snow",
        "night": "Heavy snow",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1237,
        "day": "Ice pellets",
        "night": "Ice pellets",
        "icon": 'cloud/23.png'
    },
    {
        "code": 1240,
        "day": "Light rain shower",
        "night": "Light rain shower",
        "icon": 'sun/13.png'
    },
    {
        "code": 1243,
        "day": "Moderate or heavy rain shower",
        "night": "Moderate or heavy rain shower",
        "icon": 'sun/13.png'
    },
    {
        "code": 1246,
        "day": "Torrential rain shower",
        "night": "Torrential rain shower",
        "icon": 'sun/13.png'
    },
    {
        "code": 1249,
        "day": "Light sleet showers",
        "night": "Light sleet showers",
        "icon": 'sun/13.png'
    },
    {
        "code": 1252,
        "day": "Moderate or heavy sleet showers",
        "night": "Moderate or heavy sleet showers",
        "icon": 'sun/13.png'
    },
    {
        "code": 1255,
        "day": "Light snow showers",
        "night": "Light snow showers",
        "icon": 'sun/13.png'
    },
    {
        "code": 1258,
        "day": "Moderate or heavy snow showers",
        "night": "Moderate or heavy snow showers",
        "icon": 'sun/13.png'
    },
    {
        "code": 1261,
        "day": "Light showers of ice pellets",
        "night": "Light showers of ice pellets",
        "icon": 'sun/13.png'
    },
    {
        "code": 1264,
        "day": "Moderate or heavy showers of ice pellets",
        "night": "Moderate or heavy showers of ice pellets",
        "icon": 'sun/13.png'
    },
    {
        "code": 1273,
        "day": "Patchy light rain with thunder",
        "night": "Patchy light rain with thunder",
        "icon": 'sun/30.png'
    },
    {
        "code": 1276,
        "day": "Moderate or heavy rain with thunder",
        "night": "Moderate or heavy rain with thunder",
        "icon": 'sun/30.png'
    },
    {
        "code": 1279,
        "day": "Patchy light snow with thunder",
        "night": "Patchy light snow with thunder",
        "icon": 'sun/28.png'
    },
    {
        "code": 1282,
        "day": "Moderate or heavy snow with thunder",
        "night": "Moderate or heavy snow with thunder",
        "icon": 'sun/28.png'
    }
]
/* Getting the IP address of the client. */
$.getJSON('https://api.ipify.org?format=json', function (data) {
    let ipClient = data.ip
    /* A request to the API to get the latitude and longitude of the client. */
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
        params: { q: ipClient },
        headers: {
            'X-RapidAPI-Key': 'f51b481872msh986a163ebedf22bp13574cjsnc7a189d35a3f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    /*The request is to get the weather data of the client at the moment and 3 days forecast.  */
    axios.request(options)
        .then(function (response) {

            const optionsForecast = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
                params: { q: `${response.data.lat},${response.data.lon}`, days: '3' },
                headers: {
                    'X-RapidAPI-Key': 'f51b481872msh986a163ebedf22bp13574cjsnc7a189d35a3f',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            axios.request(optionsForecast).then(function (response) {
                console.log(response.data)

                var fecha = new Date();
                var options = { month: 'long', weekday: 'long', day: 'numeric' };

                let dayNow = fecha.toLocaleDateString("es-ES", options)


                // function APP here <---
                let iconCurrent = icon.filter((e) => e.code === response.data.current.condition.code)
                locationName.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${response.data.location.name}, ${response.data.location.region}`
                todayWrapper.innerHTML = `
                <img id="iconWeatherToday" src="images/${iconCurrent[0].icon}">
                <h1 id="grades">${response.data.current.feelslike_c}</h1>
                <h4>${response.data.current.condition.text}</h4>
                <p>${dayNow}</p>
                <div class="row data">
                    <div class="col">
                        <i class="fa-solid fa-wind"></i>
                        <p>${response.data.current.wind_dir}, ${response.data.current.wind_kph} Km/h</p>
                        <p>Wind</p>
                    </div>
                    <div class="col">
                        <i class="fa-solid fa-droplet"></i>
                        <p>${response.data.current.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                        <div class="col">
                        <i class="fa-solid fa-cloud-rain"></i>
                        <p>${response.data.current.precip_mm} mm</p>
                        <p>mm of rain</p>
                    </div>
                </div>
                `
            })
        })
})





