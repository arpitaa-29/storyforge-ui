import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">StoryForge</Link>
      <div>
        <Link to="/dashboard" className="mr-4 text-blue-500 hover:underline">Dashboard</Link>
        <Link to="/login" className="text-red-500 hover:underline">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
