import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { category_api } from "../redux/actions";
import { CATEGORY } from "../redux/actionTypes";

const CatFilter = (props) => {
  const categoryReducer = useSelector((state) => state.categoryReducer);
  const { catArray } = categoryReducer;
  const dispatch = useDispatch();
  let chkBoxVal = false;

  if (catArray.findIndex((cat) => cat === props.cat) !== -1) {
    chkBoxVal = true;
  }

  const catSelectHandler = (event) => {
    if (event.target.checked) {
      if (catArray.findIndex((cat) => cat === props.cat) === -1) {
        catArray.push(props.cat);
        dispatch(
          category_api({
            type: CATEGORY,
            catArray: [...catArray],
          })
        );
      }
    } else {
      const newArr = catArray.filter((cat) => cat !== props.cat);
      dispatch(
        category_api({
          type: CATEGORY,
          catArray: [...newArr],
        })
      );
    }
  };

  return (
    <div className="cat">
      <div>{props.cat}</div>
      <input type="checkbox" onChange={catSelectHandler} checked={chkBoxVal} />
    </div>
  );
};
export default CatFilter;
