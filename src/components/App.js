import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import {authService} from "../fbase";

function App() {
  const [init, setinit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsloggedIn(true);
        setUserObj(user);
      }else{
        setIsloggedIn(false);
      }
      setinit(true);
    })
  },[])
  return(
   <>
  {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
  <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
  )
}

export default App;