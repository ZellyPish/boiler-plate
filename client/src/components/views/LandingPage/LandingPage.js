import Axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function LandingPage(props) {
  function onClickHandler() {
    Axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("Log out failed");
      }
    });
  }

  return (
    <div>
      <button onClick={onClickHandler}>Log Out</button>
    </div>
  );
}

export default withRouter(LandingPage);
