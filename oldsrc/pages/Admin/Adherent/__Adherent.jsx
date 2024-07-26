
import { Link } from 'react-router-dom'

const Adherent = () => {
  return (
    <div>
      <h1>Adherent</h1>
      <div className="flex justify-between">
      <Link to='/admin'>
      back
      </Link>
      <Link to='/admin/adherent/add'>
      add
      </Link>
      <Link to='/admin/adherent/edit'>
      Edit
      </Link>
      </div>
    </div>
  )
}

export default Adherent