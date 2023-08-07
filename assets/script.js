// const cityText = $("#cityText");

const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=42.652580&lon=-73.756233&units=imperial&appid=5b17e2c73c5335808a4342f50ecb0203";

function getApi() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            function getCurrentWeather() {
                // gets current city and date
                let currentCity = data.city.name;
                let cityText = $('#cityText')
                let currentDate = dayjs().format('MM/DD/YYYY');
                console.log(currentCity)

                let iconId = data.list[0].weather[0].icon;
                console.log(iconId) 

                let currentIcon = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconId + '@2x.png'})

                currentIcon.appendTo('header')

                cityText.text(currentCity + " " + currentDate);




                // gets weather for current date
                let currentTemp = data.list[0].main.temp;
                $('#currentTemp').text("Temp: " + currentTemp + "°F")

                let currentWind = data.list[0].wind.speed;
                $('#currentWind').text("Wind: " + currentWind + " MPH")

                let currentHumid = data.list[0].main.humidity
                $('#currentHumid').text("Humidity: " + currentHumid + " %")
            }
            getCurrentWeather()

            function getForecast() {
                // first day ----------------------------------------
                let firstDay = dayjs().add(1, 'day').format('MM/DD/YY');
                $('#first-day').text(firstDay)

                let firstTemp = data.list[7].main.temp;
                $('#first-temp').text("Temp: " + firstTemp + "°F")

                let firstWind = data.list[7].wind.speed;
                $('#first-wind').text("Wind: " + firstWind + " MPH")

                let firstHumid = data.list[7].main.humidity;
                $('#first-humid').text("Humidity: " + firstHumid + " %")

                // second day ---------------------------------------
                let secondDay = dayjs().add(2, 'day').format('MM/DD/YYYY');
                $('#second-day').text(secondDay)

                let secondTemp = data.list[15].main.temp;
                $('#second-temp').text("Temp: " + secondTemp + "°F")

                let secondWind = data.list[15].wind.speed;
                $('#second-wind').text("Wind: " + secondWind + " MPH")

                let secondHumid = data.list[15].main.humidity;
                $('#second-humid').text("Humidity: " + secondHumid + " %")

                // third day ----------------------------------------
                let thirdDay = dayjs().add(3, 'day').format('MM/DD/YYYY');
                $('#third-day').text(thirdDay)

                let thirdTemp = data.list[23].main.temp;
                $('#third-temp').text("Temp: " + thirdTemp + "°F")

                let thirdWind = data.list[23].wind.speed;
                $('#third-wind').text("Wind: " + thirdWind + " MPH")

                let thirdHumid = data.list[23].main.humidity;
                $('#third-humid').text("Humidity: " + thirdHumid + " %")

                // fourth day ---------------------------------------
                let fourthDay = dayjs().add(4, 'day').format('MM/DD/YYYY');
                $('#fourth-day').text(fourthDay)

                let fourthTemp = data.list[31].main.temp;
                $('#fourth-temp').text("Temp: " + fourthTemp + "°F")

                let fourthWind = data.list[31].wind.speed;
                $('#fourth-wind').text("Wind: " + fourthWind + " MPH")

                let fourthHumid = data.list[31].main.humidity;
                $('#fourth-humid').text("Humidity: " + fourthHumid + " %")

                // fifth day ----------------------------------------
                let fifthDay = dayjs().add(5, 'day').format('MM/DD/YYYY');
                $('#fifth-day').text(fifthDay)

                let fifthTemp = data.list[39].main.temp;
                $('#fifth-temp').text("Temp: " + fifthTemp + "°F")

                let fifthWind = data.list[39].wind.speed;
                $('#fifth-wind').text("Wind: " + fifthWind + " MPH")

                let fifthHumid = data.list[39].main.humidity;
                $('#fifth-humid').text("Humidity: " + fifthHumid + " %")
            }
            getForecast()


        })
}

getApi()
