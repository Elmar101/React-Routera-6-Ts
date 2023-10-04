import { NavLink } from "react-router-dom"

const BlogPage = () => {
  return (
    <>
      <div>Blog Page</div>
      <ul>
        <NavLink to='categories'> Categories </NavLink>
        <NavLink to='post'> post </NavLink>
      </ul>
    </>
  )
}

export default BlogPage