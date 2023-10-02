import { Outlet } from "react-router-dom";

const BlogLayoutPage = () => {
  return (
    <>
      <div>Blog Layout Page</div>
      <div style={{ background: "yellow" }}>
        <Outlet />
      </div>
    </>
  );
};

export default BlogLayoutPage;
