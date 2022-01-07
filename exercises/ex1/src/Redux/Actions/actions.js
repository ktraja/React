import { ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_EDIT } from "./actionTypes";

export const addRec = (item) => ({
  type: ADD_TODO,
  payload: {
    title: item.title,
    estHrs: item.estHrs,
  },
});

export const delRec = (item) => ({
  type: DEL_TODO,
  payload: {
    delId: item.delId,
  },
});

export const editRec = (item) => ({
  type: EDIT_TODO,
  payload: {
    id: item.id,
    title: item.title,
    estHrs: item.estHrs,
  },
});

export const toggleEdit = (item) => ({
  type: TOGGLE_EDIT,
  payload: {
    editMode: item.editMode,
    editItem: item.editItem,
  },
});
