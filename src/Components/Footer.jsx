import { contact, site } from "../data/portfolioData";

const footerLinks = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">{site.name}</h1>
            <span className="footer__subtitle">{site.role}</span>
          </div>

          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href={contact.footerSocial.facebook}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href={contact.footerSocial.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href={contact.footerSocial.twitter}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
