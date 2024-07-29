import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr';
import { DateField, DatePicker, LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Avatar, Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/zh-cn';
import IMAGES from '../../components/Images/Images';
const locales = ['en','fr', 'en-gb', 'zh-cn', 'de'];
const Acceuil = () => {
  const navigate = useNavigate()
  const onSubmit = ()=>{
    navigate("/adhesion")
  }
  const [locale, setLocale] = React.useState('fr');
  return (
    <div className="min-h-screen bg-green-900 flex flex-col  text-gray-900 antialiased relative">
    <div
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
        height: "34rem",
      }}
      className="absolute bg-green-800 inset-x-0 top-0"
    ></div>
    <div className="z-10 flex justify-between">
        <div className='ml-2 mt-2'>
          <Avatar alt="logoLRG" src={IMAGES.logoLRG} sx={{ width: 200, height: 200 }}  />
        </div>
        <div></div>
        <div>
        <Typography component="div">
        <Box className="text-white text-xs font-semibold" sx={{ letterSpacing: 6, m: 1 }} >
          <Link to='/quisommesnous' >
          Qui sommes-nous?
          </Link>
        </Box>
      </Typography>
        </div>
    </div>


    <div className="mx-auto z-10  text-center flex flex-col gap-4 max-w-screen ">
      
      
      <Typography component="div">
        <Box className="text-white text-4xl font-semibold" sx={{ letterSpacing: 6, m: 1 }} >
          Bienvenue
        </Box>
      </Typography>
      <Typography component="div">
        <Box className="text-white text-4xl font-semibold" sx={{ letterSpacing: 10, m: 1 }} >
          <span className="text-yellow-500" >LE RENOUVEAU DU GABON</span>
        </Box>
      </Typography>
      <Typography component="div">
        <Box className="text-white text-4xl font-semibold" sx={{ letterSpacing: 10, m: 1 }} >
          <span className="text-yellow-500" >(L.R.G)</span>
        </Box>
      </Typography>
      <Typography component="div">
      <Box className="text-white" sx={{ letterSpacing: 6,textTransform: 'uppercase'}} >Bâtissons des ponts et non des murs</Box>
      </Typography>
    </div>
      <div className="flex justify-center items-center bg-gray-50 max-w-xl  mt-10 mb-24 rounded-lg shadow-2xl mx-auto overflow-hidden z-10">
            <div className="px-4 py-5">
            <Link to={'/adhesion'} type='button'  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cliquez pour adherer
            </Link>
            </div>
          </div>
    </div>
 
  )
}

export default Acceuil

{/**bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed */}