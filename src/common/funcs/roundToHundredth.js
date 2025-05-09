const roundToHundredth = (num) => {
  return Number.isInteger(num) ? num : Math.round(num * 100) / 100;
};

export default roundToHundredth;
