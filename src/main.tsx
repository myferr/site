import { Index, Router } from "simply-react-router";
const root = document.getElementById("root");
import "./index.css";

import App from "./pages/index";
import Blog from "./pages/blog/index";
import HelloWorldPost from "./pages/blog/posts/hello-world";

Index.Set(root, <App />);
Router.Render(
  root,
  Router.Routes({
    "/blog": <Blog />,
    "/blog/hello-world": <HelloWorldPost />,
  })
);
