import React, { useState, useContext, createContext } from "react";

var userDetailContext = createContext(null);

const UserDetailsComponent = () => {
  // const [userDetails] = useState({
  //   name: "saurabh",
  //   age: 22,
  // });
  const data = {
    name: "saurabh",
    age: 22,
  };

  return (
    <userDetailContext.Provider value={data}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent />
    </userDetailContext.Provider>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
};

const SubChildComponent = () => {
  var contextData = useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
};
export default UserDetailsComponent;
