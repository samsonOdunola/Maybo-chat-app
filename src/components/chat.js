import { useState } from "react";
// import db from "../config";
export default function Chat() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="mainchatbody">
        <header>
          <div className="profile-pic"></div>
          <h2>contact name</h2>
        </header>
        <ul className="messagelist">
          <li className="reciepient">
            <p>My name is periwinkle</p>{" "}
          </li>
          <li className="sender">
            <p>My name is not periwinkle</p>{" "}
          </li>
        </ul>
        <div className="messagebox">
          <input
            name="message"
            value={message}
            placeholder="Enter Message"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
