import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { View } from 'react-native';
import ForecastTitle from '@/components/Forecast/ForecastTitle';
import ForecastResult from '@/components/Forecast/ForecastResult';
import ForecastChoseCity from '@/components/Forecast/ForecastChoseCity';

export default function Index() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ForecastTitle />
        <ForecastResult />
        <ForecastChoseCity />
      </View>
    </Provider>
  );
}