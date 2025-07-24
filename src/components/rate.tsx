type Props = {
  item: { currency: string; rate: number };
  search_query: string;
};

const Rate = ({ item, search_query }: Props) => {
  const multiple = Number(search_query||1) ?? 1;
  const base = (1 * multiple).toFixed(2);
  const rate = (item.rate * multiple).toFixed(2);
  // JSX Code
  return (
    <div className="w-full h-fit p-6">
      <div
        className="w-full h-40 rounded-xl border border-border bg-background md:bg-main-background p-4 
         flex items-center justify-between gap-4 overflow-hidden"
      >
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-1">
          <h1 className="text-lg font-semibold text-center">{base}</h1>
          <span
            className="text-xs font-semibold text-center text-muted-foreground
             uppercase py-1 px-2 border border-border rounded-md"
          >
            USD
          </span>
        </div>{" "}
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-1">
          <h1 className="text-lg font-semibold text-center">{rate}</h1>
          <span
            className="text-xs font-semibold text-center text-muted-foreground
             uppercase py-1 px-2 border border-border rounded-md"
          >
            {item.currency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
