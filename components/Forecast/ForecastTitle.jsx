import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';

const ForecastTitle = () => {
    const city = useSelector((state) => state.forecast?.city || 'Lyon');

  return (
    <View>
      <Text>{city}</Text>
    </View>
  );
};

export default ForecastTitle;