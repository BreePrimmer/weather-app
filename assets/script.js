// variables to get the api started
var userCity = "Minneapolis"
var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=5b17e2c73c5335808a4342f50ecb0203`;

// function to call the api
function getApi() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // function that gathers the weather and displays it for current city and date
            function getCurrentWeather() {
                // gets current city and date
                let currentCity = data.city.name;
                let cityText = $('#cityText')
                let currentDate = dayjs().format('MM/DD/YYYY');
                console.log(currentCity)

                // gets the weather icon
                let iconId = data.list[0].weather[0].icon;
                console.log(iconId) 

                let currentIcon = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconId + '@2x.png'})

                $(".image-div-current").append(currentIcon)

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

            // gets and displays data for the next five days.
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

                let iconIdOne = data.list[7].weather[0].icon;

                let currentIconOne = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdOne + '@2x.png'})

                $(".image-div-one").append(currentIconOne)

                // second day ---------------------------------------
                let secondDay = dayjs().add(2, 'day').format('MM/DD/YYYY');
                $('#second-day').text(secondDay)

                let secondTemp = data.list[15].main.temp;
                $('#second-temp').text("Temp: " + secondTemp + "°F")

                let secondWind = data.list[15].wind.speed;
                $('#second-wind').text("Wind: " + secondWind + " MPH")

                let secondHumid = data.list[15].main.humidity;
                $('#second-humid').text("Humidity: " + secondHumid + " %")

                let iconIdTwo = data.list[15].weather[0].icon;

                let currentIconTwo = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdTwo + '@2x.png'})

                $(".image-div-two").append(currentIconTwo)

                // third day ----------------------------------------
                let thirdDay = dayjs().add(3, 'day').format('MM/DD/YYYY');
                $('#third-day').text(thirdDay)

                let thirdTemp = data.list[23].main.temp;
                $('#third-temp').text("Temp: " + thirdTemp + "°F")

                let thirdWind = data.list[23].wind.speed;
                $('#third-wind').text("Wind: " + thirdWind + " MPH")

                let thirdHumid = data.list[23].main.humidity;
                $('#third-humid').text("Humidity: " + thirdHumid + " %")

                let iconIdThree = data.list[23].weather[0].icon;

                let currentIconThree = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdThree + '@2x.png'})

                $(".image-div-three").append(currentIconThree)

                // fourth day ---------------------------------------
                let fourthDay = dayjs().add(4, 'day').format('MM/DD/YYYY');
                $('#fourth-day').text(fourthDay)

                let fourthTemp = data.list[31].main.temp;
                $('#fourth-temp').text("Temp: " + fourthTemp + "°F")

                let fourthWind = data.list[31].wind.speed;
                $('#fourth-wind').text("Wind: " + fourthWind + " MPH")

                let fourthHumid = data.list[31].main.humidity;
                $('#fourth-humid').text("Humidity: " + fourthHumid + " %")
                let iconIdFour = data.list[31].weather[0].icon;

                let currentIconFour = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdFour + '@2x.png'})

                $(".image-div-four").append(currentIconFour)

                // fifth day ----------------------------------------
                let fifthDay = dayjs().add(5, 'day').format('MM/DD/YYYY');
                $('#fifth-day').text(fifthDay)

                let fifthTemp = data.list[39].main.temp;
                $('#fifth-temp').text("Temp: " + fifthTemp + "°F")

                let fifthWind = data.list[39].wind.speed;
                $('#fifth-wind').text("Wind: " + fifthWind + " MPH")

                let fifthHumid = data.list[39].main.humidity;
                $('#fifth-humid').text("Humidity: " + fifthHumid + " %")

                let iconIdFive = data.list[39].weather[0].icon;

                let currentIconFive = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdFive + '@2x.png'})

                $(".image-div-five").append(currentIconFive)
            }
            getForecast()


        })
}
getApi()

// gets user input and the search button
let userInput = document.getElementById("search")
let searchButton = document.getElementById('button')

// event listener to use the data that is searched when you click on the search button.
searchButton.addEventListener("click", function() {
        // gets user input and stores it in local storage
        var userCity = $('#search').val()
        console.log(userCity)
        localStorage.setItem(userCity, userCity)

        // makes the list under search bar.
        var searchedCity = localStorage.getItem(userCity)
        var searchedCityText = document.createTextNode(searchedCity)
        var cityList = document.createElement('li')
        cityList.appendChild(searchedCityText)

        var searchHistory = document.getElementById("search-history")
        searchHistory.appendChild(cityList)

        // the new user city is used in the api.
        var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=5b17e2c73c5335808a4342f50ecb0203`;

        function getApi() {
            fetch(requestUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
        
                    // function that gathers the weather and displays it for current city and date
                    function getCurrentWeather() {
                        // gets current city and date
                        let currentCity = data.city.name;
                        let cityText = $('#cityText')
                        let currentDate = dayjs().format('MM/DD/YYYY');
                        console.log(currentCity)
        
                        // gets the weather icon
                        let iconId = data.list[0].weather[0].icon;
                        console.log(iconId) 
        
                        let currentIcon = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconId + '@2x.png'})
        
                        $(".image-div-current").append(currentIcon)
        
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
        
                        let iconIdOne = data.list[7].weather[0].icon;
        
                        let currentIconOne = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdOne + '@2x.png'})
        
                        $(".image-div-one").append(currentIconOne)
        
                        // second day ---------------------------------------
                        let secondDay = dayjs().add(2, 'day').format('MM/DD/YYYY');
                        $('#second-day').text(secondDay)
        
                        let secondTemp = data.list[15].main.temp;
                        $('#second-temp').text("Temp: " + secondTemp + "°F")
        
                        let secondWind = data.list[15].wind.speed;
                        $('#second-wind').text("Wind: " + secondWind + " MPH")
        
                        let secondHumid = data.list[15].main.humidity;
                        $('#second-humid').text("Humidity: " + secondHumid + " %")
        
                        let iconIdTwo = data.list[15].weather[0].icon;
        
                        let currentIconTwo = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdTwo + '@2x.png'})
        
                        $(".image-div-two").append(currentIconTwo)
        
                        // third day ----------------------------------------
                        let thirdDay = dayjs().add(3, 'day').format('MM/DD/YYYY');
                        $('#third-day').text(thirdDay)
        
                        let thirdTemp = data.list[23].main.temp;
                        $('#third-temp').text("Temp: " + thirdTemp + "°F")
        
                        let thirdWind = data.list[23].wind.speed;
                        $('#third-wind').text("Wind: " + thirdWind + " MPH")
        
                        let thirdHumid = data.list[23].main.humidity;
                        $('#third-humid').text("Humidity: " + thirdHumid + " %")
        
                        let iconIdThree = data.list[23].weather[0].icon;
        
                        let currentIconThree = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdThree + '@2x.png'})
        
                        $(".image-div-three").append(currentIconThree)
        
                        // fourth day ---------------------------------------
                        let fourthDay = dayjs().add(4, 'day').format('MM/DD/YYYY');
                        $('#fourth-day').text(fourthDay)
        
                        let fourthTemp = data.list[31].main.temp;
                        $('#fourth-temp').text("Temp: " + fourthTemp + "°F")
        
                        let fourthWind = data.list[31].wind.speed;
                        $('#fourth-wind').text("Wind: " + fourthWind + " MPH")
        
                        let fourthHumid = data.list[31].main.humidity;
                        $('#fourth-humid').text("Humidity: " + fourthHumid + " %")
                        let iconIdFour = data.list[31].weather[0].icon;
        
                        let currentIconFour = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdFour + '@2x.png'})
        
                        $(".image-div-four").append(currentIconFour)
        
                        // fifth day ----------------------------------------
                        let fifthDay = dayjs().add(5, 'day').format('MM/DD/YYYY');
                        $('#fifth-day').text(fifthDay)
        
                        let fifthTemp = data.list[39].main.temp;
                        $('#fifth-temp').text("Temp: " + fifthTemp + "°F")
        
                        let fifthWind = data.list[39].wind.speed;
                        $('#fifth-wind').text("Wind: " + fifthWind + " MPH")
        
                        let fifthHumid = data.list[39].main.humidity;
                        $('#fifth-humid').text("Humidity: " + fifthHumid + " %")
        
                        let iconIdFive = data.list[39].weather[0].icon;
        
                        let currentIconFive = $('<img />', {src: 'https://openweathermap.org/img/wn/' + iconIdFive + '@2x.png'})
        
                        $(".image-div-five").append(currentIconFive)
                    }
                    getForecast()
        
        
                })
        }
        
        getApi()
      
    })

// event listener that is used when the user enters the data with the enter key.
// essentially does the same thing as the function above but reapplied here.
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        var userCity = $('#search').val()
        console.log(userCity)
        localStorage.setItem(userCity, userCity)

        var searchedCity = localStorage.getItem(userCity)
        var searchedCityText = document.createTextNode(searchedCity)
        var cityList = document.createElement('li')
        cityList.appendChild(searchedCityText)

        var searchHistory = document.getElementById("search-history")
        searchHistory.appendChild(cityList)

        var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=5b17e2c73c5335808a4342f50ecb0203`;

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

                        $(".image-div-current").append(currentIcon)

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
    } else {
        return;
    }
})

// here I tried to make a list with the local storage but it is currently not working.
function generateList(){
    for (var i = 0; i < localStorage.length; i++) {
        var cityId = localStorage.key(i)
        console.log(cityId)
        if (cityId == userCity) {
            var searchedCity = localStorage.getItem(userCity)
            var searchedCityText = document.createTextNode(searchedCity)
            var cityList = document.createElement('li')
            cityList.appendChild(searchedCityText)

            var searchHistory = document.getElementById("search-history")
            searchHistory.appendChild(cityList)
        }
    }
}

generateList()