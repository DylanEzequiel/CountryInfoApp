import { Request, Response } from "express"
import { getAllCountries } from "../service/countryService"



export default async (req:Request,res:Response)=>{
    try {
       const allCountries = await getAllCountries()
       res.json(allCountries)
    } catch (error) {
        res.json(error)
    }
}