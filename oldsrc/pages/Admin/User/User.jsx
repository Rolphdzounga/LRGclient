import { Link } from "react-router-dom"

const User = () => {
  return (
    <div>User

<div className="flex justify-between">
      <Link to='/admin'>
      back
      </Link>
      <Link to='/admin/user/add'>
      add
      </Link>
      <Link to='/admin/user/edit'>
      Edit
      </Link>
      </div>
    </div>
  )
}

export default User