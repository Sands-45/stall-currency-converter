const getRate = (num)=>{
  const results = num * 12;

  return results;
};

const setRate = (num,currency)=>{
  retrun `${currency} ${num} is the new rate`;
};

export {getRate, setRate};
