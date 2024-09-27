const fakeweatherDate = {
    "თბილისი": { temperatura: 16, windSpeed: 21, humidity: 40 },
    "ქობულეთი": { temperatura: 22, windSpeed: 25, humidity: 67 },
    "ბათუმი": { temperatura: 22, windSpeed: 25, humidity: 68 },
    "ფოთი": { temperatura: 21, windSpeed: 29, humidity: 60 },
    "ქუთაისი": { temperatura: 24, windSpeed: 20, humidity: 35 },
    "მესტია": { temperatura: 4, windSpeed: 15, humidity: 50 },
    "ზუგდიდი": { temperatura: 12, windSpeed: 25, humidity: 65 },
    "ბოლნისი": { temperatura: 17, windSpeed: 21, humidity: 45 },
    "ხაშური": { temperatura: 11, windSpeed: 17, humidity: 36 },
    "გორი": { temperatura: 12, windSpeed: 19, humidity: 80 },
    "მცხეთა": { temperatura: 10, windSpeed: 16, humidity: 70 },
    "რუსთავი": { temperatura: 17, windSpeed: 24, humidity: 55 },
    "თელავი": { temperatura: 12, windSpeed: 22, humidity: 62 },
    "ლაგოდეხი": { temperatura: 10, windSpeed: 15, humidity: 30 },
    "სამტრედია": { temperatura: 20, windSpeed: 30, humidity: 40 },
    "საჩხერე": { temperatura: 15, windSpeed: 24, humidity: 70 },
    "ონი": { temperatura: 8, windSpeed: 15, humidity: 61 },
    "გუდაური": { temperatura: 3, windSpeed: 11, humidity: 20 },
    "ბაკურიანი": { temperatura: 7, windSpeed: 15, humidity: 47 },
    "ბორჯომი": { temperatura: 10, windSpeed: 24, humidity: 41 }
}

// ღილაკზე დაწკაპუნების შემდეგ
document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const weatherResult = document.getElementById('weatherResult');

    if (fakeweatherDate[city]) {
        // თუ მონაცემი მოიძებნა
        document.getElementById('cityName').innerText = city;
        document.getElementById('temperature').innerText = fakeweatherDate[city].temperatura;
        document.getElementById('windspeed').innerText = fakeweatherDate[city].windSpeed;
        document.getElementById('humidity').innerText = fakeweatherDate[city].humidity;

        weatherResult.style.display = 'block';
    } else {
        // თუ ქალაქი არ მოიძებნა
        alert('ქალაქი ვერ მოიძებნა');
        weatherResult.style.display = 'none';
    }
});