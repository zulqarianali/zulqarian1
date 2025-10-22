import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formData = new FormData(e.target);

    try {
      // POST to the mock API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <Layout title="Contact | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Contact Me</h2>
            <p className="mt-4 text-lg leading-6 text-gray-300">
              Have a project in mind? I&apos;d love to hear from you.
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input type="text" name="name" id="name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-gray-800 border-gray-700 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-gray-800 border-gray-700 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-gray-800 border-gray-700 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your message..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </div>
              {status && <p className="text-center text-gray-300 mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
