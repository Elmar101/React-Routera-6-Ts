import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/blog/BlogPage";
import CategoriesPage from "./pages/blog/CategoriesPage";
import PostPage from "./pages/blog/PostPage";
import BlogLayoutPage from "./pages/blog/index";
import NotFoundPage from "./pages/NotFoundPage";
import NotFoundPageForBlog from "./pages/blog/NotFoundPageForBlog";

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "homeActive" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              background: isActive ? "blue" : "transparent",
            })}
          >
            About
          </NavLink>
          <NavLink to="/news">
            {({ isActive }) => <>News {isActive && 'Aktiv'}</>}
          </NavLink>
          <NavLink to='/blog'> Blog </NavLink>
        </nav>
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogLayoutPage />} >
             {/* <Route index={true} element={<BlogPage />} />  =  <Route index={true} element={<BlogPage />} />*/}
            <Route index={true} element={<BlogPage />} />
            <Route path="categories" element={<CategoriesPage/>} />
            <Route path="post/:url" element={<PostPage/>} />
            <Route path="*" element={<NotFoundPageForBlog/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
