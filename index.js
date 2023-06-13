import express from "express";
import cors from "cors";
import rates from "./routes/rates.js";
import currency from "./routes/currency.js";
import convert from "./routes/convert.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000);

app.use("/rates", rates);
app.use("/currency", currency);
app.use("/convert", convert);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
