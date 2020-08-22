import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function Changing(event) {
    event.preventDefault();
  }
  function Naming(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={Changing}>
        <input
          onChange={Naming}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={Naming}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
