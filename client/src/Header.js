import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { useContext, useEffect } from "react"; // Import useContext and useEffect hooks from react
import { UserContext } from "./UserContext"; // Import UserContext for managing user information
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

/**
 * Header component for displaying navigation links and user information.
 * @returns {JSX.Element} - Returns the Header component JSX.
 */
export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext); // Get user context and setter function
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  // Fetch user profile information when component mounts
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo); // Set user information in context
      });
    });
  }, []);

  // Function to handle user logout 
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null); // Clear user information from context
    navigate('/'); // Navigate to home page after logout
  }

  const username = userInfo?.username; // Get username from user information

  // Render the Header component
  return (
    <header>
      {/* Logo link */}
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {/* Conditional rendering based on user authentication */}
        {username ? (
          // Display links for authenticated user
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        ) : (
          // Display links for non-authenticated user
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
