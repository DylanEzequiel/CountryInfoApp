import { Router } from "express";
import AllCountriesController from "../controllers/AllCountriesController";
import CountryDataController from "../controllers/CountryDataController";

const router = Router()

router.get("/", AllCountriesController)
router.get("/country/:countryName/:countryCode", CountryDataController)

export default router