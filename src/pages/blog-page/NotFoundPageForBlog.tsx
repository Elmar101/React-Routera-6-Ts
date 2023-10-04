import { Link } from 'react-router-dom';

const NotFoundPageForBlog = () => {
  return (
    <div>
      Not Found PageFor Blog <br/>
      <Link to="/blog"> Go to Blog Page </Link>
    </div>
  )
}

export default NotFoundPageForBlog