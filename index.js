import express from "express";
import morgan from "morgan";
import cors from 'cors';
import paymentRoutes from './payment.routes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use('/api/v1', paymentRoutes);

app.listen(3010, () => {
  console.log("Server on port", 3010);
});
