import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  // State variables to store post data and control redirection
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Function to create a new post
  async function createNewPost(ev) {
    // Create a new FormData object to send data
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault(); // Prevent default form submission

    // Send a POST request to create a new post
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include', // Include cookies in the request
    });

    // If request is successful, redirect to home page
    if (response.ok) {
      setRedirect(true);
    }
  }

  // If redirect state is true, redirect to home page
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  // Render the create post form
  return (
    <form onSubmit={createNewPost}>
      {/* Input fields for title, summary, and file upload */}
      <input
        type="title"
        placeholder={'Title'}
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={'Summary'}
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={ev => setFiles(ev.target.files)}
      />
      {/* Rich text editor for post content */}
      <Editor value={content} onChange={setContent} />
      {/* Button to submit the form */}
      <button style={{ marginTop:'5px' }}>Create post</button>
    </form>
  );
}
