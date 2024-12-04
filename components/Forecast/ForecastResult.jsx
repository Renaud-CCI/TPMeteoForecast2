import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Image } from 'react-native';
const OPEN_WEATHER_API_KEY = '811f17eed42277c0fa6e6b3d7a0f8953';

const ForecastResult = () => {
  const { city, lat, lon } = useSelector((state) => ({
    city: state.forecast.city,
    lat: state.forecast.lat,
    lon: state.forecast.lon,
  }));

  const [forecastData, setForecastData] = useState(null);

  console.log('ForecastResult rendered with lat:', lat, 'lon:', lon);

  if (lat !== null && lon !== null) {
    console.log('Fetching forecast for:', lat, lon);
    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${OPEN_WEATHER_API_KEY}`);
        const data = await response.json();
        console.log('Fetched forecast data:', data);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching forecast:', error);
      }
    };

    fetchForecast();
  }

  let backgroundCustomColor = 'rgba(122, 230, 206, 0.8)';
  let textCustomColor = 'rgba(13, 115, 93, 0.8)';

  if (forecastData) {
    switch (forecastData.weather[0].id) {
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        backgroundCustomColor = 'rgba(244, 143, 103, 0.8)'; // color for thunderstorm
        textCustomColor = 'rgba(139, 66, 38, 0.8)'; // text color for thunderstorm
        break;
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        backgroundCustomColor = 'rgba(131, 185, 220, 0.8)'; // color for drizzle
        textCustomColor = 'rgba(0, 55, 90, 0.8)'; // text color for drizzle
        break;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        backgroundCustomColor = 'rgba(134, 125, 244, 0.8)'; // color for rain
        textCustomColor = 'rgba(7, 0, 90, 0.8)'; // text color for rain
        break;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        backgroundCustomColor = 'rgba(152, 152, 152, 0.8)'; // color for snow
        textCustomColor = 'rgba(239, 239, 239, 0.8)'; // text color for snow
        break;
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        backgroundCustomColor = 'rgba(189, 239, 198, 0.8)'; // color for atmosphere
        textCustomColor = 'rgba(33, 83, 42, 0.8)'; // text color for atmosphere
        break;
      case 800:
        backgroundCustomColor = 'rgba(122, 230, 206, 0.8)'; // color for clear sky
        textCustomColor = 'rgba(13, 115, 93, 0.8)'; // text color for clear sky
        break;
      case 801:
      case 802:
      case 803:
      case 804:
        backgroundCustomColor = 'rgba(185, 247, 255, 0.8)'; // color for clouds
        textCustomColor = 'rgba(0, 166, 187, 0.8)'; // text color for clouds
        break;
    }
  }

  if (lat === null || forecastData === null) {
    return (
      <View>
        <Text>No forecast data available.</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: backgroundCustomColor, padding: 10, borderRadius: 10, width: '65%', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: textCustomColor, fontSize: 20 }}>{forecastData.weather[0].description.charAt(0).toUpperCase() + forecastData.weather[0].description.slice(1)}</Text>
        <Image
          source={{ uri: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png` }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 10 }}>
        <Text style={{ color: textCustomColor, fontSize: 30, fontWeight: '600' }}>{forecastData.main.temp}°C</Text>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 10 }}>
          <Text style={{ color: textCustomColor }}>min {forecastData.main.temp_min}°C</Text>
          <Text style={{ color: textCustomColor }}>max {forecastData.main.temp_max}°C</Text>
        </View>
      </View>
      <Text style={{ color: textCustomColor }}>vent: {(forecastData.wind.speed * 3600 / 1000).toFixed(1)} km/h</Text>
      <Text style={{ color: textCustomColor }}>humidité: {forecastData.main.humidity}%</Text>
    </View>
  );
};

export default ForecastResult;