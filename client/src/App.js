import './App.css'; // Import CSS file for global styles
import Post from "./Post"; // Import Post component
import Header from "./Header"; // Import Header component
import { Route, Routes } from "react-router-dom"; // Import Route and Routes components from react-router-dom
import Layout from "./Layout"; // Import Layout component
import IndexPage from "./pages/IndexPage"; // Import IndexPage component
import LoginPage from "./pages/LoginPage"; // Import LoginPage component
import RegisterPage from "./pages/RegisterPage"; // Import RegisterPage component
import { UserContextProvider } from "./UserContext"; // Import UserContextProvider component
import CreatePost from "./pages/CreatePost"; // Import CreatePost component
import PostPage from "./pages/PostPage"; // Import PostPage component
import EditPost from "./pages/EditPost"; // Import EditPost component

function App() {
  return (
    <UserContextProvider> {/* Provide the UserContextProvider to the entire application */}
      <Routes> {/* Define routes using Routes component */}
        <Route path="/" element={<Layout />}> {/* Main route for layout */}
          <Route index element={<IndexPage />} /> {/* IndexPage route */}
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
          <Route path="/register" element={<RegisterPage />} /> {/* RegisterPage route */}
          <Route path="/create" element={<CreatePost />} /> {/* CreatePost route */}
          <Route path="/post/:id" element={<PostPage />} /> {/* PostPage route */}
          <Route path="/edit/:id" element={<EditPost />} /> {/* EditPost route */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App; // Export the App component as default 
