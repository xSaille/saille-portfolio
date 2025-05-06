import ContactForm from '../components/contact/ContactForm';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | Ilyass Atide';
  }, []);

  return <ContactForm />;
};

export default ContactPage;