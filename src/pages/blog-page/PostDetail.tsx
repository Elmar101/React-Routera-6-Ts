import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  return (
    <div>Post Detail Page {JSON.stringify(params)}  </div>
  )
}

export default PostDetail