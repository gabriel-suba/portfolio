const Offer = () => {
  return (
    <section
      className="py-5 flex flex-col gap-5 border-b-[1px] border-black
                lg:py-10 lg:flex-row"
    >
      <div
        className="border-b-[1px] border-black
                  lg:border-b-0 lg:min-w-[300px] lg:border-r-[1px]"
      >
        <h2 className="pb-5 custom-font--inria text-2xl md:text-3xl lg:text-4xl text-center font-light uppercase">
          WHAT I BRING
        </h2>
      </div>
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row gap-3 pb-4 border-b-[1px] border-black">
          <Card
            headline={"DESIGN IMPLEMENTATION"}
            text={
              "I excel in translating complex user interface designs into fully functional websites. This includes carefully converting design aspects like typography, color palettes, layouts, and graphical assets into code."
            }
          />
          <div className="min-h-[100%] w-[1px] bg-black mx-3"></div>
          <Card
            headline={"RESPONSIVE DESIGN"}
            text={
              "I am knowledgeable in responsive design principles. This means that the interfaces I develop are not only optimized for desktop screens, but also well adapt to a wide range of screen sizes, from huge monitors to tablets and smartphones. This ensures that users can comfortably interact with the website regardless of the device they are using."
            }
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 pt-4">
          <Card
            headline={"ADAPTABLE"}
            text={
              "In the constantly evolving web development landscape, I'm quick to pick up new tools, languages, and methodologies. My adaptability allows me to keep up with industry trends and quickly implement new best practices, ensuring that the projects I work on remain at the cutting edge of technology and design."
            }
          />
          <div className="min-h-[100%] w-[1px] bg-black mx-3"></div>
          <Card
            headline={"STRATEGIC"}
            text={
              "Being strategic goes beyond aesthetics. I have a great problem-solving ability, which allows me to approach design and development challenges effectively."
            }
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ headline, text }) => {
  return (
    <div className="flex-1">
      <h2 className="mb-2 custom-font--inria text-2xl lg:text-3xl uppercase">
        {headline}
      </h2>
      <p className="custom-font--inter text-sm md:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default Offer;
