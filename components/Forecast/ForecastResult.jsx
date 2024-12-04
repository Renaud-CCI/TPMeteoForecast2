import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';

const ForecastResult = () => {
  const forecast = useSelector((state) => state.forecast?.forecast);

  if (!forecast) {
      return (
          <View>
              <Text>No forecast data available.</Text>
          </View>
      );
  }
  
  return (
    <View>
      {forecast.map((result, index) => (
        <Text key={index}>{JSON.stringify(result)}</Text>
      ))}
    </View>
  );
};

export default ForecastResult;