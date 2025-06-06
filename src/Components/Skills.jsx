import Image from "./Image";

import html from "../assets/stack/html.svg";
import css from "../assets/stack/css.svg";
import js from "../assets/stack/js.svg";
import react from "../assets/stack/react.svg";
import tailwind from "../assets/stack/tailwind.svg";
import node from "../assets/stack/node.svg";
import fbase from "../assets/stack/fbase.svg";
import mongo from "../assets/stack/mongo.svg";
import mysql from "../assets/stack/mysql.svg";
import vue from "../assets/stack/vue.svg";

import vscode from "../assets/tools/vscode.svg";
import vs from "../assets/tools/vs.svg";
import git from "../assets/tools/git.svg";
import gitlab from "../assets/tools/gitlab.svg";
import figma from "../assets/tools/figma.svg";

const Skills = () => {
  return (
    <>
      {/* TECH STACK --------------------------------------------------------------- */}
      <section className="py-4 flex flex-col lg:flex-row lg:py-8 gap-3 border-b-[1px] border-black">
        <div className="pb-4 min-w-[120px] self-center lg:pb-0">
          <h2 className="custom-font--inria text-lg text-center lg:text-right uppercase">
            Tech Stack
          </h2>
        </div>

        <div className="min-h-[100%] w-[1px] bg-black mx-3"></div>

        <div className="w-full flex gap-16 flex-wrap justify-center">
          <div className="w-[50px] h-[50px]">
            <Image url={html} alt={"HTML logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={css} alt={"CSS logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={js} alt={"JavaScript logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={react} alt={"React logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={tailwind} alt={"TailwindCSS logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={node} alt={"Node logo"} />
          </div>
          {/* <div className="w-[50px] h-[50px]">
            <Image url={fbase} alt={"Firebase logo"} />
          </div> */}
          {/* <div className="w-[50px] h-[50px]">
            <Image url={mongo} alt={"MongoDB logo"} />
          </div> */}
          <div className="w-[50px] h-[50px]">
            <Image url={mysql} alt={"MySQL logo"} />
          </div>
          {/* <div className="w-[50px] h-[50px]">
            <Image url={vue} alt={"VueJS logo"} />
          </div> */}
        </div>
      </section>

      {/* TOOLS -------------------------------------------------------------------- */}

      <section className="py-4  flex flex-col lg:flex-row lg:py-8 gap-3 border-b-[1px] border-black">
        <div className="pb-4 min-w-[120px] self-center lg:pb-0">
          <h2 className="custom-font--inria text-lg text-center lg:text-right uppercase">
            Tools
          </h2>
        </div>

        <div className="min-h-[100%] w-[1px] bg-black mx-3"></div>

        <div className="w-full flex gap-16 flex-wrap justify-center">
          <div className="w-[50px] h-[50px]">
            <Image url={vscode} alt={"Visual Studio Code logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={vs} alt={"Visual Studio logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={git} alt={"Git logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={gitlab} alt={"GitLab logo"} />
          </div>
          <div className="w-[50px] h-[50px]">
            <Image url={figma} alt={"Figma logo"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
