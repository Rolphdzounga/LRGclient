
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Button } from '@mui/material';
import { accountService } from '../../_services/account.service';
const AdminLayout = () => {
  let navigate = useNavigate()
  return (
    <div className='grid grid-cols-10 gap-2'>
      <Sidebar className='h-screen col-span-2 max-w-4xl mt-6' >
        <Menu>
          <MenuItem> Tableau de bord </MenuItem>
          <SubMenu label="Gestion Adherents">
            <MenuItem> <Link to='/admin/adherent' >Liste des adherents</Link></MenuItem>
            <MenuItem> Ajouter un adherent</MenuItem>
            <MenuItem> Editer un adherent</MenuItem>
          </SubMenu>
          <SubMenu label="Gestion Utilisateurs">
            <MenuItem> Liste des utilisateurs</MenuItem>
            <MenuItem> Ajouter un utilisateur</MenuItem>
            <MenuItem> Editer un utilisateur</MenuItem>
          </SubMenu>
          
          <MenuItem> 
          <Button  onClick={()=>{
          accountService.logout()
          navigate('/')
        }} >Quitter</Button>
          
           </MenuItem>
        </Menu>
      </Sidebar>
       <div className='col-span-8'>
       <Outlet/>
       </div>
        
    </div>
  )
}

export default AdminLayout
