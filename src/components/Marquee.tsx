import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

interface IHeadlines {
  change: {
    pct: number;
    dir: "up" | "down" | "flat";
  };
  unit: string;
  id: number;
  categoryIcon: string;
  nameBn: string;
  today: number;
}

const unitBn: Record<string, string> = {
  kg: "কেজি",
  liter: "লিটার",
  l: "লিটার",
  piece: "পিস",
  pcs: "পিস",
  dozen: "ডজন",
  hali: "হালি",
  gram: "গ্রাম",
  g: "গ্রাম",
};

const toBn = (n: number) => Number(n).toLocaleString("bn-BD");

const toBnPct = (n: number) =>
  Number(n).toLocaleString("bn-BD", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const headlines: IHeadlines[] = await res.json();

  return (
    <div className="bg-base-200">
      <MarqueeText className="py-1 text-sm" direction="right" duration={20}>
        {headlines.map((item, index: number) => {
          const pct = Math.abs(Number(item.change.pct));
          const unit = unitBn[item.unit?.toLowerCase()] ?? item.unit;

          return (
            <span
              key={item.id ?? index}
              className="mr-6 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>{item.categoryIcon}</span>
              <span className="text-base-content text-[14px] font-medium">
                {item.nameBn}
              </span>
              <span>{`${toBn(item.today)} টাকা/${unit}`}</span>

              {item.change.dir === "up" && (
                <span className="inline-flex items-center gap-1 font-semibold text-[#d44a4b]">
                  <BsCaretUpFill />
                  {`${toBnPct(pct)} %`}
                </span>
              )}

              {item.change.dir === "down" && (
                <span className="inline-flex items-center gap-1 font-semibold text-[#1a9951]">
                  <BsCaretDownFill />
                  {`${toBnPct(pct)} %`}
                </span>
              )}
            </span>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;