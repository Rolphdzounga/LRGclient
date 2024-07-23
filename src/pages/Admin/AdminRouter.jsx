
import { Route, Routes } from 'react-router-dom'
import Acceuil from '/src/pages/Admin/Acceuil.jsx'
import Dashboard from '/src/pages/Admin/Dashboard'
import Erreur from '/src/_utils/Erreur'
import AdminLayout from './AdminLayout'
import Adherent from './Adherent/Adherent'
import AdherentEdit from './Adherent/AdherentEdit'
import AdherentAdd from './Adherent/AdherentAdd'
import { Add, Edit, User } from './User'
import { adherentGrid } from './User/Champs'


const AdminRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminLayout/>} >
          <Route index element={<Acceuil/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/adherent'>
            <Route index element={<Adherent categ="" champ={adherentGrid}  titre="LISTE DES ADHERENTS" url={`${import.meta.env.VITE_APP_BASE_URL}/adherents`}/>} />
            <Route path='add' element={<AdherentAdd/>} />
            <Route path='edit' element={<AdherentEdit/>} />
          </Route>
          <Route path='/user'>
            <Route index element={<User />} />
            <Route path='add' element={<Add />} />
            <Route path='edit' element={<Edit/>} />
          </Route>
          <Route path='/*' element={<Erreur/>} />
        </Route>
    </Routes>
  )
}

export default AdminRouter