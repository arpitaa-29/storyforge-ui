import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateStory from "./pages/CreateStory";
import ViewStory from "./pages/ViewStory";
import AddChapter from "./pages/AddChapter";
import ViewChapter from "./pages/ViewChapter";
import EditChapter from './pages/EditChapter';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/createstory" element={<CreateStory />} />
      <Route path="/viewstory/:storyId" element={<ViewStory />} />
      <Route path="/addchapter/:storyId" element={<AddChapter />} />
      <Route path="/viewchapter/:chapterId" element={<ViewChapter />} />
      <Route path="/editchapter/:chapterId" element={<EditChapter />} />

    </Routes>
  );
}

export default App;
