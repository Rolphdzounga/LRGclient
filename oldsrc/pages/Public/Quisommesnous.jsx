import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Quisommesnous = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center'>
      

      <div className='mt-8 flex justify-evenly'>
      
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h3" gutterBottom>
        Qui sommes nous?
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      L'association <span className="text-yellow-500" >LE RENOUVEAU DU GABON</span> (L.R.G), dont la sortie officielle a été faite le 30 mars 2024, 
      est une structure apolitique, de droit gabonais et dont l'objectif est de regrouper les GABONAIS (SE) 
      autour d'un idéal commun le GABON. 
      </Typography>
      <Typography variant="body1" gutterBottom>
      Elle est dirigée par <span className="text-yellow-500" >M. Hugues MFA NGUEMA</span> dont la vision est de construire des ponts et non des mûrs, 
      l'unité dans la diversité via le triptyque :
      </Typography>
      <Typography variant="subtitle2 bold " gutterBottom>
          <AdjustIcon fontSize="small" /> Défendre la souveraineté du Gabon ;
      </Typography>
      <p></p>
      <Typography variant="subtitle2 bold " gutterBottom>
          <AdjustIcon fontSize="small" /> Promouvoir l'appropriation par les nationaux des leviers de cette souveraineté ;
      </Typography>
      <p></p>
      <Typography variant="subtitle2 bold " gutterBottom>
          <AdjustIcon fontSize="small" />Accompagner les autorités de la transition.
      </Typography>
      <p></p>
      <Typography variant="button" display="block" gutterBottom>
      Le LRG est une association Ouverte à tous les Gabonais (ses) 
      dont la détermination est de travailler main dans la main pour la construction d'un GABON NOUVEAU et FORT. 

      </Typography>
      </Box>
      <div>


      <Button variant="outlined" onClick={()=>navigate('/')} >Retour</Button>
      </div>
      </div>



      
    </div>
  )
}

export default Quisommesnous