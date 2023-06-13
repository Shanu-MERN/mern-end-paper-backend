import rates from "../data/rates.js";

const getAllConversionRate = (req, res) => {
  res.send(rates);
};

const getConversionRate = (req, res) => {
  res.send(rates[req.params.key]);
};

export { getAllConversionRate, getConversionRate };
