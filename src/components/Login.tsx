//import React from 'react'

import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const myNav = useNavigate();
    const handleSubmitt = (e:FormEvent)=>{
        e.preventDefault();
        const url = "http://localhost:9090/four/login?uname=basha&password=1234";
        axios.get(url).then(res =>{
            console.log("from spring boot --->res--."+res.data);
if(res.data == true){
    myNav("/home");
}
        });
      

    };
  return (
    <div>
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form onSubmit={handleSubmitt}>
                <h3 className="text-center text-info">Login</h3>

                <div className="form-group">
                  <label className="text-info">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info"></label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
