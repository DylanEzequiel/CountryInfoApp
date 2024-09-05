import React, { useState } from 'react'
import { TbFlagExclamation } from "react-icons/tb";
import getCountryInfo from "../helpers/getCountryInfo"
import { setCountry } from '../context/context';
import  useStore from '../context/context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ButtonCountry({countryCode,name}) {
  
  const navigate = useNavigate();


  async function hanldeClick() {
    try {
      
      toast.info("Serving Info.",{autoClose:1500});
      const res = await getCountryInfo(countryCode,name)
      setCountry(res.data)
      navigate("/info")
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div>
        <div className='m-2'>
            <TbFlagExclamation size={25} className='m-auto hover:text-green-500 duration-300 hover:scale-105' onClick={hanldeClick}/>
        </div>
        
    </div>
  )
}

export default ButtonCountry