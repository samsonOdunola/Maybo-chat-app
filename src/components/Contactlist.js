import db from "../config";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

export default function Contactlist() {
  const [loading, setLoading] = useState(true);
  //   const [allUsers, setAllUsers] = useState();
  const userRef = ref(db, "user/");

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      console.log(snapshot.val());
      setAllUsers(snapshot.val());
      setLoading(false);
    });
  }, [userRef]);
  return <>{loading ? "Loading" : <ul>working</ul>}</>;
}
