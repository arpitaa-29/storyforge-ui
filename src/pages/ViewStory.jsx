import { Link, useParams } from 'react-router-dom';

function ViewStory() {
  const { storyId } = useParams();

  const sampleStory = {
    title: "The Moonlit Quest",
    prompt: "A brave soul ventures into a glowing forest under a blood moon...",
    chapters: [
      { id: 1, author: "Alice", content: "Once upon a time in a glowing forest..." },
      { id: 2, author: "Bob", content: "The hero stumbled upon a mysterious cave..." },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-pink-200">
        {/* Story Title */}
        <h1 className="text-4xl font-extrabold text-pink-700 mb-2 text-center tracking-tight">
          {sampleStory.title}
        </h1>

        {/* Story Prompt */}
        <p className="text-md text-center text-gray-600 mb-8 italic">
          {sampleStory.prompt}
        </p>

        {/* Chapters */}
        <div className="space-y-6">
          {sampleStory.chapters.map((ch, index) => (
            <div
              key={ch.id}
              className="bg-pink-50 p-4 rounded-xl shadow border border-pink-100 flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold text-pink-600">
                  Chapter {index + 1} · {ch.author}
                </h3>
                <p className="mt-2 text-gray-700 line-clamp-3">{ch.content}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 ml-4">
                <Link to={`/viewchapter/${ch.id}`}>
                  <button className="bg-pink-100 text-pink-700 px-4 py-1 rounded hover:bg-pink-200 transition">
                    View
                  </button>
                </Link>
                <Link to={`/editchapter/${ch.id}`}>
                  <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded hover:bg-purple-200 transition">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ➕ Add Chapter Button */}
        <div className="mt-10 text-center">
          <Link to={`/addchapter/${storyId}`}>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition font-medium shadow">
              + Add New Chapter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewStory;
