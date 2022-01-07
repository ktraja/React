import React from "react";
import MenuItem from "./MenuItem";
import Card from "../UI/Card";

function Menu(props) {
    
return (
<Card>
{props.menuList.map((menu) => <MenuItem key={Math.random()} menu={menu}/>)}
</Card>
)
}

export default Menu;