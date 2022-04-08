import React from "react";
import "./One.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export const One = () => {
  const navigate = useNavigate();
  const { name, age, dob, dispatch } = React.useContext(UserContext);

  const NameChange = (e) => {
    dispatch({ type: "NAME", payload: e.target.value });
  };

  const AgeChange = (e) => {
    dispatch({ type: "AGE", payload: e.target.value });
  };

  const dobChange = (e) => {
    dispatch({ type: "DOB", payload: e.target.value });
  };

  const HandleClick = () => {
    if (name != "" && age != "" && dob != "") {
      navigate("/registration/two");
    } else {
      alert("You have to fill right information");
    }
  };

  return (
    <div className="Main_One">
      <div>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            NameChange(e);
          }}
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => {
            AgeChange(e);
          }}
        />
        <input
          type="date"
          placeholder="Enter You D-O-B"
          value={dob}
          onChange={(e) => {
            dobChange(e);
          }}
        />
        <button onClick={HandleClick}>Next</button>
      </div>
    </div>
  );
};
