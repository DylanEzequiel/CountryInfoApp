import axios from "axios";

async function getCountryInfo(countryCode,name) {
    try {
        const res = await axios.get(`http://localhost:3000/country/${name}/${countryCode}`)
        return res
    } catch (error) {
        throw new Error (error.message)
    }
}

export default getCountryInfo