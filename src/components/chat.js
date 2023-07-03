import { useState } from "react";
import db from "../config";
export default function Chat() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="mainchatbody">
        <header></header>
        <div className="messagebox">
          <input
            name="message"
            value={message}
            placeholder="Enter Message"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}
