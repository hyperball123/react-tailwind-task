import CardStatBox from "./CardStatBox";

function Card() {
  return (
    <div className="relative w-[283.64px] h-[312px] mt-20 bg-card2-image  rounded-2xl bg-cover bg-center">
      <p className="text-white pt-3 pl-4 font-semibold">The Sound of Silence</p>

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center ">
        <div className="flex justify-between bg-slate-200/20 backdrop-blur-md px-6 py-2 rounded-2xl">
          <CardStatBox heading="Shares" value="317" />
          <CardStatBox heading="offered" value="75%" />
          <CardStatBox heading="Raised" value="$9510" />
        </div>
      </div>
    </div>
  );
}

export default Card;
