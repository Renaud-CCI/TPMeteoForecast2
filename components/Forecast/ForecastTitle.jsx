import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

const ForecastTitle = () => {
  const city = useSelector((state) => state.forecast?.city || 'Lyon');

  return (
    <View>
      <Text style={styles.title}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: 'rgba(54, 181, 153, 0.8)',
    marginBottom: 20,
  },
});

export default ForecastTitle;