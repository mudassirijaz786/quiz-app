import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const [name, setName] = useState("");

  return (
    <div className="for-username">
      <label for="username">User name:</label>
      <br />
      <input
        required
        type="text"
        className="input-field"
        value={name}
        onChange={(event) => setName(event.target.value)}
        name="username"
        placeholder="Please enter your name"
      />
      <br />
      <Link to={{ pathname: "/quiz", query: { name } }}>To Quiz</Link>
    </div>
  );
};

export default User;
