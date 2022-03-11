import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUsersDetails } from "../state/action-creators/actions";
  
  import { Link,useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Register() {
  const [newUser, setNewUser] = useState({
    email: "",
    gender: "Gender",
    password: "",
  });
  const dispatch = useDispatch();
  function handleRegister(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const obj = newUser;
    console.log(obj);
    setNewUser({ email: "", gender: "Gender", password: "" });
    dispatch(addNewUsersDetails(obj));
    navigate('/login')
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
              <h3>Register</h3>
              <form>
                <div className="form-outline  mb-3 m-2">
                  <input
                    type="email"
                    id="formExample1"
                    placeholder="Enter Email Address"
                    name="email"
                    value={newUser.email}
                    onChange={(e) => handleRegister(e)}
                  />
                </div>
                <div className="btn-group  mb-3 m-2">
                  <select
                    className="form-select"
                    name="gender"
                    value={newUser.gender}
                    onChange={(e) => handleRegister(e)}
                  >
                    <option value="Gender" disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-outline mb-3 m-2">
                  <input
                    type="password"
                    id="formExample2"
                    placeholder="Confirm Password"
                    name="password"
                    value={newUser.password}
                    onChange={(e) => handleRegister(e)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Do have an account ?<Link to="/Login">Login</Link>
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

export default Register;
