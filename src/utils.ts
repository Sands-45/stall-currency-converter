console.log("We here");

const getRate = (num: number): number => {
  const results = num * 12;

  return results;
};

const setRate = (num: number, currency: string): string => {
  console.log("From remote utils file");
  return `${currency} ${num} is the new rate`;
};

const endpoint =
  "https://raw.githubusercontent.com/Sands-45/stall-currency-converter/refs/heads/main/src/mock.json";

const getWorldRates = async (): Promise<any> => {
  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "We ran into an erro";
  }
};

export { getRate, setRate, getWorldRates };
