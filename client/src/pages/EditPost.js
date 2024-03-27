import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  // Get post ID from URL parameters
  const { id } = useParams();

  // State variables to store post data and control redirection
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Fetch post data from the server when component mounts
  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]); // Ensure useEffect runs only when ID changes

  // Function to update post data
  async function updatePost(ev) {
    ev.preventDefault(); // Prevent default form submission

    // Create a new FormData object to send data
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);

    // Include file data if available
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }

    // Send a PUT request to update the post
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include', // Include cookies in the request
    });

    // If request is successful, redirect to post details page
    if (response.ok) {
      setRedirect(true);
    }
  }

  // If redirect state is true, redirect to post details page
  if (redirect) {
    return <Navigate to={'/post/'+id} />;
  }

  // Render the edit post form
  return (
    <form onSubmit={updatePost}>
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
      <Editor onChange={setContent} value={content} />
      {/* Button to submit the form */}
      <button style={{ marginTop:'5px' }}>Update post</button>
    </form>
  );
}
