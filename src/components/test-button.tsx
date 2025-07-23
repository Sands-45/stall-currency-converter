const TestButton = () => {
  const getWorldRates = async (): Promise<any> => {
    try {
      const res = await fetch(
        "https://query1.finance.yahoo.com/v8/finance/chart/GME?interval=1d&range=1y"
      );

      if (!res.ok) {
        return [];
      }

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "We ran into an error";
    }
  };

  // JSX Code
  return (
    <button
      onClick={getWorldRates}
      className="w-40 h-10 bg-red-500 rounded-lg shrink-0"
    >
      Test UI
    </button>
  );
};

export default TestButton;
