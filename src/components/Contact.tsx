'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MessageSquare, Send, UserRound } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = process.env.NEXT_PUBLIC_EMAILJS_RECEIVER;
const RECEIVER_NAME =
  process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_NAME?.trim() || 'there';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

type StatusState =
  | { type: 'idle' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const initialForm: FormFields = {
  name: '',
  email: '',
  message: '',
};

const inputClasses =
  'w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-400 shadow-[0_1px_0_rgba(255,255,255,0.08)] transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40 disabled:cursor-not-allowed disabled:border-white/5 disabled:text-slate-500';

const errorClasses =
  'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30 disabled:border-rose-500/60';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.65, 0.4, 0.95] } },
};

const formVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 0.84, 0.44, 1], delay: 0.1 },
  },
};

export default function Contact() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>({ type: 'idle' });
  const [loading, setLoading] = useState(false);

  const validate = (fields: FormFields): FormErrors => {
    const validationErrors: FormErrors = {};

    const name = fields.name.trim();
    if (name.length < 2) {
      validationErrors.name = 'Please share your name (2+ characters).';
    }

    const email = fields.email.trim().toLowerCase();
    if (!email) {
      validationErrors.email = 'Let me know how to reach you back.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        validationErrors.email = 'This email address does not look valid yet.';
      }
    }

    const message = fields.message.trim();
    if (message.length < 5) {
      validationErrors.message = 'Tell me a little more (5+ characters).';
    }

    return validationErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name as keyof FormFields]: value }));
    setErrors((prev) => ({ ...prev, [name as keyof FormFields]: undefined }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle' });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECEIVER_EMAIL) {
      console.error('Missing EmailJS configuration.', {
        hasServiceId: Boolean(SERVICE_ID),
        hasTemplateId: Boolean(TEMPLATE_ID),
        hasPublicKey: Boolean(PUBLIC_KEY),
        hasReceiver: Boolean(RECEIVER_EMAIL),
      });
      setStatus({
        type: 'error',
        message: 'The contact form is not ready yet. Please email me directly instead.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
          to_email: RECEIVER_EMAIL,
          to_name: RECEIVER_NAME,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus({
        type: 'success',
        message: "Thanks for reaching out! I&apos;ll get back to you as soon as possible.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error('EmailJS contact error', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again shortly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 scroll-mt-28 md:scroll-mt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <motion.div
          className="max-w-2xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
            Let&apos;s collaborate
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Bring your next idea to life
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            Share a few details about your project or the challenge you&apos;re trying to solve. I read every message and typically respond within one business day.
          </p>
          <ul className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <UserRound className="h-5 w-5 text-sky-300" aria-hidden="true" />
              <div>
                <p className="font-medium text-slate-100">Direct inbox</p>
                <p className="text-slate-400">Everything lands straight in my Gmail.</p>
              </div>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <MessageSquare className="h-5 w-5 text-sky-300" aria-hidden="true" />
              <div>
                <p className="font-medium text-slate-100">Thoughtful replies</p>
                <p className="text-slate-400">Expect a tailored response, never a bot.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.form
          noValidate
          onSubmit={handleSubmit}
          className="relative z-10 grid gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur lg:grid-cols-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={formVariants}
        >
          <div className="lg:col-span-1 lg:pr-6">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
            />
            {errors.name ? (
              <p className="mt-2 text-sm text-rose-400" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-1 lg:pl-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@gmail.com"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
            />
            {errors.email ? (
              <p className="mt-2 text-sm text-rose-400" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your goals, timeline, and what kind of help you need."
              value={form.message}
              onChange={handleChange}
              disabled={loading}
              className={`${inputClasses} ${errors.message ? errorClasses : ''} resize-none leading-relaxed`}
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-rose-400" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:bg-sky-500/60"
            >
              <Send className={`h-5 w-5 transition ${loading ? 'animate-pulse' : ''}`} />
              {loading ? 'Sending...' : 'Send message'}
            </button>

            <div className="text-sm text-slate-300" role="status" aria-live="polite">
              {status.type === 'success' ? (
                <span className="text-emerald-400">{status.message}</span>
              ) : null}
              {status.type === 'error' ? (
                <span className="text-rose-400">{status.message}</span>
              ) : null}
              {status.type === 'idle' && !loading ? (
                <span>I&apos;ll reply within 24 hours.</span>
              ) : null}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}





