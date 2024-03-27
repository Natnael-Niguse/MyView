import { formatISO9075 } from "date-fns"; // Import formatISO9075 function from date-fns
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

/**
 * Post component for rendering individual blog posts.
 * @param {string} _id - The ID of the post.
 * @param {string} title - The title of the post.
 * @param {string} summary - The summary of the post.
 * @param {string} cover - The URL of the post cover image.
 * @param {string} content - The content of the post.
 * @param {string} createdAt - The creation date of the post.
 * @param {object} author - The author information of the post.
 * @returns {JSX.Element} - Returns the Post component JSX.
 */
export default function Post({ _id, title, summary, cover, createdAt, author }) {
  return (
    <div className="post">
      {/* Post image with link to the post page */}
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt={title} />
        </Link>
      </div>
      {/* Post details */}
      <div className="texts">
        {/* Post title with link to the post page */}
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        {/* Author and creation date  */}
        <p className="info">
          {/* Author name with link to author profile */}
          <Link to={`/author/${author.username}`} className="author">
            {author.username}
          </Link>
          {/* Creation date */}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        {/* Post summary */}
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
