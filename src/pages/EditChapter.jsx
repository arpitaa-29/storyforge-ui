import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditChapter() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 🔄 Simulated fetch for existing chapter content
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock chapter content from backend
      const existingContent = chapterId === '1'
        ? 'Once upon a time in a glowing forest...'
        : 'The hero stumbled upon a mysterious cave...';

      setContent(existingContent);
      setIsLoading(false);
    }, 500);
  }, [chapterId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated chapter:', chapterId, content);
    // TODO: Make backend API call to update chapter here

    // Navigate back to viewstory (assuming storyId = 1 for now)
    navigate('/viewstory/1');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-2xl border border-pink-200">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Edit Chapter ✏️</h2>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading chapter...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-64 p-4 border border-gray-300 rounded mb-6"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditChapter;
