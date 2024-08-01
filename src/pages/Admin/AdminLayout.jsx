
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Button } from '@mui/material';
import { accountService } from '../../_services/account.service';
const AdminLayout = () => {
  let navigate = useNavigate()
  if(!accountService.isLogged()){
      return navigate('/auth/login')
  }
  return (
    <div className='grid grid-cols-10 gap-2'>
      <div className='h-screen col-span-2 max-w-4xl mt-6' >

      </div>
       <div className='col-span-8'>
       <Outlet/>
       </div>
        
    </div>
  )
}

export default AdminLayout
