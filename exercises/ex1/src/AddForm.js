import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import classes from "./AddForm.module.css";
import { addRec, editRec, toggleEdit } from "./Redux/Actions/actions";

const AddForm = (props) => {
  const titleInpurRef = useRef();
  const estHrsRef = useRef();
  const [infoMsg, setInfoMsg] = useState(false);

  if (props.editReducer.editMode) {
    titleInpurRef.current.value = props.editReducer.editItem.title;
    estHrsRef.current.value = props.editReducer.editItem.estHrs;
  }

  const submitHandler = (event) => {
    if (titleInpurRef.current.value.trim().length === 0) {
      setInfoMsg(true);
    } else {
      setInfoMsg(false);
      if (props.editReducer.editMode) {
        props.editRec({
          id: props.editReducer.editItem.id,
          title: titleInpurRef.current.value,
          estHrs: estHrsRef.current.value,
        });

        props.toggleEdit({
          editMode: false,
          editItem: {},
        });

        titleInpurRef.current.value = "";
        estHrsRef.current.value = "";
      } else {
        props.addRec({
          title: titleInpurRef.current.value,
          estHrs: estHrsRef.current.value,
        });
        titleInpurRef.current.value = "";
        estHrsRef.current.value = "";
      }
    }
  };

  return (
    <form className={classes.form}>
      <div>
        ADD TODO
        <hr></hr>
      </div>
      <input
        name="title"
        ref={titleInpurRef}
        placeholder="Title"
        type="text"
        className={classes.input}
      ></input>

      <input
        name="estHrs"
        ref={estHrsRef}
        placeholder="Estimation(Hrs)"
        type="number"
        className={classes.input}
      ></input>
      <button className={classes.btn} type="button" onClick={submitHandler}>
        {props.editReducer.editMode ? "Edit" : "Add"}
      </button>
      {infoMsg && <p>Title Cannot be Empty.</p>}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    editReducer: state.editReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRec: (item) => dispatch(addRec(item)),
    editRec: (item) => dispatch(editRec(item)),
    toggleEdit: (item) => dispatch(toggleEdit(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
