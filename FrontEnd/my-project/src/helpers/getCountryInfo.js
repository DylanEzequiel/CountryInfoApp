import axios from "axios";


const backlink=import.meta.env.VITE_URL_BACKEND

async function getCountryInfo(countryCode,name) {
    try {
        const res = await axios.get(`${backlink}/country/${name}/${countryCode}`)
        return res
    } catch (error) {
        throw new Error (error.message)
    }
}

export default getCountryInfo