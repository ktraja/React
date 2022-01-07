const listReducer = (
  state = {
    todoList: [{ id: 1, title: "Task 1", estHrs: 1 }],
  },
  action
) => {
  if (action.type === "ADD_TODO") {
    let currList = [...state.todoList];
    let newItem = action.payload;
    currList.push({
      id: Math.random().toFixed(2),
      title: newItem.title,
      estHrs: newItem.estHrs,
    });
    return { todoList: currList };
  }

  if (action.type === "DEL_TODO") {
    let currList = [...state.todoList];
    let delId = action.payload.delId;
    return {
      todoList: currList.filter(
        (item) => item.id.toString() !== delId.toString()
      ),
    };
  }

  if (action.type === "EDIT_TODO") {
    let currList = [...state.todoList];
    let newItem = action.payload;
    const objIndex = currList.findIndex((item) => item.id === newItem.id);
    currList[objIndex].title = newItem.title;
    currList[objIndex].estHrs = newItem.estHrs;
    return { todoList: currList };
  }
  return state;
};

export default listReducer;
