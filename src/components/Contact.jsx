import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const mailtoLink = `mailto:athulmohanan08@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'athulmohanan08@gmail.com', href: 'mailto:athulmohanan08@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-9562847738', href: 'tel:+919562847738' },
    { icon: MapPin, label: 'Location', value: 'Kerala, India', href: null },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'Athul M', href: 'https://www.linkedin.com/in/athul-m-016996365' },
    { icon: GithubIcon, label: 'GitHub', value: 'athulm08', href: 'https://github.com/athulm08' }
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Meaningful Together
          </h2>
          <p className="text-text-secondary text-lg">
            I am interested in software development opportunities and projects where I can apply my skills, continue learning, and contribute to useful technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-accent-violet/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-charcoal-light flex items-center justify-center shrink-0 border border-border group-hover:bg-accent-violet/10 group-hover:border-accent-violet/30 transition-all">
                  <info.icon className="w-6 h-6 text-accent-violet" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="text-text-primary font-medium hover:text-accent-violet transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-text-primary font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Send me a message</h3>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-text-secondary ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-charcoal-light border ${errors.name ? 'border-red-500' : 'border-border'} text-text-primary focus:outline-none focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/50 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs ml-1">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-charcoal-light border ${errors.email ? 'border-red-500' : 'border-border'} text-text-primary focus:outline-none focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/50 transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs ml-1">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-sm font-medium text-text-secondary ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-charcoal-light border ${errors.subject ? 'border-red-500' : 'border-border'} text-text-primary focus:outline-none focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/50 transition-all`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <span className="text-red-500 text-xs ml-1">{errors.subject}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-charcoal-light border ${errors.message ? 'border-red-500' : 'border-border'} text-text-primary focus:outline-none focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/50 transition-all resize-none`}
                  placeholder="Hello Athul..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs ml-1">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full mt-2 px-6 py-4 rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue text-white font-bold text-lg hover:shadow-lg hover:shadow-accent-violet/25 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                Send Message
              </button>

              <p className="text-xs text-text-muted text-center mt-3">
                * This form uses your email client to send messages. No backend server is configured.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
