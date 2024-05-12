import React, {FC} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent";

 const App:FC =()=> {
     const lift=(user:any)=>{
         console.log(user);
     }
  return (
    <>
<UsersComponent lift={lift}/>
    </>
  );
}

export default App;
