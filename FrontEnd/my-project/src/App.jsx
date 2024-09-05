import { useEffect, useState } from 'react'
import axios from "axios"
import InfoCountry from "./components/InfoCountry"

import './App.css'

function App() {
  const[countries,setCountries]=useState()
  
  console.log(countries)

  useEffect(()=>{
      async function getAllCountries() {
        const res = await axios.get("http://localhost:3000/")
        setCountries(res.data)
      }
    getAllCountries()
  },[])

  return (
    <div className=''>
      <h1 className='text-2xl font-bold m-4'>Welcome to my Country Page!</h1>
     
      <div className='grid grid-cols-3 bg-white m-4 rounded-md p-4 md:grid-cols-5 gap-4 lg:grid-cols-7'>
          {countries && countries.map((country)=>{
            return(
              <div className='bg-slate-200 rounded-md text-center justify-center flex-col flex h-32'>
                <div>
                  <h2 className='text-xl font-semibold '>{country.name}</h2>
                  <h3>{country.countryCode}</h3>
                </div>
                <InfoCountry countryCode={country.countryCode} name={country.name}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default App
