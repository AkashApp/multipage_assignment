import React from "react";

const initState = {
  name: "",
  age: "",
  dob: "",
  states: "",
  add: "",
  pincode: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "DOB":
      return { ...state, dob: action.payload };
    case "STATES":
      return { ...state, states: action.payload };
    case "ADD":
      return { ...state, add: action.payload };
    case "PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const { name, age, dob, states, add, pincode } = state;

  return (
    <UserContext.Provider
      value={{ name, age, dob, states, add, pincode, dispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};
