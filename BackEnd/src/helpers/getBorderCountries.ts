import axios from "axios"


async function getBorderCountries(countryCode:string) {
    console.log("borderCountries")
    try {
        const result = await axios.get(`${process.env.BORDER_COUNTRIES}/${countryCode}`)
        return result.data
    } catch (error:any) {
        throw new Error (`error in borderCountries ${error.message}`)
    }
}
export default getBorderCountries