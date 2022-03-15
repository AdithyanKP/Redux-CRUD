import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/Users";
import "./App.css";
const App = () => {
  
  const [name,setName]=useState('')
  const[username,setUserName] =useState('');

  //user Data//
  const userList = useSelector((state) => state.users.value);
  console.log(userList);

  //dispatch
  const dispatch = useDispatch();

  //for adding user//
  const addUsers=()=>{
    dispatch(addUser({id:userList[userList.length - 1].id + 1,name,username}))
    setName('')
    setUserName('')
  }
  
  return (
    <>
      <div className="App">
        <div className="addUser">
          <input value={name} type="text" placeholder="...Name" onChange={(e)=>setName(e.target.value)} />
          <input value={username} type="text" placeholder="...Username" onChange={(e)=>setUserName(e.target.value)}/>
          <button onClick={()=>addUsers()}>Add User</button>
        </div>
        <div className="displayUsers">
          {userList.map((user) => {
            console.log("user:", user.username);
            return( <div> <h1>{user.name}</h1>
            <h1>{user.username}</h1></div>) 
          })}
        </div>
      </div>
    </>
  );
};

export default App;
