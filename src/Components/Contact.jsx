import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';
const Contact = () => {
  const { isDark } = useTheme();
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Add template ID here
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ehtisham Nazir', // Add recipient name
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error details:', error);
      alert(`Failed to send message: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`${
        isDark ? "bg-transparent text-white" : "bg-white text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-400 ${
                  isDark
                    ? "bg-neutral-800 border-neutral-700 text-white"
                    : "bg-white border-neutral-300 text-neutral-900"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block mb-2 ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-400 ${
                  isDark
                    ? "bg-neutral-800 border-neutral-700 text-white"
                    : "bg-white border-neutral-300 text-neutral-900"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block mb-2 ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-400 ${
                  isDark
                    ? "bg-neutral-800 border-neutral-700 text-white"
                    : "bg-white border-neutral-300 text-neutral-900"
                }`}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-cyan-400 text-neutral-900 rounded-lg font-medium hover:bg-cyan-300 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;