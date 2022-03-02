import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";
import Image from "next/image";

import { useState } from "react";

const LogoDim = {
  height: 94,
  width: 369,
  ratio: 2.5,
};

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <Image
          src={logo}
          alt="Logo"
          height={LogoDim.height / LogoDim.ratio}
          width={LogoDim.width / LogoDim.ratio}
        />
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {["Market", "Exchange", "Wallet"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="mx-4 cursor-pointer rounded-full bg-violet-600 p-2 px-7 hover:rounded-2xl hover:bg-gray-300 hover:text-violet-600">
          Login
        </li>
      </ul>
      <div className="relative flex">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <ul className="blue-glassmorphism animate-slide-in fixed -right-2  top-0 z-10 flex h-screen w-[70vw] list-none flex-col items-end justify-start rounded-md p-3  text-white shadow-2xl md:hidden">
            <li className="my-2 w-full text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Wallet"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
            <li className="mx-4 cursor-pointer rounded-full bg-violet-600 p-2 px-7 hover:rounded-2xl hover:bg-gray-300 hover:text-violet-600">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
