const categoryReducer = (
  state = {
    catArray: [],
  },
  action
) => {
  if (action.type === "CATEGORY") {
    return {
      catArray: action.payload.catArray,
    };
  } else {
    return state;
  }
};

export default categoryReducer;
