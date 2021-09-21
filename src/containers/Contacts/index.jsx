import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { GlobalContext } from "../../context/Provider";

export default function ContactsComponent() {
  const context = useContext(GlobalContext);
  console.log({ context });

  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
    </div>
  );
}
