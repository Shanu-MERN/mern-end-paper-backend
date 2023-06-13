import currency from "../data/currency.js";

const getAllCurrency = (req, res) => {
  res.send(currency);
};

export { getAllCurrency };
