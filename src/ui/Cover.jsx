import cover from "../assets/cover.png";

function Cover() {
  return (
    <img
      src={cover}
      alt="Cover img"
      className="h-[500px] w-full object-center object-cover"
    />
  );
}

export default Cover;
