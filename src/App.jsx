// // src/App.jsx
// import React from 'react';
// import Users from './components/Users'; 

// function App() {
//   return (
//     <div className="App">
//       <Users />
//     </div>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import ClassUsers from './components/ClassUsers';
import FunctionalUsers from './components/FunctionalUsers';

function App() {
  return (
    <div className="App">
      <ClassUsers />       {/* Class-based component for first 5 users */}
      <FunctionalUsers />  {/* Functional component for next 5 users */}
    </div>
  );
}

export default App;
