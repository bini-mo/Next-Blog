import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Latest Blog Posts
          </h1>

          <ul className="space-y-10">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.body}</p>
                <CommentForm postId={post.id} />
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function CommentForm({ postId }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;

    const newComment = {
      id: Date.now(),
      text: comment,
    };

    setComments([newComment, ...comments]);
    setComment('');
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 space-y-3">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className="p-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <p className="text-gray-800">{c.text}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
