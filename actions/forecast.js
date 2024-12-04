export const updateCity = (city, lat, lon) => ({
  type: 'UPDATE_CITY',
  payload: { city, lat, lon },
});

export const updateForecast = (forecast) => {
  console.log('Dispatching UPDATE_FORECAST with payload:', forecast);
  return {
    type: 'UPDATE_FORECAST',
    payload: forecast,
  };
};

export const toggleLoader = (status) => ({
  type: 'TOGGLE_LOADER',
  payload: status,
});
  
export const fetchForecast = (city) => {
  return async (dispatch) => {
    console.log('fetchForecast', city);
    dispatch(toggleLoader(true));
    try {
      // TODO
      const response = await fetch(`API_URL?q=${city}&appid=YOUR_API_KEY`);
      const data = await response.json();
      dispatch(updateForecast(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
  };
};