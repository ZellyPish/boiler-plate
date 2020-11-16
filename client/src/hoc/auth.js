import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "../_action/user_action";

// null 아무나 출입 가능
// true 로그인한 유저만 출입 가능
// false 로그인한 유저는 출입 불가능

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log("뿌뿌뿌", res);

        if (!res.payload.isAuth) {
          //로그인하지 않은 상태
          if (option) {
            props.history.push("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else if (option === false) {
            props.history.push("/");
          }
        }
      });
    }, [dispatch, props.history]);
    return <SpecificComponent />;
  }

  return withRouter(AuthenticationCheck);
}
