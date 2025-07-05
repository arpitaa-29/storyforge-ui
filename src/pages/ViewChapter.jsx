import { useParams, useNavigate } from 'react-router-dom';

function ViewChapter() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const chapterData = {
    id: parseInt(chapterId),
    title: `Chapter ${chapterId}`,
    author: chapterId % 2 === 0 ? 'Bob' : 'Alice',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...",
    totalChapters: 5,
  };

  const handleNext = () => {
    if (chapterData.id < chapterData.totalChapters) {
      navigate(`/viewchapter/${chapterData.id + 1}`);
    }
  };

  const handlePrev = () => {
    if (chapterData.id > 1) {
      navigate(`/viewchapter/${chapterData.id - 1}`);
    }
  };

  const handleBackToStory = () => {
    navigate('/viewstory/1'); // 🔁 update with dynamic story ID if needed later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full border border-pink-200">
        
        {/* 🔙 Back to Story Button */}
        <div className="mb-4">
          <button
            onClick={handleBackToStory}
            className="text-sm text-pink-600 hover:underline"
          >
            ⬅ Back to Story
          </button>
        </div>

        <h2 className="text-3xl font-bold text-pink-700 mb-1 text-center">
          {chapterData.title}
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          by {chapterData.author}
        </p>

        <div className="text-gray-700 text-md leading-relaxed whitespace-pre-line mb-8">
          {chapterData.content}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={chapterData.id === 1}
            className={`px-4 py-2 rounded-full transition font-medium ${
              chapterData.id === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }`}
          >
            ⬅ Previous
          </button>

          <button
            onClick={handleNext}
            disabled={chapterData.id === chapterData.totalChapters}
            className={`px-4 py-2 rounded-full transition font-medium ${
              chapterData.id === chapterData.totalChapters
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }`}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewChapter;
