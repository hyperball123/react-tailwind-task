// eslint-disable-next-line
function Stat({ value, name }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-[#565656]">{value}</span>

      <p className="w-[60%] text-sm text-[#696969]">{name}</p>
    </div>
  );
}

export default Stat;
