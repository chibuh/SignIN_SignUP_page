import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid" >
        <a className="navbar-brand text-white fw-bolder fs-5" style={{margin: '0px 0px 0px 20px'}} href="/">NALANDA</a>
        <form className="d-flex">
          {
            // !localStorage('token')?
            // <a className="navbar-brand text-white-50 fs-6" >You are not logged in!</a> :  <a className="navbar-brand text-white-50 fs-6" >Hi</a>
          }
        </form>
      </div>
    </nav>
  );
}
