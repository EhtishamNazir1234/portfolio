import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { contact as contactInfo } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const project = formData.project.trim();

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!project) {
      toast.error("Please tell me your project title/type.");
      return;
    }

    if (!message) {
      toast.error("Please enter your message.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Email service is not configured. Add EmailJS keys in .env and restart dev server."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          project,
          subject: project,
          message,
          to_name: "Ehtisham Nazir",
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", project: "", message: "" });
      }
    } catch (error) {
      console.error("Error details:", error);
      const details =
        error?.text || error?.message || "Check EmailJS service/template IDs.";
      toast.error(`Failed to send message: ${details}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">{contactInfo.phone}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">{contactInfo.email}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">{contactInfo.location}</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" onSubmit={handleSubmit} noValidate>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="project" className="contact__label">
              Project
            </label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Project title or type"
              className="contact__input"
            />
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              placeholder="Tell me about your project"
              className="contact__input"
            ></textarea>
          </div>
          <MagneticButton disabled={loading}>
            <button
              type="submit"
              disabled={loading}
              className="button button--flex"
            >
              {loading ? "Sending..." : "Send Message"}
              <i className="uil uil-message button__icon"></i>
            </button>
          </MagneticButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
