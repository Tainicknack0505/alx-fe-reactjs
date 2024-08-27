
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Profile from "./components/Profile";
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
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user/:userId" element={<UserProfile />} />
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
