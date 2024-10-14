// src/components/ClassUsers.jsx
import React, { Component } from 'react';

class ClassUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      this.setState({ users: data.slice(0, 5), loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h2>First 5 Users (Class Component)</h2>
        <table border=''>
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
}

export default ClassUsers;
