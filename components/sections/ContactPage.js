"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('validation.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('validation.emailInvalid');
    }
    if (!formData.subject.trim()) newErrors.subject = t('validation.subjectRequired');
    if (!formData.message.trim()) newErrors.message = t('validation.messageRequired');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-16 lg:px-24">
      {/* Brand Logo Section */}
      <header className="mb-16 md:mb-20">
        <div className="inline-block">
          <img src="/logo2.png" alt="Twenty Cents" className="w-[70px] h-auto object-contain mb-2" />
        </div>
      </header>

      
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 lg:pl-20">
        
        {/* Left Column: Contact Info */}
        <div className="flex-1 space-y-8 md:space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('title')}</h1>
            <p className="text-white text-sm md:text-base leading-relaxed">
              {t('description').split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:info@20cent-jp.com" className="flex items-center gap-4 group">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm md:text-base font-medium group-hover:text-gray-400 transition-colors">info@20cent-jp.com</span>
            </a>

            <div className="flex items-start gap-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400 w-5 h-5 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm md:text-base font-medium leading-relaxed">東京都目黒区中目黒1-1-17 Latique 105</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full max-w-[470px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.name')}
                  className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder-zinc-600`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-lg">*</span>
              </div>
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.email')}
                  className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder-zinc-600`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-lg">*</span>
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('form.subject')}
                  className={`w-full bg-black border ${errors.subject ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder-zinc-600`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-lg">*</span>
              </div>
              {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1">
              <textarea 
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.message')}
                className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder-zinc-600 resize-none`}
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-zinc-800 rounded-lg py-4 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>

            {/* Success Status */}
            {submitStatus === 'success' && (
              <p className="text-green-400 text-xs text-center mt-2">
                {t('form.success')}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}