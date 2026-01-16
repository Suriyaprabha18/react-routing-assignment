import React from "react";
import { Link } from "react-router-dom";
import users from "../data/users";

function Users() {
  return (
    <div className="page">
      <h1>Users List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
