import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './UserAlert.module.css';

function UserAlert(props){

return(
  <div>
    <div className={styles.backdrop} onClick={props.onOk}>
    </div>  
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>

      <footer className={styles.actions}>
        <Button onClick={props.onOk}>{props.action}</Button>
      </footer>
    </Card>
</div>
)
}

export default UserAlert;