fetch ("https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric")
    .then((response =>{return response.json()
        .then(data =>{
            document.querySelector("#climaData").innerHTML = data.weather[0].main;
            document.querySelector("#climaDescriptionData").innerHTML = data.weather[0].description;
            document.querySelector("#temperaturaData").innerHTML = data.main.temp;
            document.querySelector("#sensacionTermicaData").innerHTML = data.main.feels_like;
            document.querySelector("#temperaturaVientoData").innerHTML = data.main.temp_min;
            document.querySelector("#latitudData").innerHTML = data.coord.lat;
            document.querySelector("#longitudData").innerHTML = data.coord.lon;
            let iconID = (data.weather[0].icon)
            let srcUpdate = `https://openweathermap.org/img/wn/${iconID}.png`;
            let icon = document.querySelector("#icon");
            icon.src = srcUpdate;
            console.log(srcUpdate);
        })
}))


