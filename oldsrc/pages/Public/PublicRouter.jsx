import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Acceuil from '/src/pages/Public/Acceuil.jsx'
import Quisommesnous from '/src/pages/Public/Quisommesnous'
import Adhesion from '/src/pages/Public/Adhesion/Adhesion'
import Erreur from '/src/_utils/Erreur'
import PublicLayout from './PublicLayout'

const PublicRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<PublicLayout/>} >
          <Route index element={<Acceuil/>} />
          <Route path='/quisommesnous' element={<Quisommesnous/>} />
          <Route path='/adhesion' element={<Adhesion/>} />
          <Route path='/*' element={<Erreur/>} />
        </Route>
    </Routes>
  )
}

export default PublicRouter