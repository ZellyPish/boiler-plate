import Axios from "axios";
import React from "react";

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

export default LandingPage;
