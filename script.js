
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
                console.log(response.data);

                // function APP here <---
            })
        })
})




