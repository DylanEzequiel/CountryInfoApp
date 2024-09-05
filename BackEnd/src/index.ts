import express from 'express';
import router from './routes/countryRoutes';
import cors from "cors"
import morgan from "morgan"

require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(morgan("dev"))
app.use(express.json());

app.use('/', router );

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});