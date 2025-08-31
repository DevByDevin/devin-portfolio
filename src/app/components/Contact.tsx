'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none'
                  placeholder='Tell me more about your project or inquiry...'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
                Let's Connect
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
                I'm currently available for freelance work and full-time
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                  <span className='text-blue-600 dark:text-blue-400 text-xl'>
                    📧
                  </span>
                </div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white'>
                    Email
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300'>
                    devin@example.com
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                  <span className='text-blue-600 dark:text-blue-400 text-xl'>
                    📍
                  </span>
                </div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white'>
                    Location
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300'>
                    San Francisco, CA
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                  <span className='text-blue-600 dark:text-blue-400 text-xl'>
                    💼
                  </span>
                </div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white'>
                    Availability
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <h4 className='font-medium text-gray-900 dark:text-white mb-4'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  <span className='text-lg'>🐙</span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  <span className='text-lg'>💼</span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  <span className='text-lg'>🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
