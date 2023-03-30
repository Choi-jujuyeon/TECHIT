// navigator.geolocation.getCurrentPosition((position) => console.log(position));
// https://api.openweathermap.org/data/2.5/weather?lat=37.4319571&lon=126.6849254&appid=9644a967875c09c9fbc66e88fde38243

const API_KEY = "9644a967875c09c9fbc66e88fde38243";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                weatherTemp.innerText =
                    data.name + "," + parseInt(data.main.temp) + "°C";

                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                // weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            });
    },

    () => alert("Not allowed!")
);
