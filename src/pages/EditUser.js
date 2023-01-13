import {useParams} from "react-router-dom";

function EditUser() {
  const {userId} = useParams();

  return (
    <div>hello world !! {userId}</div>
  )
}

export default EditUser