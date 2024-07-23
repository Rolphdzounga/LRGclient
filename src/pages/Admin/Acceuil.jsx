
import { Link, useNavigate } from 'react-router-dom'
import { accountService } from '../../_services/account.service'
import { Button } from '@mui/material'

const Acceuil = () => {
  let navigate = useNavigate()
  return (
    <div>
        <p>Acceuil Admin</p>
        <Link to='/admin/dashboard' >Dashboard</Link>|
        <Link to='/admin/adherent' >Adherent</Link>|
        <Link to='/admin/user' >User</Link>|
        <Button  onClick={()=>{
          accountService.logout()
          navigate('/')
        }} >Logout</Button>
    </div>
  )
}

export default Acceuil