import React,{useState} from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button  from "../UI/Button";
import UserAlert from "./UserAlert";

function AddUser(props) {
  
  const [userName,setUsername] = useState('');
  const [age,setAge] = useState('');  
  const [errorMsg,setErrorMsg] = useState();

  function changeUserHandler(event) {
    setUsername(event.target.value);
  }

  function changeAgeHandler(event) {
    setAge(event.target.value);
  }

  function errorHandler() {
    setErrorMsg(null);
  }

  function addUserHandler(event){
      event.preventDefault();
   
      if (userName.trim().length === 0 || age.trim().length === 0) {
         setErrorMsg({
           title: 'Invalid Input',
           message: 'Enter valid name and age (non empty)'
         });
         return;
        }
      
      if (+age < 1) {
        setErrorMsg({
         title: 'Innvalid Age',
         message: 'Eneter valid Age(>1)'
        });
         return;
      }

      props.onAddUserRecord({userName:userName,age:age})
      setUsername('');
      setAge('');
  }
    return (
      <div>
         {errorMsg && <UserAlert onOk={errorHandler} title={errorMsg.title} message={errorMsg.message} action='Close' /> }
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>User Name</label>
            <input id='username' value={userName} type='text' onChange={changeUserHandler}/>
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' value={age} onChange={changeAgeHandler} />
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser;