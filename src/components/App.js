import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import {authService} from "../fbase";

function App() {
  const [init, setinit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsloggedIn(true);
      }else{
        setIsloggedIn(false);
      }
      setinit(true);
    })
  },[])
  return(
   <>
  {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
  <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
  )
}

export default App;