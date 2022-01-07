import React from "react";
import "../App.css";

const CatFilter = (props) => {
  return (
    <div className="cat">
      <div>{props.cat}</div>
      <input type="checkbox" />
    </div>
  );
};
export default CatFilter;
