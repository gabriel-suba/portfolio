import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactIllustration from "../assets/icons/contact-illustration.svg";

const Contact = () => {
  const [sending, SetSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    SetSending(true);

    emailjs
      .sendForm(
        "service_lkg7j72",
        "template_gab",
        form.current,
        "C3Lhj_9x1BxD_TZ3f"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetSending(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          SetSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex justify-center items-center border-b-[1px] border-black"
    >
      {/* left */}
      <div className="hidden sm:block flex-1">
        <img className="w-full h-auto" src={contactIllustration} alt="" />
      </div>

      {/* right */}
      <div className="flex-1 text-left sm:text-right">
        <p className="custom-font--inter text-sm mb-4">Contact</p>
        <h2 className="custom-font--inria text-6xl md:text-7xl lg:text-8xl mb-8">
          Let&apos;s Talk!
        </h2>
        <form className="flex flex-col gap-3" ref={form} onSubmit={sendEmail}>
          <input
            className="py-2 px-3 w-full rounded-sm border-[1px] border-gray-400 
					  focus:border-gray-800 focus:outline-none focus:ring-0 resize-none"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            className="py-2 px-3 w-full rounded-sm border-[1px] border-gray-400 
					  focus:border-gray-800 focus:outline-none focus:ring-0 resize-none"
            type="text"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            className="py-2 px-3 w-full h-48 rounded-sm border-[1px] border-gray-400 
					  focus:border-gray-800 focus:outline-none focus:ring-0 resize-none"
            name="message"
            placeholder="Your message..."
          ></textarea>
          <button
            className="bg-black text-white py-3 mt-5 rounded-sm hover:bg-gray-900 
						transition-colors duration-200 uppercase"
            type="submit"
            disabled={sending}
          >
            {sending ? "sending..." : "submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
