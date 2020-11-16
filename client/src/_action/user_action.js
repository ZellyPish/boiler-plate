import Axios from "axios";
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./types";

export function loginUser(dataToSubmit) {
  const req = Axios.post("/api/users/login", dataToSubmit).then(
    (res) => res.data
  );

  return {
    type: LOGIN_USER,
    payload: req,
  };
}

export function registerUser(dataToSubmit) {
  const req = Axios.post("/api/users/register", dataToSubmit).then(
    (res) => res.data
  );

  return {
    type: REGISTER_USER,
    payload: req,
  };
}

export function auth() {
  const req = Axios.get("/api/users/auth").then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: req,
  };
}
