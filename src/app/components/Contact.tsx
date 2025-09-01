'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.log('EmailJS not configured, using demo mode');

      setTimeout(() => {
        console.log('Form submitted (demo mode):', formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 2000);
      return;
    }

    try {
      console.log('Sending email with EmailJS:', { serviceId, templateId, publicKey });

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Devin Han',
          to_email: 'devinhworks@gmail.com',
          reply_to: formData.email,
        },
        publicKey
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('EmailJS returned non-200 status:', result.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new opportunities, interesting projects, or just
            having a chat.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-green-800">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-red-800">
                      Failed to send message. Please try again or contact me directly.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Let&apos;s Connect
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                I&apos;m currently available for freelance work and full-time opportunities. Whether
                you have a question or just want to say hi, I&apos;ll try my best to get back to
                you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-xl text-blue-600 dark:text-blue-400">📧</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">devin@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-xl text-blue-600 dark:text-blue-400">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-xl text-blue-600 dark:text-blue-400">💼</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Availability</h4>
                  <p className="text-gray-600 dark:text-gray-300">Open to new opportunities</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="mb-4 font-medium text-gray-900 dark:text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                >
                  <span className="text-lg">🐙</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                >
                  <span className="text-lg">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
