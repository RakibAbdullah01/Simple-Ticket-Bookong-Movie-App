import './App.scss'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Movie />}></Route>
    </Routes>
  );
}

export default App;
