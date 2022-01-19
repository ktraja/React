const httpReducer = (
  state = { status: "PENDING", data: null, error: null },
  action
) => {
  if (action.type === "DATA") {
    return {
      status: action.payload.status,
      data: action.payload.data,
      error: action.payload.errorMessage,
    };
  } else {
    return state;
  }
};

export default httpReducer;
