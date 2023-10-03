
export const addPoint = (latitude, longitude) => ({
    type: 'ADD_POINT',
    payload: { latitude, longitude }
  });
  
  export const resetPoints = () => ({
    type: 'RESET_POINTS'
  });
  