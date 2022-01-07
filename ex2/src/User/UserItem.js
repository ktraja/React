import React from "react";

function UserItem(props) {
  
  return(
      <div>
          <ul>{props.user.userName} Aged: {props.user.age}</ul>
      </div>
  )
}

export default UserItem;