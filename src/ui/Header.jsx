import Button from "./Button";
import { IoWallet } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ProfileImg from "./ProfileImg";
import profile from "../assets/Profile.jpg";

function Header() {
  let iconStyles = { color: "#9ca3af", fontSize: "1.5em" };

  return (
    <header className="flex justify-between p-4">
      <h2 className="text-2xl font-semibold">aBit</h2>

      <nav className="">
        <ul className="flex gap-6 items-center cursor-pointer">
          <Button>Share new video</Button>
          <li>
            <IoWallet style={iconStyles} />
          </li>
          <li>
            <FaBell style={iconStyles} />
          </li>
          <li>
            <ProfileImg imageUrl={profile} altText={"Profile"} />
          </li>
          <li className="-ml-3">
            <IoIosArrowDown style={iconStyles} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
