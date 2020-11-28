import Axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function LandingPage(props) {
  function onLogOutHandler() {
    Axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("Log out failed");
      }
    });
  }

  function onRegisterHandler() {
    props.history.push("/register");
  }

  function onLoginHandler() {
    props.history.push("/login");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <button onClick={onRegisterHandler}>Register</button>
      <button onClick={onLoginHandler}>Login</button>
      <button onClick={onLogOutHandler}>Logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
