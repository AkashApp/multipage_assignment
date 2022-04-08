import axios from "axios";
import "./Users.scss";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/registration").then((response) => {
      setUsers([...response.data]);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="Main_User">
      <div className="Home_But">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <h1>See the User Information Here</h1>
      <div className="All_Users">
        {users.map((item) => (
          <div key={item.id}>
            <h3>Name:- {item.Name}</h3>
            <h3>Age:- {item.Age}</h3>
            <h3>Date Of Birth:- {item.Dob}</h3>
            <h3>Residential State:- {item.States}</h3>
            <h3>Address:- {item.Add}</h3>
            <h3>Pincode:- {item.Pincode}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
