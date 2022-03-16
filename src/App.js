import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser,deleteUser, updateUser } from "./redux/Users";
import "./App.css";
const App = () => {
  
  const [name,setName]=useState('')
  const[username,setUserName] =useState('');
const[newUserName,setNewUserName]=useState('')

  //user Data
  const userList = useSelector((state) => state.users.value);
  console.log(userList);

  //dispatch
  const dispatch = useDispatch();

  //for adding user
  const addUsers=()=>{
    dispatch(addUser({id:userList.length + 1,name,username}))
    setName('')
    setUserName('')
  }

//deleting user
const deleteUsers =(userId)=>{
  dispatch(deleteUser({id:userId}))
}

//updating users
const updateUsers =(newUserName,Id)=>{
  dispatch(updateUser({userName:newUserName,id:Id}))
  
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
            <h1>{user.username}</h1>
            <input   type="text" placeholder="New UserName" onChange={(e)=>(setNewUserName(e.target.value))} />
            <button onClick={()=>updateUsers(newUserName,user.id)}>update Username</button> <button onClick={()=>deleteUsers(user.id)}>Delete user</button></div>
            
            ) 
          })}
        </div>
      </div>
    </>
  );
};

export default App;
