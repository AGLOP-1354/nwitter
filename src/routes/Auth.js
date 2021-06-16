import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [newAccount, setnewAcoount] = useState(true);
        const [error, seterror] = useState('')
        const onChange = (event) => {
            const {target: {name, value}, } =event;
            if(name === "email"){
                setEmail(value)
            }else if(name === "password"){
                setPassword(value)
            }
        };
        const onSubmit = async (event) =>{
            event.preventDefault();
            try{
                let data;
            if(newAccount){
               data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            }else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data);
        } catch(error){
            seterror(error.message);
        }
        }
    
    const toggleAccount = ()=>{
        setnewAcoount((prev)=> !prev);
    }
    const onSocialClick = async (event)=>{
        const {target:{name},
    }= event;
    let provider;
    if(name === 'google'){
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if (name ==='github'){
        provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="email" required value={email} name="email" onChange={onChange}/>
                <input type="password" placeholder="Password" required value={password} name="password" onChange={onChange}/>
                <input type="submit" value={newAccount ? "Create Account" : "Sign in"} />
                <br />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with google</button>
                <button onClick={onSocialClick} name="github">Continue with github</button>
            </div>
        </div>
    )
}
export default Auth;