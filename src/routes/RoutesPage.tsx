import { Route, Routes } from "react-router-dom";
import HomeLayout from "../pages/page";
import HomePage from "../pages/page/HomePage";
import AboutPage from "../pages/page/AboutPage";
import NewsPage from "../pages/page/NewsPage";
import NotFoundPageForBlog from "../pages/blog-page/NotFoundPageForBlog";
import PrivateRouting from "../privite-routing/PrivateRouting";
import ProfilePage from "../pages/page/ProfilePage";
import NotFoundPage from "../pages/page/NotFoundPage";
import LoginPage from "../pages/auth-page/LoginPage";
import BlogLayoutPage from "../pages/blog-page/index";
import CategoriesPage from "../pages/blog-page/CategoriesPage";
import PostDetail from "../pages/blog-page/PostDetail";
import PostPage from "../pages/blog-page/PostPage";
import BlogPage from "../pages/blog-page/BlogPage";
import AuthLayoutPage from "../pages/auth-page/index";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />

          <Route path="/blog" element={<BlogLayoutPage />}>
            {/* <Route index={true} element={<BlogPage />} />  =  <Route path="" element={<BlogPage />} />*/}
            <Route index={true} element={<BlogPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="post" element={<PostPage />}>
              <Route path=":id" element={<PostDetail />} />
            </Route>

            {/* only blog nested page Not Fount , if there is not this not found page work NotFoundPage*/}
            <Route path="*" element={<NotFoundPageForBlog />} />
          </Route>

          {/*Private Route */}
          <Route
            path="profile"
            element={
              <PrivateRouting>
                <ProfilePage />
              </PrivateRouting>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/login" element={<AuthLayoutPage />}>
          <Route index={true} element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPage;
