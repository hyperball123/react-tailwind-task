import { FaPlus } from "react-icons/fa6";

function EmptyCard() {
  let iconStyles = { color: "#9ca3af", fontSize: "2em" };
  return (
    <div className=" relative w-[283.64px] h-[312px] mt-20 bg-[#EDEDED] rounded-2xl ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <FaPlus style={iconStyles} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-center text-[#A0A0A0]">
        You haven’t uploaded any videos with aBit yet. Add now!
      </div>
    </div>
  );
}

export default EmptyCard;
