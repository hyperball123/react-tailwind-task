import Stat from "./Stat";

function Stats() {
  return (
    <div className="flex gap-4 auto-cols-max pt-48 ">
      <div className="w-[60%] border-r border-[#7A7A7A]">
        <span className="font-serif text-[28px]">Release</span>
        <p className="tracking-wider font-serif italic font-light text-[#565656] line">
          Videos that you upload in collaboration with aBit appear here.
        </p>
      </div>

      <div className="w-[10%] border-r border-[#7A7A7A]">
        <Stat value="1" name="Shared Videos" />
      </div>
      <div className="w-[10%] border-r border-[#7A7A7A] ">
        <Stat value="$9510" name="Funds Raised" />
      </div>
      <div className="w-[10%] border-r border-[#7A7A7A] ">
        <Stat value="317" name="Co-owner community" />
      </div>
      <div className="w-[10%] ">
        <Stat value="$3804" name="Co-owner Earnings" />
      </div>
    </div>
  );
}

export default Stats;
