"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/mjkvbjye', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <h1 className='text-center text-white text-4xl font-name mt-[6rem] '>Contact Me</h1>
    <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto p-8 bg-gray-800 rounded-lg shadow-lg text-white mt-24 space-y-6">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Send
      </button>
      {status && <p className="text-center mt-4 text-sm">{status}</p>}
    </form>
    </div>
  );
};

export default ContactForm;
