import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { loginData } from "../state/action-creators/actions";
function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let from = location.state?.from?.pathname || "/";
  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    const obj = user;
    setUser({ email: "", password: "" });
    dispatch(loginData(obj));
    navigate('/fetch_with_auth')
  }
  return (
    <>
      <NavBar />
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="login"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h3>Login</h3>
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    placeholder="Enter Email Address"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleInputs(e)}
                  />
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleInputs(e)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={(e) => handleLogin(e)}
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/Register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
