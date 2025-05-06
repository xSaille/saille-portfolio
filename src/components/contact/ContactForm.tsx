import React, { useState, FormEvent } from 'react'; // Import React
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => { // Define as React Functional Component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // Your specific Formspree endpoint URL
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzrevgp'; // <-- Your endpoint inserted here

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status message on new input
    if (formStatus) {
        setFormStatus(null);
    }
  };
  
  const handleSubmit = async (e: FormEvent) => { // Make the function async
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null); // Clear previous status

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree AJAX requests
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Successful submission
        setFormStatus({
          success: true,
          message: "Thank you for your message! I'll get back to you soon."
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle server errors (e.g., Formspree issue)
        const errorData = await response.json();
        setFormStatus({
          success: false,
          // Try to parse Formspree errors, otherwise show generic message
          message: errorData.errors?.map((err: { message: string }) => err.message).join(', ') || "Oops! There was a problem submitting your form. Please try again."
        });
      }
    } catch (error) {
      // Handle network errors
      console.error("Form submission error:", error);
      setFormStatus({
        success: false,
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
       // Optional: Clear status message after a delay
       setTimeout(() => {
        setFormStatus(null);
       }, 5000); 
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-light inline-block">
          Contact Me
        </h1>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        <p className="mt-6 text-text max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        {/* Contact Form */}
        <div className="bg-background-light rounded-lg p-8 border border-background-lighter">
          <h2 className="text-xl font-bold text-text-light mb-6">
            Send Me a Message
          </h2>
          
          {formStatus && (
            // Updated status message styling for better visibility
            <div className={`p-4 mb-6 rounded-lg text-sm ${formStatus.success ? 'bg-green-900/30 border border-green-700/50 text-green-300' : 'bg-red-900/30 border border-red-700/50 text-red-300'}`}>
              {formStatus.message}
            </div>
          )}
          
          {/* Form with inputs */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-text-light mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-accent/20 focus:border-accent text-text-light focus:outline-none transition-colors duration-300 placeholder:text-text/50"
                placeholder="Your Name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-text-light mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-accent/20 focus:border-accent text-text-light focus:outline-none transition-colors duration-300 placeholder:text-text/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-text-light mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-accent/20 focus:border-accent text-text-light focus:outline-none transition-colors duration-300 placeholder:text-text/50"
                placeholder="Reason for contacting"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-text-light mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-background-lighter border border-accent/20 focus:border-accent text-text-light focus:outline-none transition-colors duration-300 resize-none placeholder:text-text/50"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Contact Info Column */}
        <div className="space-y-6">
          <div className="bg-background-light rounded-lg p-6 border border-background-lighter hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <Phone size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-text-light font-bold mb-1">Phone</h3>
                <a href="tel:+212772310739" className="text-text hover:text-accent transition-colors duration-300 break-all">
                  +212 772-310739
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-background-light rounded-lg p-6 border border-background-lighter hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <Mail size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-text-light font-bold mb-1">Email</h3>
                <a href="mailto:at.ilyass03@gmail.com" className="text-text hover:text-accent transition-colors duration-300 break-all">
                  at.ilyass03@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-background-light rounded-lg p-6 border border-background-lighter hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <MapPin size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-text-light font-bold mb-1">Location</h3>
                <p className="text-text">Casablanca, Morocco</p>
              </div>
            </div>
          </div>
          
          {/* Social Links Section */}
          <div className="bg-background-light rounded-lg p-6 border border-background-lighter">
            <h3 className="text-text-light font-bold mb-4">Connect with Me</h3>
            <div className="flex justify-around items-center">
              {/* GitHub Link */}
              <a 
                href="https://github.com/xSaille" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/ilyass-atide-3a20b5336/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div> {/* End Contact Info Column */}
      </div> {/* End Grid */}
    </section>
  );
};

export default ContactForm;