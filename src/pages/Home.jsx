import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-pink-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center w-full max-w-lg border border-pink-200">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-2 tracking-tight">
          ✨ StoryForge
        </h1>
        <p className="text-lg text-pink-800 font-medium mb-4">
          Dream. Write. Create — together.
        </p>

        <p className="text-gray-600 mb-6">
          A cozy space where friends come together to spin magical tales one chapter at a time.
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition shadow">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-white border border-pink-400 text-pink-600 hover:bg-pink-100 px-6 py-2 rounded-full transition shadow">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
