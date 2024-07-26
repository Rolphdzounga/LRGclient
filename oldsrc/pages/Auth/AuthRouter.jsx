import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Erreur from '../../_utils/Erreur'

const AuthRouter = () => {
  return (
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Erreur/>}/>
    </Routes>
  )
}

export default AuthRouter