const initialState = {
    points: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_POINT':
       
            return {
                ...state,
                points: [...state.points, action.payload],
              };
       
      case 'RESET_POINTS':
        return {
          ...state,
          points: [],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  