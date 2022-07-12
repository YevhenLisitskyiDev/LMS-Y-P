import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import "./teleporthq/style.css";
import setUserData from "./services/users/setUserData";
import Auth from "./teleporthq/pages/auth.js"

import PrivatePage from "./teleporthq/pages/private-page";
import Admin from "./teleporthq/pages/admin";
// import Home from "./pages/home";
import Home from "./teleporthq/pages/home";
import Course from "./teleporthq/pages/course.js";

import store from "./store/index.ts";

const App = () => {
  const user = store.user.hook();
  const isAdmin = store.isAdmin.hook();
  const message = store.message.hook();

  useEffect(() => {
    if (store.auth.session.value) setUserData();
  }, []);

  useEffect(() => {}, [message]);

  return (
    <Router>
      <GlobalStyle />
      <nav
        style={{
          display: "flex",
          position: "fixed",
          width: "100vw",
          zIndex: 999,
          top: 0,
          height: 48,
          justifyContent: "center",
          background: "#ccc",
          alignItems: "center",
        }}
      >
        <Link to="/">HOME</Link>&nbsp;|&nbsp;
        {user ? (
          <>
            {isAdmin ? (
              <>
                <Link to="/admin">ADMIN</Link>&nbsp;|&nbsp;
              </>
            ) : (
              ""
            )}
            <Link to="/private">PRIVATE PAGE</Link>&nbsp;|&nbsp;
            <span onClick={store.auth.signOut}>LOG OUT</span>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login"> SIGN IN</Link>&nbsp;|&nbsp;
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </nav>
      <PrivateRoute exact component={Home} path="/" />
      <Route exact component={Course} path="/courses/:id" />
      <Route exact component={Auth} path="/signup" />
      <Route exact component={Auth} path="/login" />
      {isAdmin ? <AdminRoute exact component={Admin} path="/admin" /> : ""}

      <PrivateRoute exact component={PrivatePage} path="/private" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
