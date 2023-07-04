import { useState } from "react";
export default function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const loginUser = () => {};
  return (
    <>
      <div>
        <div className="form">
          <h1>Header</h1>
          <input
            name="username"
            placeholder="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button className="createUserbtn" onClick={loginUser}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
