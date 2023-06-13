import express from "express";
import { getAllCurrency } from "../controller/currency.js";

const router = express.Router();

router.get("/", getAllCurrency); // currency/

export default router;
