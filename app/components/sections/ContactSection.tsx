"use client";

import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import React, { useState, FormEvent } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER,
                    to_name: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_NAME
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id='contact' className='min-h-screen py-20 px-4 md:px-10 bg-white flex flex-col items-center justify-center'>
            <div className='max-w-2xl w-full'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <p className='text-gray-500 text-sm tracking-widest uppercase mb-2'>GET IN TOUCH</p>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>Contact Me</h2>
                    <p className='text-gray-600 mt-4 max-w-xl mx-auto'>
                        I&apos;m always open to discussing new projects, backend development opportunities, or collaboration ideas.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className='space-y-6 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm'>
                    {/* Name Field */}
                    <div>
                        <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                            Your name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Jane Doe'
                            required
                            className='w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors'
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                            Your email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='you@gmail.com'
                            required
                            className='w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors'
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                            Your message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Hello there!'
                            required
                            rows={6}
                            className='w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors resize-none'
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='flex flex-col gap-4'>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='bg-gray-950 hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100'
                        >
                            <Send size={18} />
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <p className='text-green-600 text-sm text-center font-medium'>✓ Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className='text-red-600 text-sm text-center font-medium'>✗ Failed to send message. Please try again.</p>
                        )}

                        <p className='text-gray-500 text-sm text-center'>I&apos;ll reply within 24 hours.</p>
                    </div>
                </form>

                {/* Bottom Info */}
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
                        <p className='text-sm text-gray-700'>
                            <span className='text-xl mr-2'>📬</span> Messages go straight to my inbox.
                        </p>
                    </div>
                    <div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
                        <p className='text-sm text-gray-700'>
                            <span className='text-xl mr-2'>💭</span> Expect a thoughtful reply, never a bot.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
