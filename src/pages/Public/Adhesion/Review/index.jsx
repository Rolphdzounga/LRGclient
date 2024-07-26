import * as React from "react";
import GrayBackgroundText from "../GrayBackgroundText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "./styles.css";
import { Avatar, Grid } from "@mui/material";
import IMAGES from "../../../../components/Images/Images";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default  function Review({getValues}) {
  //const { getValues } = useFormContext();
  console.log('getValues : ',getValues)
  console.log('getValues.dateversement_',getValues.dateversement)
  const [loader, setLoader] = React.useState(false)
  const telecharger = ()=>{
    const capture = document.querySelector('.docAdherent')
    setLoader(true)
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p','mm','a4')
      const componentWidth = doc.internal.pageSize.getWidth() - 10
      const componentHeight = doc.internal.pageSize.getHeight() - 10
      doc.addImage(imgData,'PNG',5,5,componentWidth,componentHeight)
      setLoader(false)
      console.log(componentWidth,componentHeight)
      doc.save(`Fiche_adhesion_${Date.now()}.pdf`)
    })
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
    <div className="my-10">
      <GrayBackgroundText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>Résumé</div>
          {loader ? (<span>...downloading</span>):(<span className='cursor-pointer' onClick={telecharger}>
            
            Votre fiche sera téléchargée après votre validation
        </span>)}
          
        </div>
      </GrayBackgroundText>

      <div className="docAdherent">
      <Divider textAlign="center" className="reviewDivider">
          RECEPISSE D'ADHESION AU L.R.G
      </Divider>
      <div className="flex justify-between my-5">
      <Avatar alt={getValues.noms} src={getValues.photo} sx={{ width: 100, height: 100 }} />
          <div className="text-xs text-center ">
            <p>LE RENOUVEAU DU GABON</p>
            <p>Siege: Ancienne SOBRAGA, derrière le Palais de Justice</p>
            <p> <FacebookIcon/> LRG-association /<TwitterIcon/> LRG-association / email: associationlrggabon@gmail.com</p>
            <p>BP.9115 - Tel:066071475/077235569/074867838(Whatsapp) - Libreville</p>
          </div>
      <div>

      

      <Avatar alt="logoLRG" src={IMAGES.logoLRG} sx={{ width: 100, height: 100 }} />
        
      </div>
      </div>  
      <div className="my-4">
        <Divider textAlign="left" className="reviewDivider">
          Indentification
        </Divider>
        <div className="reviewBox">
          <Grid container spacing={2}>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Noms</div>
                <div>{getValues.noms}</div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Prénoms</div>
                <div>{getValues.prenoms}</div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Email</div>
                <div>{getValues.email}</div>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Date de naissance</div>
                <div>
                {dayjs(getValues.datenaissance).locale('fr').format('DD/MM/YYYY')}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Lieu de naissance</div>
                <div>{getValues.lieunaissance}</div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Sexe</div>
                <div>{getValues.sexe}</div>
              </Stack>
            </Grid>
          </Grid>


          <Grid container spacing={2}>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Telephone</div>
                <div>
                  {getValues.telephone}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Adresse</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.adresse}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Profession</div>
                <div>{getValues.profession}</div>
              </Stack>
            </Grid>
          </Grid>


          <Grid container spacing={2}>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Pièce d'identité</div>
                <div>
                  {getValues.pieceidentite}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={8} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Numéro de la pièce</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.numpieceidentite}
                </div>
              </Stack>
            </Grid>
          </Grid>
        </div>

        {/* Personal Information */}
        <Divider textAlign="left" className="reviewDivider">
          Militantisme
        </Divider>
        <div className="reviewBox">
          <Grid container spacing={2}>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Province</div>
                <div>
                  {getValues.provincemilitantisme}
                </div>
              </Stack>
            </Grid>

            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Commune</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.communemilitantisme}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Arrondissement</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.arrmilitantisme}
                </div>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={2}>

            <Grid item xs={6} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Département</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.departementmilitantime}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={6} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Canton</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.cantonmilitantisme}
                </div>
              </Stack>
            </Grid>
            <Grid item xs={6} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Centre de vote</div>
                <div style={{ overflowWrap: "break-word", width: "90%" }}>
                  {getValues.centrevotemilitantisme}
                </div>
              </Stack>
            </Grid>
          </Grid>
        </div>
        
        {/* Preview Documents  */}
       		<Divider textAlign="left" className="reviewDivider">
          Finance
        </Divider>
        <div className="reviewBox">
          <Grid container spacing={2}>
          <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Montant cotisation</div>
                <div>{getValues.montantquotisation}</div>
              </Stack>
            </Grid>
          <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle"></div>
                <div></div>
              </Stack>
            </Grid>
            <Grid item xs={4} marginTop="1.4rem">
              <Stack direction={"column"}>
                <div className="reviewTitle">Date versement</div>
                <div>
                  {dayjs(getValues.dateversement).locale('fr').format('DD/MM/YYYY')}
                </div>
              </Stack>
            </Grid>


            
          </Grid>
          
        </div>
        
        <Divider textAlign="right" className="reviewDivider">
          Signature
        </Divider>
        <div className="flex justify-end my-8">
        <div>
          <p className="mb-3">Le {dayjs(Date.now()).locale('fr').format('DD/MM/YYYY à HH:mm')}</p>
          <Avatar  alt={getValues.noms} src={getValues.signature} sx={{ width: 200, height: 200 }} variant="square" />
        </div>
          
        </div>
      </div>
      </div>
    </div>

    </LocalizationProvider>
  );
}

export const Document = ({ props }) => {
  return (
    <div>
      <PageTop>
        <span>Hello #1</span>
      </PageTop>
      <div>Hello #2</div>
      <PageBottom>
        <div className="text-gray-400 text-sm">Hello #3</div>
      </PageBottom>
      <PageBreak />
      <span>Hello #4, but on a new page ! </span>
    </div>
  );
};