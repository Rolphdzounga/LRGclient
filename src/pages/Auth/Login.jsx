import React from 'react'
import axios, {AxiosError} from "axios";
import { useForm } from 'react-hook-form'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useCookies } from 'react-cookie'
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';
const Login = () => {
    const {register,handleSubmit,control} = useForm()
    const signIn = useSignIn()
    const [cookies, setCookie] = useCookies(['user'])
    let navigate = useNavigate()
    const onSubmit = async (data)=>{
        console.log('Form envoyé ',data)
        try{
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/auth/login`,data )
           console.log('response.data__',response.data)
           //setCookie('user', 'user', { path: '/' })
          //ignIn({})
          //localStorage.setItem("token", response.data.accessToken);     {`${import.meta.env.VITE_APP_BASE_URL}/auth/login`}
          accountService.saveToken(response.data.access_token)
          navigate('/admin', {replace: true})
        }catch(err){
            if(err && err.instanceof.AxiosError)
                setError(err.response?.data.message)
            else if (err && err.instanceof.Error) setError(err.message)
        }
    }
  return (
<Container>
<Box className="bg-gray-50 min-w-96 flex items-center justify-center">
  <div className="bg-gray-100 w-full flex flex-col rounded-2xl shadow-lg  p-5 items-center">
    
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
      <form action="" className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input className="p-2 mt-8 rounded-xl border" type="email" {...register("email")} placeholder="Email"/>
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" {...register("password")} placeholder="Password"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm"></p>
        <hr className="border-gray-400"/>
      </div>



      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>


 

    </div>
  <div/>
</Box>
</Container>
  )
}

export default Login