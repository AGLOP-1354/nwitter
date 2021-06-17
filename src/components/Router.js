import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Navigation from "./Navigation";
import Profile from "routes/Profile"

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    return(
        <div
            style={{
              maxWidth: 890,
              width: "100%",
              margin: "0 auto",
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
            }}
          >
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home userObj={userObj} />
                </Route>
                <Route exact path="/profile">
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                </Route>
                </> ) : (
                <Route exact path="/">
                
                    <Auth />
                
                </Route>
                )}
            </Switch>
        </Router>
        </div>
    )
}

export default AppRouter;