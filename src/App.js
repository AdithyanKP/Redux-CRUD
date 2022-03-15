import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
const App = () => {
  //user Data//
  const userList = useSelector((state) => state.users.value);
  console.log(userList);
  //dispatch
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <div className="addUser">
          <input type="text" placeholder="...Name" />
          <input type="text" placeholder="...Username" />
          <button>Add User</button>
        </div>
        <div className="displayUsers">
          {userList.map((user) => {
            console.log("user:", user.name);
            return <h1>{user.name}</h1>;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
