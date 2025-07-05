import { useState } from 'react';

function CreateStory() {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating story:", { title, prompt });
    // TODO: Call backend API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg border border-pink-200"
      >
        <h2 className="text-3xl font-extrabold text-pink-700 mb-2 text-center tracking-tight">
          Start a New Story 📖
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Begin with a title and a creative spark ✨
        </p>

        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <textarea
          placeholder="Write your story prompt or opening scene..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full mb-6 p-3 border border-pink-200 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition"
        >
          Start Story
        </button>
      </form>
    </div>
  );
}

export default CreateStory;
