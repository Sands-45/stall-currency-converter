import { getWorldRates } from "../utils";

type Props = {
  item: { currency: string; rate: number };
};

const Rate = ({ item }: Props) => {
  // JSX Code
  return (
    <div className="w-full h-fit p-6">
      <div
        className="w-full h-40 rounded-lg bg-background md:bg-main-background p-4 
         flex items-center justify-between gap-4 overflow-hidden"
      >
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-1">
          <h1 className="text-lg font-semibold text-center">1.00</h1>
          <span
            className="text-xs font-semibold text-center text-muted-foreground
             uppercase py-1 px-2 border border"
          >
            USD
          </span>
        </div>{" "}
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-1">
          <h1 className="text-lg font-semibold text-center">{item.rate}</h1>
          <span
            className="text-xs font-semibold text-center text-muted-foreground
             uppercase py-1 px-2 border border"
          >
            {item.currency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
