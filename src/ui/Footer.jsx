function Footer() {
  return (
    <div className="flex justify-between w-full max-w-[1360px] mx-auto ">
      <div>
        <h3 className="text-[40px] font-bold">aBit</h3>
        <p className="font-serif w-[60%] text-[20px]">
          Changing the way in which creators and fans interact.
        </p>
      </div>
      <div className="border-l border-black text-[14px] font-semibold pl-6 flex flex-col gap-y-6 justify-center">
        <p>Home</p>
        <p>Are you a Creator?</p>
        <p>Support</p>
      </div>
    </div>
  );
}

export default Footer;
