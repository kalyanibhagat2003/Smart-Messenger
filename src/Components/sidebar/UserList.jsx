import { useState } from "react";

import { users } from "../../data/users";

function UserList({ setSelectedUser }) {

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>

    user.name.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div className="sidebar">

      <h2>Messages</h2>

      <input
        className="search-box"

        type="text"

        placeholder="Search..."

        value={search}

        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (

        <div

          className="contact"

          key={user.id}

          onClick={() => setSelectedUser(user)}
        >

        <img
  className="profile-pic"

  src={user.image}

  alt={user.name}
/>

          <span>{user.name}</span>

          {user.online && <span>🟢</span>}

          {user.unread > 0 && (

            <span className="unread-badge">

              {user.unread}

            </span>

          )}

        </div>

      ))}

    </div>

  );
}

export default UserList;