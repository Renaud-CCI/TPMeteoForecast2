const initialState = {
  city: 'Lyon',
  forecast: [],
  loader: false,
  lat: 45.7578137,
  lon: 4.8320114,
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      console.log('Action UPDATE_CITY payload:', action.payload);
      const newStateCity = { 
        ...state, 
        city: action.payload.city,
        lat: action.payload.lat,
        lon: action.payload.lon
      };
      console.log('New state after UPDATE_CITY:', newStateCity);
      return newStateCity;

    case 'UPDATE_FORECAST':
      console.log('Action UPDATE_FORECAST payload:', action.payload);
      const newStateForecast = { 
        ...state, 
        forecast: action.payload.forecast, 
        lat: action.payload.lat, 
        lon: action.payload.lon 
      };
      console.log('New state after UPDATE_FORECAST:', newStateForecast);
      return newStateForecast;

    case 'TOGGLE_LOADER':
      console.log('Action TOGGLE_LOADER payload:', action.payload);
      const newStateLoader = { ...state, loader: action.payload };
      console.log('New state after TOGGLE_LOADER:', newStateLoader);
      return newStateLoader;

    default:
      return state;
  }
};