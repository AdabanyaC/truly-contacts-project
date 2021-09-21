import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function LoginComponent() {
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <Link to="/auth/register">Register here</Link>
    </div>
  );
}
