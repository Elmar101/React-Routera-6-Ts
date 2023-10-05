import { useRoutes } from "react-router-dom";
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
import { TypeRouteObject } from "../models/Routes";

const routes: TypeRouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/news", element: <NewsPage /> },
      {
        path: "/blog",
        element: <BlogLayoutPage />,
        // auth: true,
        children: [
          { index: true, element: <BlogPage /> },
          { path: "categories", element: <CategoriesPage /> },
          {
            path: "post",
            element: <PostPage />,
            children: [
              {
                path: ":id",
                element: <PostDetail />,
                auth: true,
              },
            ],
          },
          { path: "*", element: <NotFoundPageForBlog /> },
        ],
      },
      {
        path: "profile",
        element: <ProfilePage />,
        auth: true,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayoutPage />,

    children: [{ index: true, element: <LoginPage /> }],
  },
] as TypeRouteObject[];

const authMap = (routes: TypeRouteObject[]) => {
  return routes.map((route: TypeRouteObject) => {
    if (route.auth)
      route.element = <PrivateRouting>{route.element}</PrivateRouting>;
    if (route.children) route.children = authMap(route.children);
    return route;
  });
};

export const useCustomRoutes = () => {
  return useRoutes(authMap(routes));
};
