import express from "express";
import {
  getAllConversionRate,
  getConversionRate,
} from "../controller/rates.js";

const router = express.Router();

router.get("/", getAllConversionRate); // rates/
router.get("/:key/", getConversionRate); // rates/{key}

export default router;
