import card from "../assets/coverCard.jpeg";

function CoverCard() {
  return (
    <div className="flex w-[600px] h-[234px] gap-6 absolute top-[420px] left-[83px] bg-card-image rounded-l-3xl rounded-r-3xl">
      <div className="h-[234px] w-[234px] border-r-black">
        <img src={card} alt="card" className="h-full w-[234px] rounded-l-3xl" />
      </div>
      <div className="flex flex-col justify-evenly w-[300px] ">
        <div className="flex gap-7 items-center">
          <h3 className="uppercase font-bold text-2xl">DAN MACE</h3>
          <span className="text-sm text-[#696969]">/Johny_Films/</span>
        </div>
        <div className="text-[#696969] ">
          <span className="font-semibold">Bio</span>
          <p>
            Simply a film fan creating original content for YouTube. Let’s
            Collaborate.
          </p>
        </div>

        <div className="relative flex w-full rounded-lg overflow-hidden border">
          <button className="w-[10rem] border border-black px-10 py-1 rounded-l-md rounded-r-[4px] relative cursor-auto -mr-[1px] z-10 font-serif ">
            Creator
          </button>
          <span className="w-[10rem] px-10 py-1 bg-[#000000A6]  z-0 rounded-r-md "></span>
        </div>
      </div>
    </div>
  );
}

export default CoverCard;
