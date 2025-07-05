import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", { username, email, password });
    // TODO: Call backend API here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-pink-200"
      >
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-1 tracking-tight">
          Join StoryForge
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Create your account and start writing your world.
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition"
        >
          Register
        </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
