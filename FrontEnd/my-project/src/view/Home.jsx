import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import ButtonCountry   from '../components/ButtonCountry'
import useStore from '../context/context'
import { toast } from 'react-toastify'


function Home() {
  const {countries,setCountries}=  useStore()

  useEffect(()=>{
      async function getAllCountries() {
        toast.info("Getting Countries.",{autoClose:1500});
        const res = await axios.get("http://localhost:3000/")
        setCountries(res.data)
       
      }
    getAllCountries()
  },[])
  return (
    <div>
        <h1 className='m-4 font-bold text-2xl'>Welcome to my Country Page!</h1>
     
     <div className='gap-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 bg-white m-4 p-4 rounded-md'>
         {countries && countries.map((country, index)=>{
           return(
             <div key={index} className='flex flex-col justify-center bg-slate-200 rounded-md h-32 text-center'>
               <div>
                 <h2 className='font-semibold text-xl'>{country.name}</h2>
                 <h3>{country.countryCode}</h3>
               </div>
               <ButtonCountry countryCode={country.countryCode} name={country.name}/>
             </div>
           )
         })}
       </div>
    </div>
  )
}

export default Home