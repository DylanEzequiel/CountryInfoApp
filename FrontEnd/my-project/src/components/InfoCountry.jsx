import React from 'react'
import { TbFlagExclamation } from "react-icons/tb";
import getCountryInfo from "../helpers/getCountryInfo"

function InfoCountry({countryCode,name}) {
  async function hanldeClick(params) {
    try {
      const res = await getCountryInfo(countryCode,name)
      console.log(res)
    } catch (error) {
      
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

export default InfoCountry