import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import {useSelector,useDispatch} from 'react-redux';
import {LogOut} from '../state/action-creators/actions'
import { Link } from "react-router-dom";

function NavBar() {
  const { isLogin } = useSelector((state) => state);
  const dispatch = useDispatch();
 function handleSubmit(e){
   console.log("logout run....")
   dispatch(LogOut("logout"));
   console.log(isLogin);
 }
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
              <Link className="m-2" to="/fetch_normal">
                  without_login_Page
                </Link>
                <Link className="m-2" to="/fetch_with_auth">
                fetch_with_auth
                </Link>
              </MDBNavbarItem>
              { (isLogin) &&
                <MDBNavbarItem>
                  <button className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Logout</button>
                </MDBNavbarItem>
              }
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default NavBar;
