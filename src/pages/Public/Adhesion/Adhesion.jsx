import React, {  useState } from 'react'
import {Formik , Form, Field, } from 'formik'
import * as Yup from 'yup'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Terminus from './Terminus'
import styles from "./Username.module.css";
import {
  MenuItem,
  FormControl,
  FormControlLabel,

  Grid,
  Container,  Step, StepLabel, Stepper, 
  Radio,
  RadioGroup,
  FormLabel,

  Typography,

  Autocomplete,
  Box,
  TextField as TextField2,
  Divider,
  Avatar,
  
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { frFR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/fr';

import {
  TextField,
  Select,
  
} from 'formik-mui';
//import {TimePicker, DatePicker, DateTimePicker} from 'formik-mui-lab';
import {  DatePicker } from '@mui/x-date-pickers'
import { UpperCasingTextField} from './UpperCasingTextField';

//import "react-country-state-city/dist/react-country-state-city.css";
/*import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";*/
 // import "react-country-state-city/dist/react-country-state-city.css";

import axios from 'axios';
import Review from './Review';
import convertToBase64 from './convert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from 'styled-components';
import { departements, provinces, villes } from './data';
import dayjs from 'dayjs';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Adhesion = () => {
    const [error, setError] = useState('')
    // 1 - les data
    //paysResidence:"",
    //provinceResidence:"",
    //villeResidence:"",
    /*const [data,setData] = useState({
        accordadherent: true,
        adresse: "2241",
        arrmilitantisme: "6",
        cantonmilitantisme: "",
        centrevotemilitantisme: "ECOLE DRAGAGE",
        communemilitantisme: "Libreville",
        datenaissance: "Sun Jul 26 1998 00:00:00 GMT+0100 (heure normale d’Afrique de l’Ouest)" ,
        dateversement: "Fri Jul 05 2024 00:00:00 GMT+0100 (heure normale d’Afrique de l’Ouest)" ,
        departementmilitantime: "Komo Mondah",
        email: "adriama2@gmail.com",
        lieunaissance: "GAMBA",
        montantquotisation: "10000",
        noms: "MAGANGA2",
        numpieceidentite: "NIP-7854219865322",
        paysmilitantisme: "Gabon",
        photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AA",
        pieceidentite: "NIP",
        prenoms: "ADRIAM",
        profession: "Banquier",
        provincemilitantisme: "G1-Estuaire",
        sexe: "F",
        signature: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQ",
        telephone: "04878738",
        villagemilitantisme: "mon village",
    })*/
    const [data,setData] = useState({
        prenoms:"",
        noms:"",
        email:"",
        telephone:'',
        paysmilitantisme:"Gabon",
        provincemilitantisme:"",
        communemilitantisme:"",
        arrmilitantisme:"",
        villagemilitantisme:"mon village",
        cantonmilitantisme:"",
        departementmilitantime:"",
        centrevotemilitantisme:"",
        sexe:'',
        accordadherent:false,
        pieceidentite:"",
        numpieceidentite:"",
        adresse:'',
        montantquotisation:'',
        photo:"",
        profession:'',
        lieunaissance:'',
        datenaissance:'',
        dateversement:'',
        signature:''
    })
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
// Soummettre le formulaire
const soumettreForm = async (data) =>{
    console.log('___Form envoyé___',data)
    //const data1 = {...data,dateAdhesion:new }
    try{
      /*const response = await axios.post('http://localhost:8888/api/v1/ajouterAdherent',data )  {`${import.meta.env.VITE_APP_BASE_URL}/adherents`}
      console.log('localhost:8888/api/v1/ajouterAdherent__',response)*/
      const response2 = await axios.put(`${import.meta.env.VITE_APP_BASE_URL}/adherents`,data )
       console.log(response2)
       setCurrentStep(prev=>prev + 1)
       //setCookie('user', 'user', { path: '/' })
      //ignIn({})
      //localStorage.setItem("token", response.data.accessToken);
    }catch(err){
        if(err && err.instanceof.AxiosError)
            setError(err.response?.data.message)
        else if (err && err.instanceof.Error) setError(err.message)
    }

}
 // 4 - Fonction Suivant
 const handleNextStep = (newData, final = false) =>{
    setData(prev => ({...prev,...newData}))
    if(final){
        telecharger()
        soumettreForm(data)
    }else{

        setCurrentStep(prev=>prev + 1)
    }
   }
   // 4 - Fonction Précédent
   const handlePrevStep = (newData) =>{
    setData(prev => ({...prev,...newData}))
    setCurrentStep(prev=>prev - 1)
   }
   // 2 - le current step (étape en cours)
   const [currentStep, setCurrentStep] = useState(0)
   // 3 - le tableau des étapes
   const steps = [<StepOne_ stepName='Identification' next={handleNextStep} data={data}/>,<StepTwo stepName='Militantisme' back={handlePrevStep} next={handleNextStep} data={data}/> , <StepTree stepName='Finance' back={handlePrevStep} next={handleNextStep} data={data}/>,<StepFour stepName='Revision' back={handlePrevStep} next={handleNextStep} data={data}/>,<Terminus stepName='FIN'/>
   ]

  console.log(data)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
    <Container>
       
      <div className='md:w-5/6 p-10 mx-auto shadow-xl rounded-2xl pb-2 bg-white mt-10'>
      <div className='flex justify-center pb-8'><strong>FORMULAIRE D'ADHESION</strong></div>
        <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((currentStep) =>{
              const label = currentStep.props.stepName
              return(
                <Step key={label}> 
                  <StepLabel>{label}</StepLabel>
                </Step>
              )
            })}
        </Stepper>
        <div >
        {
            steps[currentStep]
        }
        </div>
    </div>

    </Container>
    </LocalizationProvider>
  )
}

export default Adhesion
const stepOneValidationSchema = Yup.object({
   prenoms: Yup.string().required('Cette informations est obligatoire'),
    noms: Yup.string().required('Cette informations est obligatoire'),
    email: Yup.string().required('Cette informations est obligatoire'),
    telephone: Yup.string().required('Cette informations est obligatoire'),
    sexe: Yup.string().required('Cette informations est obligatoire'),
    pieceidentite: Yup.string().required('Cette informations est obligatoire'),
    numpieceidentite: Yup.string().required('Cette informations est obligatoire'),
    adresse: Yup.string().required('Cette informations est obligatoire'),
    profession: Yup.string().required('Cette informations est obligatoire'),
    lieunaissance: Yup.string().required('Cette informations est obligatoire'),
    datenaissance: Yup.string().required('Cette informations est obligatoire'),
    photo: Yup.string().required('Cette informations est obligatoire'),
})
const stepTwoValidationSchema = Yup.object({
    provincemilitantisme: Yup.string().required('Cette informations est obligatoire'),
    communemilitantisme: Yup.string().required('Cette informations est obligatoire'),
    centrevotemilitantisme: Yup.string().required('Cette informations est obligatoire'),

})
const step3ValidationSchema = Yup.object({
    montantquotisation: Yup.string().required('Cette informations est obligatoire'),
    signature: Yup.string().required('Cette informations est obligatoire'),
    dateversement: Yup.string().required('Cette informations est obligatoire'),

})

const StepOne_ = (props)=>{
    const handleSubmit = (values) => {
        props.next(values)
    }

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [file, setFile] = useState();
    const onUpload = async (e) => {
     const base64 = await convertToBase64(e.target.files[0]);
     setFile(base64);
   };

/**
 * GetCountries().then((result) => {
        result.filter((p)=>{
            if(p.name == props.data.paysResidence){
                console.log('__p.name__',p.name,p.id)
                return p.id
            }
        })
    })||
 * 
 */


    return(
        <Container>
            <div className='px-[20px] py-8'>
            <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {
                ({values, submitForm, resetForm, isSubmitting, touched, errors,setFieldValue})=>(
                    
                
                    <Form autoComplete="off">
                       
                       <Grid container spacing={2} className='mt-10 px-5'>
                       <Typography variant="caption" display="block" gutterBottom>
                       Conformément à la loi numero 001/2011 relative à la protection  des données à caractère personnel, le Renouveau du Gabon est amené à receuillir les données à caractère personnel de l'adhreent.
                        L'adherent accepte expressément que les données transmises soient exploitées conformément aux finalités pour lesquelles ont été transmises tant qu'il sera membre du LRG.
                        L'adherent dispose par ailleurs d'un droit de regard par rapport à ses informations personnelles.

                        </Typography>   
                            <div className="profile flex flex-col justify-center py-4">
                                <label htmlFor="profile">
                                <Avatar alt="Remy Sharp" src={values.photo} sx={{ width: 100, height: 100 }} />
                                    
                                    <span className='cursor-pointer text-green-500 '>
                                    <CloudUploadIcon /> votre photo ici
                                    </span>
                                </label>
                                
                                <input
                                    onChange={async(e)=>setFieldValue('photo',await convertToBase64(e.target.files[0]))}
                                    type="file"
                                    id="profile"
                                    name="picture"
                                    className="hidden"
                                />
                                
                            </div>

                            
                            <Grid item xs={12}>
                                <Grid container spacing={2} className="align-items-center">
                                    <Grid item xs={12}>
                                        <Grid item  className='w-full'>
                                            <Field
                                            component={UpperCasingTextField}
                                            name="noms"
                                            label="Noms"
                                            helperText="Entrez votre nom"
                                            fullWidth
                                            />
                                        </Grid>      
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item  className='w-full '>
                                            <Field
                                            component={UpperCasingTextField}
                                            name="prenoms"
                                            label="Prénoms"
                                            helperText="Entrez votre prénom"
                                            fullWidth
                                            />
                                        </Grid>      
                                    </Grid>
                                </Grid>
                            </Grid>




                            <Grid item xs={12}>
                                <Grid container spacing={2} className="align-items-center">
                                    <Grid item xs={4}>
                                    <Field 
                                        component={DatePicker} 
                                           name="datenaissance"
                                            label="Date de naissance"
                                            disableFuture
                                            defaultValue={dayjs(values.datenaissance)}
                                            onChange={(e)=>setFieldValue("datenaissance",e.$d)}

                                    />   
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid item  className='w-full'>
                                            <Field
                                            component={TextField}
                                            name="lieunaissance"
                                            label="Lieu de naissance"
                                           // helperText="Saisir votre lieu de naissance"
                                            fullWidth
                                            />
                                        </Grid>      
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} className="align-items-center">
                                    <Grid item xs={12}>
                                        <Grid item  className='w-full'>
                                            <Field
                                            component={TextField}
                                            name="adresse"
                                            label="Adresse"
                                            helperText="Saisir votre adresse et/ou Bp"
                                            fullWidth
                                            />
                                        </Grid>      
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                        
                            
                           
                            <Grid item xs={12}>
                                <Grid container spacing={2} className="align-items-center">
                                    <Grid item xs={4}>
                                    <Field component={TextField} name="telephone"
                                            label="Numero de téléphone"
                                            helperText="Saisir votre numéro de téléphone"
                                            fullWidth
                                             />   
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid item  className='w-full'>
                                            <Field
                                            component={TextField}
                                            name="email"
                                            label="email"
                                            helperText="Saisir votre email"
                                            fullWidth
                                            />
                                        </Grid>      
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl className='mr-10' >
                                    <FormLabel id="demo-radio-buttons-group-label">Sexe</FormLabel>
                                    <RadioGroup row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="sexe"
                                        value={values.sexe}
                                        //value={value}
                                        onChange={(e)=>setFieldValue('sexe',e.target.value)}
                                    >
                                        <FormControlLabel value="F" checked={values.sexe == 'F'} control={<Radio />} label="Femme" />
                                        <FormControlLabel value="H" checked={values.sexe == 'H'} control={<Radio />} label="Homme" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <MonField c={TextField} n="profession" l="profession*" />

                            <Grid item xs={12}>
                                <Grid container spacing={2} className="align-items-center">
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <Field
                                                component={Select}
                                                type="text"
                                                label="Piece d'identité"
                                                name="pieceidentite"
                                                multiple={false}
                                                //inputProps={{name: 'tags', id: 'tags'}}
                                                onChange={(e)=>setFieldValue("pieceidentite",e.target.value)}
                                                value={values.pieceidentite}
                                                
                                            >
                                                <MenuItem value={"NIP"}>NIP</MenuItem>
                                                <MenuItem value={"CNI"}>CNI</MenuItem>
                                                <MenuItem value={"CNIE"}>CNIE</MenuItem>
                                                <MenuItem value={"Passport"}>Passport</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <MonField c={TextField} n="numpieceidentite" l="Numero piece identité*" />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <div className='px-[20px]'  style={{ display: 'flex', marginTop:50, justifyContent:'space-between' }}>
                            {/**next button */}
                            {Object.keys(errors).length == 0 && <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' type='submit'> 
                            suivant
                            </button>}
                        </div>
                
                    </Form>
                  
                )
            }
        </Formik>
            </div>
        
            
        </Container>
    )
}
const StepTwo = (props)=>{
    const handleSubmit = (values) => {
        props.next(values)
    }
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [getCounty, setCounty] = useState([]);
    const [getState, setState] = useState([]);
    const [getDepartement, setDepartement] = useState([]);
    const country = [...new Set(provinces.map((item) => item.label))];
    const handleCountry = (event, value) => {
        let states = villes.filter((state) => state.province === value);
        states = [...new Set(states.map((item) => item.label))];
        states.sort();
    
        setState(states);
      };
    return(
        <Container>
            <div className='px-[20px] py-8'>
        <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {
                ({errors,values,setFieldValue})=>(
                    <Form>




                                    



                                  

<div className="my-4">
<Grid item xs={4}>
<Autocomplete
onChange={(event, value) => {
    console.log('Autocomplete_',value)
    let states = villes.filter((state) => state.province === value);
    states = [...new Set(states.map((item) => item.label))];
    states.sort();
    setFieldValue('provincemilitantisme',value)
    setState(states);

    let deps = departements.filter((state) => state.province === value);
    deps = [...new Set(deps.map((item) => item.label))];
    deps.sort();
    console.log('_deps_',deps)
    setDepartement(deps);
  }}
id="country"
getOptionLabel={(country) => `${country}`}
options={country}
//name="provincemilitantisme"
value={values.provincemilitantisme}
isOptionEqualToValue={(option, value) => option.name === value.name}
noOptionsText={"No Available Data"}
renderOption={(props, country) => (
<Box component="li" {...props} key={country} value={getCounty}>
{country}
</Box>
)}
renderInput={(params) => <TextField2 {...params} label="Province où vous militez" />}
/>
</Grid>
</div>




<Grid item xs={12}>
    <Grid container spacing={2} className="align-items-center">
        <Grid item xs={6}>
            

            <Autocomplete
                id="city"
                getOptionLabel={(getState) => `${getState}`}
                options={getState}
                onChange={(event, value) => {
                    console.log('Autocomplete_',value)
                    setFieldValue('communemilitantisme',value)
                }}
                value={values.communemilitantisme}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                noOptionsText={"No Available User"}
                renderOption={(props, getState) => (
                <Box component="li" {...props} key={getState}>
                {getState}
                </Box>
                )}
                renderInput={(params) => <TextField2 {...params} label="Commune où vous militez" />}
                />   
        </Grid>

        <Grid item xs={6}>
            
                <Field 
                component={TextField2} 
                value={values.arrmilitantisme}
                name="arrmilitantisme"
                label="Arrondissement où vous militez"
                onChange={(e)=>setFieldValue("arrmilitantisme",e.target.value)}
                //onChange={(e)=>console.log('___',e.$d)}
                //helperText="Saisir votre nom"
                />  
                
        </Grid>

    </Grid>
</Grid>












{/* <Autocomplete /> */}
<div className="my-4">

<Grid item xs={12} >
    <Grid container spacing={2} className="align-items-center">
        <Grid item xs={6}>
            

        <Autocomplete
            id="departementmilitantime"
            getOptionLabel={(getDepartement) => `${getDepartement}`}
            options={getDepartement}
            onChange={(event, value) => {
                console.log('departementmilitantime',value)
                /*let cantons = cantons.filter((state) => state.province === value);
                cantons = [...new Set(cantons.map((item) => item.label))];
                cantons.sort();
                setCanton(cantons);*/
                setFieldValue('departementmilitantime',value)
            }}
            value={values.departementmilitantime}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"No Available Data"}
            renderOption={(props, getDepartement) => (
            <Box component="li" {...props} key={getDepartement} value={getCounty}>
            {getDepartement}
            </Box>
            )}
            renderInput={(params) => <TextField2 {...params} label="Département où vous militez" />}
            />
        </Grid>

        <Grid item xs={6}>

            <Grid item xs={12}>
                <Grid item  className='w-full'>
                    <Field
                    component={UpperCasingTextField}
                    name="cantonmilitantisme"
                    label="Entrez le nom du canton"
                    fullWidth
                    />
                </Grid>      
            </Grid>
   
        </Grid>

    </Grid>
</Grid>
</div>
<div className="my-4">
<Grid item xs={8}>

    <Field
    component={TextField2}
    name="centrevotemilitantisme"
    value={values.centrevotemilitantisme}
    label="Indiquez votre centre de vote"
    onChange={(e)=>setFieldValue("centrevotemilitantisme",e.target.value)}
    // helperText="Saisir votre lieu de naissance"
    fullWidth
    />
</Grid> 
</div>                          


                        <div className='flex justify-around mt-4 mb-8' style={{ display: 'flex', marginTop:50, justifyContent:'space-between' }}>
                            {/**back button */}
                            <button type='button' onClick={()=>props.back(values)} className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}> 
                                Précédent
                            </button>
                            {/**next button */}
                            {console.log('SIZE ',Object.keys(errors))}
                            {console.log('SIZE ',Object.keys(errors).length)}
                            {Object.keys(errors).length == 0 && <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' type='submit'> 
                            Suivant
                            </button>}
                        </div>

                    </Form>
                )
            }
        </Formik>
        </div>
        </Container>
    )
}





const StepTree= (props)=>{
    const handleSubmit = (values) => {
        props.next(values)
    }
    const label = { inputProps: { 'aria-label': 'accordadherent' } };
    return(
        <Container>
            <div className='px-[20px] py-8'>
        <Formik  validationSchema={step3ValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {
                ({errors,values,setFieldValue})=>(
                  
                    <Form>
                        <div className='mt-10 flex flex-col gap-3'>
                        <Grid item xs={12} >
                        <Grid container spacing={2} className="align-items-center">
                            <Grid item xs={6}>
                                <FormControl className='mr-10' >
                                    <FormLabel id="demo-radio-buttons-group-label">Choisir Votre montant de cotisation</FormLabel>
                                    <RadioGroup 
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="montantquotisation"
                                        
                                        //value={value}
                                        onChange={(e)=>setFieldValue('montantquotisation',e.target.value)}
                                    >
                                        <FormControlLabel checked={values.montantquotisation == '10000'}  value="10000" control={<Radio />} label="Si vous avez un revenu (10.000fcfa)" />
                                        <FormControlLabel checked={values.montantquotisation == '5000'}  value="5000" control={<Radio />} label="Si vous etes sans revenu (5.000fcfa)" />
                                    </RadioGroup>
                                </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <Field 
                                        component={DatePicker} 
                                        format="DD"
                                        buttons={false}
                                        disableYearPicker
                                        disableMonthPicker
                                        hideMonth
                                        defaultValue={dayjs(values.dateversement)}
                                        hideYear
                                        hideWeekDays
                                        views={['month', 'day']}
                                        //maxDate={new Date(19,7,2024)}
                                        name="dateversement"
                                        label="Date du versement"
                                        onChange={(e)=>setFieldValue("dateversement",e.$d)}
                                    />   
                                </Grid>
                                </Grid>
                        </Grid>
                        
                        </div>
                        
                        
                        <div className="profile flex flex-col justify-center py-4 my-5">
                                <label htmlFor="profile">
                                    {
                                        values.signature &&  <img
                                        src={values.signature}
                                        className={styles.profile_img}
                                        alt="avatar"
                                        />
                                    }
                                    
                                    <span className='cursor-pointer text-green-500 '>
                                    <CloudUploadIcon /> votre signature scannée ici
                                    </span>
                                </label>
                                
                                <input
                                    onChange={async(e)=>setFieldValue('signature',await convertToBase64(e.target.files[0]))}
                                    type="file"
                                    id="profile"
                                    name="picture"
                                    className="hidden"
                                />
                                
                            </div>
                            <Divider>

                            </Divider>
                            <div className='mt-5 flex '>
                            <div className='items-start'>
                            <label>
                                <Field type="checkbox" name="accordadherent" />
                                
                            </label>
                            </div>
                            
                        <Typography variant="caption" display="block" gutterBottom >
                        
                        Je déclare par la présente souhaiter devenir membre de l'association LRG
                        Je déclare donc reconnaitre l'objet de l'association, et accepter le règlement intérieur.
                        J'ai pris connaissance des droit et devoirs des membres de l'association, et accepte de verser ma cotisation pour l'année en cours.
                        </Typography>
                        
                        </div>
                        <div className='flex justify-between mt-4 mb-8' style={{ display: 'flex', marginTop:50, justifyContent:'space-between' }}>
                            {/**back button */}
                            <button type='button' onClick={()=>props.back(values)} className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}> 
                                Précédent
                            </button>
                            {/**next button */}
                            {console.log('SIZE ',Object.keys(errors).length)}
                            {Object.keys(errors).length == 0 && values.accordadherent && <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' type='submit'> 
                            Suivant
                            </button>}
                            
                        </div>


                    </Form>
                   
                )
            }
        </Formik></div>
        </Container>
    )
}
const StepFour= (props)=>{
    const handleSubmit = (values) => {
        props.next(values,true)
    }
    const data = props.data
    return(
        <Container>
            <div className='px-[20px] py-8'>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            {
                ({values,setFieldValue})=>(
                    <Form className='mx-0'>
                        <div className='flex flex-col gap-3 mx-0'>
                            <Grid item xs={12} >
                                <Review getValues={data}/>
                            </Grid>
                        </div>
                        <div className='flex justify-between mt-4 mb-8' style={{ display: 'flex', marginTop:50, justifyContent:'space-between' }}>
                            {/**back button */}
                            <button type='button' onClick={()=>props.back(values)} className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}> 
                                Précédent
                            </button>
                            {/**next button */}
                            <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' type='submit'> 
                            Confirmer
                            </button>
                        </div>


                    </Form>
                )
            }
        </Formik></div>
        </Container>
    )
}



const MonField = ({c,n,l,h})=>{
    return(<Grid item  className='w-full'>
        <Field
        component={c}
        name={n}
        label={l}
        placeholder={h}
        fullWidth
        />
        </Grid>)
}
const MonFieldFile = ({c,n,l,h})=>{
    return( <Field
        margin="normal"
        component={c}
        name={n}
        label={l}
        placeholder={h}
        type="files"
        sx={{ marginBottom: 0 }}
        fullWidth
        />)
}
const MonFieldDate = ({c,n,l,h})=>{
    return( <Field
        margin="normal"
        component={c}
        name={n}
        label={l}
        placeholder={h}
        type="date"
        sx={{ marginBottom: 0 }}
        fullWidth
        />)
}