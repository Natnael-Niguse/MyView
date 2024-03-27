import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  // State variables to store username, password, and control redirection
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Get setUserInfo function from UserContext
  const { setUserInfo } = useContext(UserContext);

  // Function to handle user login
  async function login(ev) {
    ev.preventDefault(); // Prevent default form submission

    // Send a POST request to login endpoint
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }), // Convert username and password to JSON
      headers: { 'Content-Type': 'application/json' }, // Set content type header
      credentials: 'include', // Include cookies in the request
    });

    // If login is successful, set user info and redirect to home page
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo); // Set user info in the context
        setRedirect(true); // Redirect to home page
      });
    } else {
      alert('Wrong credentials'); // Alert user if login fails
    }
  }

  // If redirect state is true, redirect to home page
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  // Render the login form 
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      {/* Input fields for username and password */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      {/* Button to submit the form */}
      <button>Login</button>
    </form>
  );
}
