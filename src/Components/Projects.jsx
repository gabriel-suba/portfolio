import project1 from "../assets/screenshots/project-a_1.png";
import project2 from "../assets/screenshots/project-b_1.png";
import project4 from "../assets/screenshots/project-d_1.png";
import project5 from "../assets/screenshots/project-e_1.png";
import external from "../assets/icons/external-link.svg";

const Projects = () => {
  return (
    <section className="py-5 flex flex-col md:py-10 md:flex-row gap-16 border-b-[1px] border-black">
      <div className="pb-5 border-b-[1px] md:min-w-[300px] md:border-r-[1px] md:border-b-0 border-black">
        <h2 className="custom-font--inria text-4xl text-center font-light uppercase sticky top-0">
          my projects
        </h2>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <Card
          image={project1}
          title={"easybank landing page"}
          description={
            "A responsive landing page built using HTML, CSS, and JavaScript. In this project, the most trickiest part for me when I was building this was the overhang of the background image from the hero section. I utilized CSS Grid in this project to create the 4 column layout. "
          }
          tech={["html", "css", "javascript"]}
          link="https://gabrielsuba-easybank.netlify.app/"
        />
        <div className="w-full min-h-[1px] bg-black"></div>
        <Card
          image={project2}
          title={"Peak-a-blog!"}
          description={
            "This project is overall fun to make. I have used Firebase for storing data and for authentication. It is a mini blog posting app to share what's on your mind. Also, it is responsive! "
          }
          tech={["html", "css", "react", "firebase"]}
          link="https://peak-a-blog.netlify.app/"
        />
        <div className="w-full min-h-[1px] bg-black"></div>
        <Card
          image={project5}
          title={"dictionary web app"}
          description={
            "A responsive dictionary app developed with ReactJS. Utilized Free Dictionary API to fetch the definitions of user’s input."
          }
          tech={["html", "css", "react"]}
          link="https://gabrielsuba-dictionary.netlify.app/"
        />
        <div className="w-full min-h-[1px] bg-black"></div>
        <Card
          image={project4}
          title={"News Homepage"}
          description={
            "A news homepage from one of the challenge of Frontend Mentor. A very simple project where i practiced my flexbox skills."
          }
          tech={["html", "css"]}
          link="https://gabriel-suba.github.io/news-homepage/"
        />
      </div>
    </section>
  );
};

const Card = ({ image, title, description, tech, link }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <a
        href={link}
        className="max-w-[480px] group relative self-center md:self-start lg:flex-1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-7 h-7 opacity-0 group-hover:opacity-100 
					  absolute z-10 right-3 top-3 transition-all duration-300
					  translate-x-[-50%] group-hover:translate-x-0
					  translate-y-[50%] group-hover:translate-y-0"
          src={external}
          alt="Link to the demo website"
        />
        <img
          className="w-full rounded-sm border-[1px] border-gray-300 
					  group-hover:blur-sm transition-all duration-300 object-cover"
          src={image}
          alt={`Screenshot of ${title} website`}
        />
      </a>
      <div className="lg:flex-1">
        <h2 className="mb-5 custom-font--inria text-3xl capitalize">{title}</h2>
        <p className="mb-3 custom-font--inter">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <Chips text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Chips = ({ text }) => {
  return (
    <div className="inline-block py-1 px-3 text-xs bg-black text-white uppercase rounded-full">
      {text}
    </div>
  );
};

export default Projects;
