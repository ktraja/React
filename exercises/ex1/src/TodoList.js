import React from "react";
import { connect } from "react-redux";
import classes from "./TodoList.module.css";
import { delRec, toggleEdit } from "./Redux/Actions/actions";

const TodoList = (props) => {
  const delHandler = () => {
    props.delRec({ delId: props.id });
  };

  const editHandler = () => {
    props.toggleEdit({
      editMode: true,
      editItem: { id: props.id, title: props.title, estHrs: props.estHrs },
    });
  };

  return (
    <div className={classes.tab}>
      <div className={classes.row}>
        <span onClick={editHandler} value={props.title}>
          {props.title}{" "}
        </span>
        <span className={classes.close} onClick={delHandler}>
          &times;
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    delRec: (item) => dispatch(delRec(item)),
    toggleEdit: (item) => dispatch(toggleEdit(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
