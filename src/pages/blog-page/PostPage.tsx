import { NavLink, Outlet, useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div>
      Post Page
      {!id ? <NavLink to="1"> post detail </NavLink> : <Outlet />}
    </div>
  );
};

export default PostPage;
