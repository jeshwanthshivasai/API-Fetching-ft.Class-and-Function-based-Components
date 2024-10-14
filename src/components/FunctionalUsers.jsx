// src/components/FunctionalUsers.jsx
import React, { useState, useEffect } from 'react';

function FunctionalUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.slice(5, 10)); // Get next 5 users
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Next 5 Users (Functional Component)</h2>
      <table border="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <img
                  src={`https://robohash.org/${user.id}?set=set2&size=50x50`}
                  alt={`${user.name}'s avatar`}
                  style={{ borderRadius: '50%' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FunctionalUsers;
