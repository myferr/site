import { createRoot } from "react-dom/client";
import "./index.css";
import "./font/useGeist.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/App.tsx";
import Posts from "./pages/posts/Posts.tsx";
import Blog from "./pages/posts/blog/Blog.tsx";
import HelloWorld_Post from "./pages/posts/blog/my-love-for-music/page.tsx";
import About from "./pages/about/About.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/blog" element={<Blog />} />
      <Route
        path="/posts/blog/my-love-for-music"
        element={<HelloWorld_Post />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
