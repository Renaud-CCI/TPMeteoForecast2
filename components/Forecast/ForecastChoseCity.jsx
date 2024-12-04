import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import { updateForecast, toggleLoader, updateCity } from '@/actions/forecast';
// import { OPEN_WEATHER_API_KEY } from '@env';
const OPEN_WEATHER_API_KEY = '811f17eed42277c0fa6e6b3d7a0f8953';

const ForecastChoseCity = () => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city.length > 2) {
      fetchSuggestions(city);
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const fetchSuggestions = async (city) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${OPEN_WEATHER_API_KEY}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity.name);
    dispatch(updateCity(selectedCity.name));
    dispatch(updateForecast({ lat: selectedCity.lat, lon: selectedCity.lon }));
    setSuggestions([]);
  };

  const handleSubmit = async () => {
    dispatch(toggleLoader(true));
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`);
      const data = await response.json();
      console.log('data', data);
      dispatch(updateForecast(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  return (
    <View>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Enter city name"
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.lat + item.lon}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectCity(item)}>
              <Text>{`${item.name}, ${item.country}, ${item.state || ''}`}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ForecastChoseCity;