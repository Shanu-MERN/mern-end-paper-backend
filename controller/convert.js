import rates from "../data/rates.js";

const convert = (req, res) => {
  const { from, to } = req.params;
  const { input } = req.body;
  const fromRate = rates[from];
  const toRate = rates[to];
  const result = (toRate.value / fromRate.value) * input;
  res.send({
    result,
  });
};

export { convert };
