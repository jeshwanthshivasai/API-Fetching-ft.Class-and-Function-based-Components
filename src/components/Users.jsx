// import React, { useState, useEffect } from 'react';

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch users data when the component mounts
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <div>
//         {users.map(user => (
//           <div key={user.id} style={{ marginBottom: '20px' }}>
//             <h2>{user.name}</h2>
//             <img 
//               src={`https://robohash.org/${user.id}?set=set2&size=150x150`} 
//               alt={`${user.name}'s avatar`} 
//               style={{ borderRadius: '50%' }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Users;
