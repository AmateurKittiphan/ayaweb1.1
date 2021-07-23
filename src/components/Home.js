import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are Logged in <Link to="/admin">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/login" className="btn btn-success">
            Log in
          </Link>
          or
          <Link to="/signup" className="btn btn-danger">
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
};

export default Home;
