import axios from "axios"

async function getBorderCountries(countryCode:string) {
    console.log("borderCountries")
    try {
        const result = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
        return result.data
    } catch (error:any) {
        throw new Error (`error in borderCountries ${error.message}`)
    }
}
export default getBorderCountries