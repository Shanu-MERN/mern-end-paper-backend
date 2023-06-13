import express from "express";
import { convert } from "../controller/convert.js";

const router = express.Router();

router.post("/:from/:to", convert); // convert/{from}/{to}

export default router;
