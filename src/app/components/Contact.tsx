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
} from './ui';

import { useTranslations } from 'next-intl';
import { Loader2 } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

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
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader title={t('title')} description={t('description')} />

        <div className="grid-2-cols">
          <div className="card-frosted">
            <h3 className="h3">{t('form.title')}</h3>

            <form onSubmit={handleSubmit} className="form">
              <FormInput
                id="name"
                name="name"
                label={t('form.name')}
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form.namePlaceholder')}
                required
              />

              <FormInput
                id="email"
                name="email"
                label={t('form.email')}
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('form.emailPlaceholder')}
                required
              />

              <FormInput
                id="subject"
                name="subject"
                label={t('form.subject')}
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('form.subjectPlaceholder')}
                required
              />

              <FormTextarea
                id="message"
                name="message"
                label={t('form.message')}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.messagePlaceholder')}
                required
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="loading-spinner" />
                    {t('form.sending')}
                  </>
                ) : (
                  t('form.sendButton')
                )}
              </Button>

              {submitStatus === 'success' && (
                <StatusMessage type="success" message={t('status.success')} />
              )}

              {submitStatus === 'error' && (
                <StatusMessage type="error" message={t('status.error')} />
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="h3">{t('connect.title')}</h3>
              <p className="text-subtitle-gray">{t('connect.description')}</p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                icon={<EnvelopeIcon />}
                title={t('info.email')}
                content="devinhworks@gmail.com"
                className="card-frosted"
              />

              <ContactInfoCard
                icon={<MapPinIcon />}
                title={t('info.location')}
                content="Sunnyvale, CA"
                className="card-frosted"
              />

              <ContactInfoCard
                icon={<BriefcaseIcon />}
                title={t('info.availability')}
                content={t('info.availabilityText')}
                className="card-frosted"
              />
            </div>

            <div className="pt-6">
              <h4 className="text-medium-dark">{t('connect.followMe')}</h4>
              <div className="flex-center-gap">
                <SocialLink
                  href="https://github.com/DevByDevin"
                  icon={<GithubLogoIcon size={28} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/devinh1109/"
                  icon={<LinkedinLogoIcon size={28} />}
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
