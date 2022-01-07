const editReducer = (state = { editMode: false, editItem: [] }, action) => {
  if (action.type === "TOGGLE_EDIT") {
    return { editMode: !state.editMode, editItem: action.payload.editItem };
  }
  return state;
};

export default editReducer;
