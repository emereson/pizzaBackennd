const express = require ("express")
const morgan = require ("morgan")
const cors = require ('cors')
const paymentRoutes = require ('./payment.routes.js')
require('dotenv').config();


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use('/api/v1', paymentRoutes);

app.listen(3010, () => {
  console.log("Server on port", 3010);
});
