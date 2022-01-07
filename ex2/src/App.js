import React,{useState} from 'react';
import AddUser from './User/AddUser';
import './App.css';
import UserList from './User/UserList';

function App() {
  const [users,addUsers] = useState([]);
 
  function addUserRecordHandler(userRec){
    addUsers(prevUsers=>{
        return [{userName: userRec.userName, age: userRec.age} , ...prevUsers];
     });
   }

  return (
    <div className="App"> 
       <AddUser onAddUserRecord={addUserRecordHandler}/>
        <UserList userList={users}/>
    </div>
  );
}

export default App;
