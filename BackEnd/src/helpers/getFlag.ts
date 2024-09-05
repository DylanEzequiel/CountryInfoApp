import axios from "axios"

interface IFlag{
    
        name:string,
        flag:string,
        iso2:string,
        iso3:string
      
}

async function getFlag(countryName:string) {
    try {
        const allflags = await axios.get(`${process.env.FLAG_API}`)
        const result = allflags.data.data.find((flag:IFlag)=>flag.name == countryName)
        if(result){return result}
    } catch (error:any) {
        throw new Error (`Error in flag: ${error.message}`)
    }
}

export default getFlag