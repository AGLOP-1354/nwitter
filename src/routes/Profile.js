import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogoutClick = ()=>{
        authService.signOut();
        history.push("/");
    };
    const getMyNweets = async()=>{
        const nweets = await dbService
        .collection("nweets")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createAt")
        .get();
        console.log(nweets.docs.map((doc)=>{doc.data()}))
    }
    useEffect(()=>{
        getMyNweets();
    }, []);
    const onChange = (e)=>{
        const {
            target:{value},
        }=e;
        setNewDisplayName(value);
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName:newDisplayName,
            });
            refreshUser();
        }
    }
return(
    <div className="container">
        <form onSubmit={onSubmit} className="profileForm">
            <input 
                type="text" 
                autoFocus
                placeholder="Display name"
                onChange={onChange}
                value={newDisplayName}
                className="formInput"
                /> 
            <input
                type="submit"
                value="Update Profile"
                className="formBtn"
                style={{
                    marginTop: 10,
                }} /> 
        </form>
        <span className="formBtn cancelBtn logOut" onClick={onLogoutClick}>
            Log Out
        </span>
    </div>
    )
}
export default Profile;