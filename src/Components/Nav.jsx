/* eslint-disable react/prop-types */
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";

import Image from "./Image";

const Nav = () => {
  return (
    <nav className="pb-4 flex justify-between gap-4 items-center border-b-[1px] border-black">
      <div className="text-2xl font-bold custom-font--inria cursor-default">
        Gabriel Suba
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Divider />
        <a
          href="https://www.linkedin.com/in/gabriel-suba"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:block p-2 w-11 h-11 border-[1px] border-black rounded-full
                    hover:scale-[1.1] transition-transform duration-200"
        >
          <Image url={linkedin} alt={"LinkedIn"} />
        </a>
        <a
          href="mailto: gabrieljoshua.suba@gmail.com"
          className="hidden sm:block p-2 w-11 h-11 border-[1px] border-black rounded-full
                    hover:scale-[1.1] transition-transform duration-200"
        >
          <Image url={mail} alt={"Email"} />
        </a>
      </div>
    </nav>
  );
};

const Divider = () => (
  <div className="hidden sm:inline-block h-full min-h-[48px] w-[1px] bg-black"></div>
);

export default Nav;
