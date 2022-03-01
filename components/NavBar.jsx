import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";
import Image from "next/image";

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <Image src={logo} alt="Logo" />
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {["Market", "Exchange", "Wallet"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
    </nav>
  );
}
