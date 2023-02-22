const Reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, cart: [...state.cart, { ...action.payload }] };
  
      case "REMOVE":
        return {
          ...state,
          cart: state.cart.filter((e) => e.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default Reducer;