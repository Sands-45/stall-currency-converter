console.log("We here");

const getRate = (num: number): number => {
  const results = num * 12;

  return results;
};

const setRate = (num: number, currency: string): string => {
  console.log("From remote utils file");
  return `${currency} ${num} is the new rate`;
};

export { getRate, setRate };
