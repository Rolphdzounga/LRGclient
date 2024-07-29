import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { Avatar, Box, Button, Container, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../components/Images/Images';
const Quisommesnous = () => {
  const navigate = useNavigate()
  return (
    <Container className='p-4 mt-4'>
      <Grid container direction="column" spacing={5} >
      <Grid item xs={12} container >
        <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          Qui sommes nous?
        </Typography>
        </Grid>
        <Grid item xs={2} alignItems={'baseline'} >
        <Button variant="outlined" onClick={()=>navigate('/')} >Retour</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} >
        <Divider/>
      </Grid>
      <Grid item xs={12} >
        
      </Grid>
      <Grid item xs={12} container >
        <Grid item xs={8}>
        <Typography variant="subtitle1" gutterBottom>
        L'association <span className="text-yellow-500" >LE RENOUVEAU DU GABON</span> (L.R.G), dont la sortie officielle a été faite le 30 mars 2024, 
        est une structure apolitique, de droit gabonais et dont l'objectif est de regrouper les GABONAIS (SE) 
        autour d'un idéal commun le GABON. 
        </Typography>
          <Typography variant="body1" gutterBottom>
          Elle est dirigée par <span className="text-yellow-500" >M. Hugues MFA NGUEMA</span> dont la vision est de construire des ponts et non des mûrs, 
          l'unité dans la diversité via le triptyque :
          </Typography>
          <List >
            <ListItem>
              <Typography variant="subtitle2 bold " gutterBottom>
                <AdjustIcon fontSize="small" /> Défendre la souveraineté du Gabon ;
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2 bold " gutterBottom>
                <AdjustIcon fontSize="small" /> Promouvoir l'appropriation par les nationaux des leviers de cette souveraineté ;
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle2 bold " gutterBottom>
                <AdjustIcon fontSize="small" />Accompagner les autorités de la transition.
              </Typography>
            </ListItem>
          </List>
          
          
          
        </Grid>
        <Grid item xs={2}>
        <Avatar alt="presiLRG" src={IMAGES.presiLRG} sx={{ width: 200, height: 200 }} variant="square"  />
        </Grid>
      </Grid>
      
      <Grid item xs={12}>
      <Typography variant="button" display="block" gutterBottom>
      Le LRG est une association Ouverte à tous les Gabonais (ses) 
      dont la détermination est de travailler main dans la main pour la construction d'un GABON NOUVEAU et FORT. 

      </Typography>
      </Grid>
      
    </Grid >
    </Container>
  )
}

export default Quisommesnous