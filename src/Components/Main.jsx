import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Login from "./Login";
import Register from "./Register";

function Main() {
  return (
    <>
      {/* <Login /> */}
      <Register/>
    </>
  );
}

export default Main;
