import React, { useEffect } from "react";
import "./Two.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

export const Two = () => {
  const navigate = useNavigate();
  const { name, age, dob, states, add, pincode, dispatch } =
    React.useContext(UserContext);

  useEffect(() => {
    if (name == "" || age == "" || dob == "") {
      alert("first fill the name, age and DOB");
      navigate("/registration/one");
      return;
    }
    return;
  }, []);

  const StateChange = (e) => {
    dispatch({ type: "STATES", payload: e.target.value });
  };

  const AddChange = (e) => {
    dispatch({ type: "ADD", payload: e.target.value });
  };

  const PinCodeChange = (e) => {
    dispatch({ type: "PINCODE", payload: e.target.value });
  };

  const HandleClick = () => {
    if (
      name != "" &&
      age != "" &&
      dob != "" &&
      states != "" &&
      add != "" &&
      pincode != ""
    ) {
      axios
        .post("http://localhost:3001/registration", {
          Name: name,
          Age: age,
          Dob: dob,
          States: states,
          Add: add,
          Pincode: pincode,
        })
        .then(() => {
          alert(`${name} you Have Successfully Created Account!`);
        })
        .then(() => {
          alert(`${name} you Have Successfully Created Account!`);
          navigate("/");
        });
      return;
    } else {
      alert("You have to fill right information");
      return;
    }
  };

  return (
    <div className="Main_Two">
      <div>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your State"
          value={states}
          onChange={(e) => {
            StateChange(e);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Address"
          value={add}
          onChange={(e) => {
            AddChange(e);
          }}
        />
        <input
          type="number"
          placeholder="Enter Your PinCode"
          value={pincode}
          onChange={(e) => {
            PinCodeChange(e);
          }}
        />
        <button onClick={HandleClick}>Submit</button>
      </div>
    </div>
  );
};
