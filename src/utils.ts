console.log("We here");

const getRate = (num: number): number => {
  const results = num * 12;

  return results;
};

const setRate = (num: number, currency: string): string => {
  return `${currency} ${num} is the new rate`;
};

export { getRate, setRate };
