import axios from "axios"

interface IPopulationCountry{
    
        country: string,
        code: string,
        iso3: string,
        populationCounts: 
          {
            year:number,
            value: number
          }[]
}

async function getPopulation(countryName:string) {
    try {
        const allPopulation =await axios.get(`${process.env.POPULATION_API}`)
        const result =  allPopulation.data.data.find((population:IPopulationCountry) => population.country == countryName);
        if(result){return result}
    } catch (error:any) {
        throw new Error (`Error in population: ${error.message}`)
    }
}

export default getPopulation