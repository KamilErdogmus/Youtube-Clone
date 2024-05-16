import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail/İndex";
import Results from "./pages/Results";

import Undefinedd from "./pages/Undefined";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Undefinedd />} />
      </Routes>
    </BrowserRouter>
  );
}
