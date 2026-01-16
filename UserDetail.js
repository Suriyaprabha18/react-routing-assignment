import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="page">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button className="btn" onClick={() => navigate("/users")}>
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;
