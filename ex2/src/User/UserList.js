import React from "react";
// import UserItem from "./UserItem";
import Card from '../UI/Card';
import styles from './UserList.module.css';

function UserList(props) {
  
    return (
    <Card className={styles.users}>
        <ul>
          {/* { (props.userList.length !== 0)? props.userList.map(user => <UserItem key={Math.random()} user={user}/>) : 'NO Records'} */}
          {/* { (props.userList.length !== 0)? props.userList.map(user => <li>{user.userName} Aged: {user.age}</li>) : 'NO Records'} */}
          { props.userList.map(user => <li key={Math.random()}>{user.userName} Aged: {user.age}</li>)}
        </ul>
    </Card>  
    )
}

export default UserList;