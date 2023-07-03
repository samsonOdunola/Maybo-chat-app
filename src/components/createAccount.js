import { ref, set } from "firebase/database";
import db from "../config";
import { useState } from "react";
const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const addNewUser = () => {
    set(ref(db, `user/${userName}`), {
      password: password,
      full_name: `${firstName} ${lastName}`,
    });
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
  };
  return (
    <>
      <div>
        <div className="form signupform">
          <h1>Header</h1>
          <input
            name="username"
            placeholder="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <section className="form-name-section">
            <input
              name="firstname"
              placeholder="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              name="lastname"
              placeholder="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </section>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="createUserbtn" onClick={addNewUser}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
