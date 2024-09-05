import axios from "axios";
import getPopulation from "../helpers/getPopulation";
import getFlag from "../helpers/getFlag";
import getBorderCountries from "../helpers/getBorderCountries";

//Function to get all countrys
async function getAllCountries() {
    try {
        console.log("llego a controlador")
        const res = await axios.get("https://date.nager.at/api/v3/AvailableCountries")
        console.log(res.data)
        if(res){ return res.data } 
    } catch (error:any) {
        throw new Error (`error: ${error.message} `)
    }
}

//Function to get Specific country data
async function getCountryData(countryName:string,countryCode:string) {
    console.log(countryName,countryCode)
    try {
        const population = await getPopulation(countryName)
        const flag = await getFlag(countryName)
        const borderCountries = await getBorderCountries(countryCode)

        const result ={
            population,
            flag,
            borderCountries
        }
        console.log(result)
        return result
    } catch (error:any) {
        throw new Error (error.message)
    }
}

export  {getAllCountries, getCountryData}