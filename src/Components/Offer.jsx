const Offer = () => {
	const experiences = [
		{
			title: "Software Developer",
			company: "Linkmind Apps and Testing",
			start: "Sep 2023",
			end: "Present",
			responsibilities: [
				"Integrate external APIs and conduct API Testing to ensure seamless communication between systems.",
				"Developed backend scripts using NodeJS and SQL to automate repetitive business logic, reducing manual workload.",
				"Designed and developed print templates using HTML & CSS for business transactions tailored to client requirements.",
				"Identified and fixed critical bugs, improving overall system reliability.",
				"Refactored legacy code to enhance performance, readability, and scalability.",
				"Created detailed technical design documents as needed to support development and future maintenance."
			]
		},
		{
			title: "Front-end Developer",
			company: "Pixel8 Web Solutions & Consultancy Inc.",
			start: "Feb 2023",
			end: "Apr 2023",
			responsibilities: [
				"Translated UX designs into functional frontend code.",
				"Developed reusable code snippets and components for efficiency.",
				"Completed tasks efficiently and met specified deadlines consistently.",
			]
		}
	]

  return (
    <section className="py-5 flex flex-col gap-5 border-b-[1px] border-black lg:py-10 lg:flex-row" >
      <div className="border-b-[1px] border-black lg:border-b-0 lg:min-w-[300px] lg:border-r-[1px]">
        <h2 className="pb-5 custom-font--inria text-xl text-center font-light uppercase sticky top-0">
          PROFESSIONAL EXPERIENCE
        </h2>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-9 pb-4">
					{experiences.map(exp => (
						<Card
							key={exp.company}
							headline={exp.title}
							company={exp.company}
							start={exp.start}
							end={exp.end}
							text={
								"I excel in translating complex user interface designs into fully functional websites. This includes carefully converting design aspects like typography, color palettes, layouts, and graphical assets into code."
							}
							list={exp.responsibilities}
						/>
					))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ headline, text, list, company, start, end }) => {
  return (
    <div className="flex-1">
      <h2 className="mb-1 custom-font--inria text-2xl lg:text-3xl uppercase">
        {headline}
      </h2>
			<div className="mb-3">
				<p>{company}</p>
				<div>
					{start} - {end}
				</div>
			</div>
			<ul className="list-disc">
				{list.map((item, index) => (
					<li key={index} className="ml-4">
						<p className="custom-font--inter text-sm md:text-base leading-relaxed mb-2">
							{item}
						</p>
					</li>
				))}
			</ul>
    </div>
  );
};

export default Offer;
