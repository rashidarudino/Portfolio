// components/ContactForm.tsx

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("movabzzz");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ensure `handleSubmit` is called with the form data
    handleSubmit(formData).then(() => {
      if (state.succeeded) {
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    }).catch(() => {
      toast.error('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <p className="title">Contact Me</p>
        <div className="nes-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="nes-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="nes-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="nes-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <br/>
        <button 
          type="submit" 
          className="nes-btn is-primary mt-4" 
          disabled={state.submitting}
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
