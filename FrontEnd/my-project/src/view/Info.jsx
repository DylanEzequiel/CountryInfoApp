import React from 'react'
import useStore from '../context/context';
import PopulationTable from '../components/PopulationTable';
import { useNavigate } from 'react-router-dom';
import ButtonCountry from '../components/ButtonCountry';
import { FaArrowAltCircleLeft } from "react-icons/fa";

function InfoCountry() {
  const navigation =useNavigate()
    const {country}=useStore()
  return (
    <div>
        <div 
        onClick={()=>navigation("/")}
        >
          <FaArrowAltCircleLeft  className='z-50 m-2 text-gray-400 hover:text-red-600 duration-150 hover:cursor-pointer md:size-10 size-5' />
        </div>
         {Object.keys(country).length > 0 ?
        (
         
            <div className={`  w-[100%]  bg-white  md:border-4 border-2 min-h-full  rounded-md border-solid overflow-auto max-h-screen border-gray-400/30 z-50  transition-all duration-150 `}>
              <h3 className='inline m-4 font-bold text-2xl'>{country.population.country}</h3>
              <img src={country.flag ? country.flag.flag : "https://rscomputacion.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"} alt={country.flag? country.flag.name : "image not found"} className='inline float drop-shadow-lg rounded-full w-20 h-20'/>
              <div className='p-2'>
                <PopulationTable population={country.population}/>  
              </div>
              <div className='gap-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 bg-white m-4 p-4 rounded-md'>

              {country && country.borderCountries.borders.map((country, index)=>{
                return(
                  <div key={index} className='flex flex-col justify-center bg-slate-200 rounded-md h-32 text-center select-none'>
               <div>
                 <h2 className='font-semibold text-xl'>{country.commonName}</h2>
                 <h3>{country.countryCode}</h3>
                 <h3>{country.region}</h3>
                 <ButtonCountry countryCode={country.countryCode} name={country.commonName}/>
               </div>
             </div>
           )
          })}
          </div>
            </div>
          ) : (
            <div className='flex flex-col justify-center min-w-full min-h-full'>
              <img src="https://img.icons8.com/?size=64&id=Vm6HTQD41MIU&format=png" alt="Error, no country found" className='w-32 self-center' />
              <h1 className='font-semibold text-xl self-center'>Error, no country found</h1>
            </div>
          )
        }
    </div>
  )
}

export default InfoCountry