//import React from 'react'

import { FormEvent, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default function AddNewVehicle() {
  const [vName, setVName] = useState("");
  const [mYear, setMYear] = useState("");
  const [vUrl, setVUrl] = useState("");

  const handleSave =(e:FormEvent)=>{
    e.preventDefault();
    console.log(vName);
    console.log(mYear);
    console.log(vUrl);
    
    const vehicle = {vName,mYear,vUrl};
    axios.post("http://localhost:7007/vehile/add",vehicle).then(res=>{
      console.log("res from server--->"+res.data);
    })

  };
  const handleName = (e: any) => {
    console.log(e.target.value);
    setVName(e.target.value);
  };

  const handleYear = (g: any) => {
    setMYear(g.target.value);
  };

  const handleUrl = (k: any) => {
    setVUrl(k.target.value);
  };

  return (
    <div>
      <NavBar />

      <h3 className="text-center text-white pt-5">ADD NEW VEHICLE</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form onSubmit={handleSave}>
                <h3 className="text-center text-info">ADD NEW VEHICLE</h3>

                <div className="form-group">
                  <label className="text-info">Vehicle Name:</label>
                  <input
                    type="text"
                    value={vName}
                    onChange={handleName}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Model Year</label>
                  <input
                    type="text"
                    value={mYear}
                    onChange={handleYear}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Vehicle Image URL</label>
                  <input
                    type="text"
                    value={vUrl}
                    onChange={handleUrl}
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
                    value="ADD"
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
