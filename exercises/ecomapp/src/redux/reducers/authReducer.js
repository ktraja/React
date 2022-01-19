const authReducer = (
  state = {
    user: null,
    data: null,
    status: "PENDING",
  },
  action
) => {
  if (action.type === "LOGIN") {
    return {
      user: action.payload.user,
      data: action.payload.data,
      status: action.payload.status,
    };
  } else {
    return state;
  }
};

export default authReducer;
