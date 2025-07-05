import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddChapter() {
  const [content, setContent] = useState('');
  const { storyId } = useParams(); // future-ready for dynamic story ID
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New chapter for story", storyId, ":", content);
    // TODO: Call backend to save chapter
    // After successful submit:
    navigate(`/viewstory/${storyId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl border border-pink-200"
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-2 text-center">Add a Chapter ✨</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Contribute a beautiful moment to this story!
        </p>

        <textarea
          placeholder="Write your chapter here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-64 p-4 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <button
          type="submit"
          className="w-full mt-6 bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition"
        >
          Add Chapter
        </button>
      </form>
    </div>
  );
}

export default AddChapter;
