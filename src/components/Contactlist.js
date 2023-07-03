import db from "../config";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

export default function Contactlist() {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const userRef = ref(db);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      console.log(snapshot.val().user);
      setAllUsers(snapshot.val());
      setLoading(false);
    });
  }, []);
  return <>{loading ? "Loading" : <ul>working</ul>}</>;
}
