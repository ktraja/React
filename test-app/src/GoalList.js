import React from "react";
import './GoalList.css';

function GoalList(props) {
function clickHandler(event){
  props.onDelGoal(props.id); 
}
  return <div>
           <p onClick={clickHandler}>{props.desc } </p>
         </div>
}

export default GoalList;