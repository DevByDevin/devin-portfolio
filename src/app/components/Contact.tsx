'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  ContactInfoCard,
  FormInput,
  FormTextarea,
  SectionHeader,
  SocialLink,
  StatusMessage,
  EnvelopeIcon,
  MapPinIcon,
  BriefcaseIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
} from './ui';

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
        <SectionHeader
          title="Get In Touch"
          description="I'm always open to discussing new opportunities, interesting projects, or just having a chat."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <FormInput
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />

              <FormInput
                id="subject"
                name="subject"
                label="Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />

              <FormTextarea
                id="message"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project or inquiry..."
                required
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
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
              </Button>

              {submitStatus === 'success' && (
                <StatusMessage
                  type="success"
                  message="Message sent successfully! I'll get back to you soon."
                />
              )}

              {submitStatus === 'error' && (
                <StatusMessage
                  type="error"
                  message="Failed to send message. Please try again or contact me directly."
                />
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
              <ContactInfoCard
                icon={<EnvelopeIcon />}
                title="Email"
                content="devinhworks@gmail.com"
              />

              <ContactInfoCard icon={<MapPinIcon />} title="Location" content="Sunnyvale, CA" />

              <ContactInfoCard
                icon={<BriefcaseIcon />}
                title="Availability"
                content="Open to new opportunities"
              />
            </div>

            <div className="pt-6">
              <h4 className="mb-4 font-medium text-gray-900 dark:text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://github.com/DevByDevin"
                  icon={<GithubLogoIcon />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/devinh1109/"
                  icon={<LinkedinLogoIcon />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
