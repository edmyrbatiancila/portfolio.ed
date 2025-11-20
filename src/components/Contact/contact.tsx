import React, { useRef } from 'react';
import linkedinLogo from '../../assets/linkedin-logo.png';
import youtubeLogo from '../../assets/youtube-logo.png';
import githubLogo from '../../assets/github.png';
import emailjs from '@emailjs/browser';
import './contact.css';

interface LogoItem {
  imageSrc: string;
  altText: string;
  linkUrl: string;
}

const logoListItems: LogoItem[] = [
  {
    imageSrc: linkedinLogo,
    altText: "Logo of LinkedIn",
    linkUrl: "https://www.linkedin.com/in/edmyr-batiancila/",
  },
  {
    imageSrc: youtubeLogo,
    altText: "Logo of Youtube",
    linkUrl: "https://youtube.com/@edmyrbatiancila5469?si=p7aG43rj4wAAIrH8",
  },
  {
    imageSrc: githubLogo,
    altText: "Logo of GitHub",
    linkUrl: "https://github.com/edmyrbatiancila",
  },
];

const Contact: React.FC = () => {
  const handleLogoClick = (linkUrl: string): void => {
    window.open(linkUrl, '_blank');
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_9tsvboa",
        "template_5oebv39",
        form.current,
        "fJ3rShuNH0wHqioIp"
      )
      .then(
        (result) => {
          console.log(result.text);
          (e.target as HTMLFormElement).reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            {logoListItems.map((item, index) => (
              <img
                key={index}
                src={item.imageSrc}
                alt={item.altText}
                className="link"
                onClick={() => handleLogoClick(item.linkUrl)}
              />
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
