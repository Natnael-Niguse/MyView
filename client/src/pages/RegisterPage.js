import { useState } from "react";

export default function RegisterPage() {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle user registration
  async function register(ev) {
    ev.preventDefault(); // Prevent default form submission

    // Send a POST request to register endpoint
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }), // Convert username and password to JSON
      headers: { 'Content-Type': 'application/json' }, // Set content type header
    });

    // Display registration status based on response status
    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  }

  // Render the registration form 
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
}
