let initialState = {
  city: 'Lyon', // Valeur par défaut
  forecast: [],
  loader: false,
  lat: null,
  lon: null,
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      return { ...state, city: action.payload };
    case 'UPDATE_FORECAST':
      return { ...state, forecast: action.payload.forecast, lat: action.payload.lat, lon: action.payload.lon };
    case 'TOGGLE_LOADER':
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};