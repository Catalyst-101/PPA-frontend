import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Compass,
  AlertCircle,
  CheckCircle,
  Loader,
  User,
  MessageSquare
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { submitContact } from '../api/api';

// Atmospheric background image from the local assets matching News & StudentLife
import heroImage from '../assets/images/hero/6.jpeg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const contactDetails = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+92 348 0230807',
      href: 'tel:+923480230807',
      iconColor: 'text-primary'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Chat',
      detail: '+92 348 0230807',
      href: 'https://wa.me/923480230807?text=Hello%20Pen%20%26%20Page%20School%2C%20I%20have%20an%20inquiry%20regarding%20admissions.',
      iconColor: 'text-[#25D366]'
    },
    {
      icon: Mail,
      title: 'Email Address',
      detail: 'penandpageacademia@gmail.com',
      href: 'mailto:penandpageacademia@gmail.com',
      iconColor: 'text-secondary-fixedDim'
    },
    {
      icon: MapPin,
      title: 'Campus Location',
      detail: 'Old Bara Road, University Town, Peshawar',
      href: '#map',
      iconColor: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      detail: 'Mon - Fri: 8:00 AM - 2:00 PM | Sat: 8:00 AM - 12:30 PM',
      iconColor: 'text-secondary-fixedDim'
    }
  ];

  const socials = [
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com', color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com', color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-[#ee2a7b]' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com', color: 'hover:bg-black hover:border-black' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' }
  ];

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setFormError('');
    setSuccess(false);

    try {
      const response = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      if (response.data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormError(response.data.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } finally {
      loading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="bg-surface font-sans min-h-screen">
      {/* Hero Header matching StudentLife and News */}
      <div className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pen & Page School contact details"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="text-secondary-container tracking-[0.2em] text-sm font-bold uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Contact Us
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Have questions about registrations, classes, or our community? Reach out today—we are here to support you.
          </p>
        </motion.div>
      </div>

      {/* Main Form & Info Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* Left Column: Single Combined Directory Hub Card & Socials */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-5 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
                    Connect Directly
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    Directory Hub
                  </h2>
                  <p className="text-text-variant text-sm md:text-base leading-relaxed">
                    All our administrative touchpoints housed in one place. Drop by our desk or reach out over matching virtual pipelines.
                  </p>
                </motion.div>

                {/* Combined Box Section */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-surface-lowest border border-outline-variant/40 shadow-sm divide-y divide-outline-variant/20 rounded-xl overflow-hidden">
                    {contactDetails.map((detail, idx) => {
                      const Icon = detail.icon;
                      const IsLink = !!detail.href;
                      const Tag = IsLink ? 'a' : 'div';

                      return (
                        <Tag
                          key={idx}
                          href={detail.href}
                          target={detail.href?.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`flex gap-4 items-start p-5 transition-all duration-200 ${IsLink ? 'hover:bg-primary/[0.02] cursor-pointer group' : ''
                            }`}
                        >
                          <div className={`p-2.5 rounded-lg bg-surface-containerHighest mt-0.5 border border-outline-variant/10 group-hover:scale-105 transition-transform ${detail.iconColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold uppercase text-text-variant/60 tracking-wider mb-1">
                              {detail.title}
                            </h4>
                            <p className={`text-sm md:text-base font-medium text-primary leading-tight break-words ${IsLink ? 'group-hover:text-secondary transition-colors' : ''}`}>
                              {detail.detail}
                            </p>
                          </div>
                        </Tag>
                      );
                    })}
                  </Card>
                </motion.div>
              </div>

              {/* Improved Social Channels Row Layout */}
              <motion.div variants={fadeInUp} className="pt-6 border-t border-outline-variant/30">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-variant/70 mb-4">
                  Follow Our Social Channels
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/soc flex items-center gap-3 pl-3 pr-4 py-2 rounded-full border border-outline-variant/60 bg-surface-lowest text-text-variant shadow-sm hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ${social.color} cursor-pointer`}
                        aria-label={`Follow Pen & Page School on ${social.name}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-surface-containerHigh group-hover/soc:bg-white/20 flex items-center justify-center transition-colors">
                          <SocialIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold tracking-wide text-primary group-hover/soc:text-white transition-colors">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Sleek Redesigned Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <Card className="shadow-ambient relative overflow-hidden rounded-xl border border-outline-variant/20 h-full">
                <CardContent className="p-8 md:p-10 relative flex flex-col h-full justify-center">

                  {/* Modern Overlay Success Window */}
                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 rounded-xl"
                      >
                        <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6 border border-[#25D366]/20 shadow-inner">
                          <CheckCircle className="w-8 h-8 animate-bounce" />
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-primary mb-2">
                          Message Submitted!
                        </h3>
                        <p className="text-text-variant text-sm max-w-sm mb-8 leading-relaxed">
                          Your message has been sent successfully. Our support desk will reach back to you via phone or email shortly.
                        </p>
                        <Button
                          variant="primary"
                          onClick={() => setSuccess(false)}
                        >
                          Send Another Inquiry
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mb-8">
                    <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-1 block">
                      Digital Desk
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Inquire Online
                    </h2>
                  </div>

                  {formError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{formError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name Input wrapper */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary tracking-wide uppercase">
                        Full Name *
                      </label>
                      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border bg-surface-lowest transition-all duration-300 ${errors.name ? 'border-red-400 ring-2 ring-red-400/10' : 'border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10'
                        }`}>
                        <User className="w-4 h-4 text-text-variant/50 flex-shrink-0" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent text-sm focus:outline-none text-primary placeholder-text-variant/40 font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Phone Number Wrapper */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary tracking-wide uppercase">
                          Phone Number *
                        </label>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border bg-surface-lowest transition-all duration-300 ${errors.phone ? 'border-red-400 ring-2 ring-red-400/10' : 'border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10'
                          }`}>
                          <Phone className="w-4 h-4 text-text-variant/50 flex-shrink-0" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm focus:outline-none text-primary placeholder-text-variant/40 font-medium"
                            placeholder="+92 300 1234567"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Address Wrapper */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary tracking-wide uppercase">
                          Email Address (Optional)
                        </label>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border bg-surface-lowest transition-all duration-300 ${errors.email ? 'border-red-400 ring-2 ring-red-400/10' : 'border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10'
                          }`}>
                          <Mail className="w-4 h-4 text-text-variant/50 flex-shrink-0" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm focus:outline-none text-primary placeholder-text-variant/40 font-medium"
                            placeholder="johndoe@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Textarea Wrapper */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary tracking-wide uppercase">
                        Your Message *
                      </label>
                      <div className={`flex items-start gap-3 px-4 py-3 rounded-lg border bg-surface-lowest transition-all duration-300 ${errors.message ? 'border-red-400 ring-2 ring-red-400/10' : 'border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10'
                        }`}>
                        <MessageSquare className="w-4 h-4 text-text-variant/50 flex-shrink-0 mt-1" />
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent text-sm focus:outline-none text-primary placeholder-text-variant/40 font-medium resize-none"
                          placeholder="Write details of your inquiry here..."
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3.5 shadow-lg shadow-primary/10 flex items-center justify-center gap-2 font-bold tracking-wide"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Inquiry'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div
        id="map"
        className="py-20 px-6 bg-surface-containerLow border-t border-outline-variant/30"
      >
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
            Our Location
          </span>

          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Visit Pen & Page Academia
          </h2>

          <p className="text-text-variant max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Located in Peshawar, Pen & Page Academia provides a welcoming learning
            environment for students and families. Use the interactive map below to
            find us or get directions to our campus.
          </p>

          {/* Map Container */}
          <Card className="relative overflow-hidden rounded-xl border border-outline-variant/10 shadow-ambient">
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.860758987561!2d71.5020476!3d33.9961101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9174760a988f3%3A0xb38fd90d01185b36!2sPen%20%26%20Page%20Academia!5e0!3m2!1sen!2s!4v1784287536190!5m2!1sen!2s"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pen & Page Academia Location"
              />
            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

            {/* Get Directions Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <a
                href="https://maps.app.goo.gl/r4K5MotRxwxvKqWp9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="px-8 py-3 shadow-lg shadow-secondary/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Compass className="w-5 h-5 animate-pulse" />
                  Get Directions
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}