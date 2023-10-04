import { useRoutes, RouteObject } from "react-router-dom";
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

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/news", element: <NewsPage /> },
      {
        path: "/blog",
        element: <BlogLayoutPage />,
        children: [
          { index: true, element: <BlogPage /> },
          { path: "categories", element: <CategoriesPage /> },
          { path: "post", element: <PostPage /> },
          { path: ":id", element: <PostDetail /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
      {
        path: "profile",
        element: (
          <PrivateRouting>
            <ProfilePage />
          </PrivateRouting>
        ),
      },
      { path: "*", element: <NotFoundPageForBlog /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayoutPage />,
    children: [{ index: true, element: <LoginPage /> }],
  },
];

export const useCustomRoutes = () => {
  return useRoutes(routes);
};
