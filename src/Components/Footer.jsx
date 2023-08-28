import mail from "../assets/icons/mail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import map from "../assets/icons/map.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-4">
      <a
        className="w-fit flex items-center gap-2 mb-3 text-sm hover:text-gray-800 transition-colors duration-200"
        href="mailto: gabrieljoshua.suba@gmail.com"
      >
        <img className="w-4 h-4" src={mail} alt="An icon of email" />
        <p>gabrieljoshua.suba@gmail.com</p>
      </a>
      <a
        className="w-fit flex items-center gap-2 mb-3 text-sm hover:text-gray-800 transition-colors duration-200"
        href="https://www.linkedin.com/in/gabriel-suba"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-4 h-4" src={linkedin} alt="An icon of linkedin" />
        <p>www.linkedin.com/in/gabriel-suba</p>
      </a>
      <div className="flex items-center gap-2 mb-5 text-sm cursor-default">
        <img className="w-4 h-4" src={map} alt="An icon of email" />
        <p>Pampanga, Philippines</p>
      </div>
      <small className="block text-gray-600 text-center cursor-default">
        Gabriel Joshua Suba &copy; {currentYear}
      </small>
    </footer>
  );
};

export default Footer;
