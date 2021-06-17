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
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args)=> user.updateProfile(args),
        });
      }else{
        setIsloggedIn(false);
        setUserObj(null);
      }
      setinit(true);
    })
  },[]);
  const refreshUser = ()=>{
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args)=> user.updateProfile(args),
    });
  }
  return(
   <>
  {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
  </>
  )
}

export default App;