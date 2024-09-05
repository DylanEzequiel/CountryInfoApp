import { Request, Response } from "express";
import { getCountryData } from "../service/countryService";


export default async (req:Request<{countryName:string,countryCode:string}>,res:Response)=>{
   const countryName=req.params.countryName
    const countryCode=req.params.countryCode
    console.log('Country Name:', countryName);
    console.log('Country Code:', countryCode);
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    try {
        const countryData = await getCountryData(countryName,countryCode)
        res.send(countryData)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}