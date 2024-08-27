// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Home from "./components/Home";
import Profile from "./components/Profile";
// import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

function BlogPost() {
  const { id } = useParams();
  return <div>Blog Post ID: {id}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/profile/*" element={<Profile />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/user/:userId" element={<UserProfile />} />
        {/* <Route
          path="/profile/*"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Profile }
            />
          }
        /> */}
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
