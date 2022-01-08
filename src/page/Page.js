// import { Link } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom"
// import Button from '@mui/material/Button';


export default function Page({details}) {
    const navigate = useNavigate();

    const clearStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
    }
    details= ["1","1","2"];

    someth();
    async function someth() {
        if(!localStorage.getItem('token'))
        {
            navigate("/");
        }
    }

        return (
            <>
            <div className="card container-fluid mt-5" style={{ width: "30rem" }}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" className="card-img-top container-fluid" style={{ width: "10rm"}} alt="..."/>
                <div className="card-body">
                <h3 className="card-title">{localStorage.getItem('name')}</h3>
                <p className="card-text">
                    <b>User Name</b> : {localStorage.getItem('username')} <br/>
                    <b>Email-ID</b>  : {localStorage.getItem('email')}
                </p>
                
                <Link variant="text" to="/" onClick={clearStorage}>Log Out</Link>
                </div>
            </div>
            </>
        );
}
