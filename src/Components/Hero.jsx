import Image from "../Components/Image";
import illustration from "../assets/icons/hero.svg";

const Hero = () => {
  return (
    <section className="py-4 flex flex-col-reverse items-center border-b-[1px] border-black sm:flex-row">
      <div className="headline flex-1 max-w-[520px] mt-3">
        <h1 className="mb-4 custom-font--inria text-3xl font-bold md:text-4xl lg:text-5xl">
          Turning Designs Into Reality
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          A Front-End Developer proficient in design implementation and
          responsiveness.
        </p>
      </div>
      <div className="illustration flex-1 max-w-5xl">
        <Image url={illustration} alt={"hero illustration"} />
      </div>
    </section>
  );
};

export default Hero;
