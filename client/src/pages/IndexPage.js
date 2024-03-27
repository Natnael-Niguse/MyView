import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  // State variable to store posts data
  const [posts, setPosts] = useState([]);

  // Fetch posts data from the server when component mounts 
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  // Render the posts
  return (
    <>
      {/* Check if there are posts available */}
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}
