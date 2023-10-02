import { useParams } from "react-router-dom"

const PostPage = () => {
  const params = useParams();

  return (
    <div>Post Page {JSON.stringify(params)} </div>
  )
}

export default PostPage