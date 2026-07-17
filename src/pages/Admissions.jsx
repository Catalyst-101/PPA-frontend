import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { FileText, Users, ShieldCheck, ClipboardCheck, ArrowUpRight, Bus, MapPin } from 'lucide-react';

import boysSummerImg from '../assets/images/hero/1.jpeg';
import boysWinterImg from '../assets/images/hero/2.jpeg';
import girlsSummerImg from '../assets/images/hero/3.jpeg';
import girlsWinterImg from '../assets/images/hero/4.jpeg';

const feeStructures = [
  {
    class: "Playgroup & Nursery",
    m_fee: 6500,
    a_fee: 10000,
    r_fee: 1500,
    ms_fee: 1200,
    a_charges: 4500
  },
  {
    class: "Prep & Reception",
    m_fee: 7500,
    a_fee: 12000,
    r_fee: 1500,
    ms_fee: 1200,
    a_charges: 4500
  },
  {
    class: "Grade 1 - Grade 5",
    m_fee: 8500,
    a_fee: 15000,
    r_fee: 2000,
    ms_fee: 1500,
    a_charges: 5500
  },
  {
    class: "Grade 6 - Grade 8",
    m_fee: 10000,
    a_fee: 15000,
    r_fee: 2000,
    ms_fee: 1800,
    a_charges: 6000
  },
  {
    class: "Grade 9 & Grade 10",
    m_fee: 12500,
    a_fee: 18000,
    r_fee: 2500,
    ms_fee: 2000,
    a_charges: 7500
  }
];

const transports = [
  {
    title: "Town Route (Vans)",
    fee: 3000,
    coverage: "University Town, Hayatabad, Peshawar",
    description: "Daily prompt pickup and drop-off using air-conditioned vans, supervised by female attendants."
  },
  {
    title: "City Route (Coaster)",
    fee: 4500,
    coverage: "Saddar, Cantt, G.T. Road, Peshawar",
    description: "Comfortable coaster services covering major city junctions. Safe, timely, and secure transport."
  },
  {
    title: "Suburbs Route (Coaster)",
    fee: 5500,
    coverage: "Charsadda Road, Ring Road, Peshawar",
    description: "Extended coverage routes for outer suburbs. Commute worry-free with real-time GPS tracking."
  }
];

export default function Admissions() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const staggerRows = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };

  const rowFadeIn = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const enrollmentDocuments = [
    'Photocopy of the child\'s birth certificate',
    'Photocopy of Form-B / Smart CNIC (Juvenile) or Passport',
    'Photocopies of both parents\' / guardian\'s CNIC',
    'School Leaving Certificate from the previous institution (if applicable)',
    'Result card of the most recently completed academic year (if applicable)',
    '4 recent passport-sized photographs'
  ];

  return (
    <div className="bg-surface font-sans min-h-screen">
      {/* Hero Section styled consistently with About.jsx */}
      <div className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={boysSummerImg}
            alt="Pen & Page School Admissions"
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
            Applications Open
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">Admissions</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            Join Pen & Page School. Registrations are open throughout the year for the upcoming academic session.
          </p>
          <Link to="/admissions/apply">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button variant="secondary" className="px-8 py-3 text-base font-bold shadow-md hover:shadow-lg transition-shadow duration-300">
                Apply Now
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Registration */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-3 bg-secondary/10 text-secondary-fixedDim rounded-xl w-fit mb-4"
              >
                <ClipboardCheck className="w-6 h-6" />
              </motion.div>
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Step One</span>
              <h2 className="text-3xl font-serif font-bold text-primary">Registration</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-variant leading-relaxed mb-4">
                Registration at Pen & Page is open all year round. To register, families visit the campus and complete an Admission Form in person. Once submitted, an appointment card is issued for the entry assessment, followed by a short interview with the School Head.
              </p>
              <motion.ul
                variants={staggerRows}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3 mb-6"
              >
                <motion.li variants={rowFadeIn} className="flex gap-3 text-text-variant text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  The registration fee is non-refundable and is payable at the time of registration.
                </motion.li>
                <motion.li variants={rowFadeIn} className="flex gap-3 text-text-variant text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  Completing registration does not guarantee or confirm a place at the school.
                </motion.li>
                <motion.li variants={rowFadeIn} className="flex gap-3 text-text-variant text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  All information provided on the Application Form must be accurate and complete.
                </motion.li>
              </motion.ul>
              <Link to="/admissions/apply" className="inline-flex items-center gap-1.5 text-secondary-fixedDim font-semibold text-sm hover:text-secondary group/link">
                Apply Now
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enrollment Procedure */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 bg-surface-containerLow"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-3 bg-primary/10 text-primary-container rounded-xl w-fit mb-4"
              >
                <FileText className="w-6 h-6" />
              </motion.div>
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Step Two</span>
              <h2 className="text-3xl font-serif font-bold text-primary">Enrollment Procedure</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-variant leading-relaxed mb-6">
                Our enrollment process is kept simple and transparent. Once a place is offered, parents are asked to submit the following documents to complete their child's file:
              </p>
              <motion.div
                variants={staggerRows}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
              >
                {enrollmentDocuments.map((doc, idx) => (
                  <motion.div key={idx} variants={rowFadeIn} className="flex gap-3 text-text-variant text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {doc}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Parents as Partners */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-3 bg-secondary/10 text-secondary-fixedDim rounded-xl w-fit mb-4"
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Our Community</span>
              <h2 className="text-3xl font-serif font-bold text-primary">Parents as Partners</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-variant leading-relaxed mb-6">
                We see a child's education as a shared responsibility between school and home. A strong, well-maintained connection with parents leads to better outcomes and a more supportive experience for every student. At Pen & Page, this partnership takes shape through:
              </p>
              <motion.div
                variants={staggerRows}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4"
              >
                <motion.div variants={rowFadeIn} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-text-variant text-sm leading-relaxed">
                    <span className="font-semibold text-primary">Parent-Teacher Meetings</span> — regular sessions to review a student's progress, discuss any challenges, and set goals together.
                  </p>
                </motion.div>
                <motion.div variants={rowFadeIn} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-text-variant text-sm leading-relaxed">
                    <span className="font-semibold text-primary">Family Learning Sessions</span> — short workshops on parenting, study habits, and supporting a child's emotional wellbeing.
                  </p>
                </motion.div>
                <motion.div variants={rowFadeIn} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-text-variant text-sm leading-relaxed">
                    <span className="font-semibold text-primary">Open Communication</span> — keeping families informed and connected through newsletters, email updates, and our school website.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Safeguarding */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-20 px-6 bg-primary text-white"
      >
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
            className="p-3 bg-white/10 rounded-xl w-fit mx-auto mb-4"
          >
            <ShieldCheck className="w-6 h-6" />
          </motion.div>
          <span className="text-white/70 tracking-widest text-sm font-bold uppercase mb-2 block">Safeguarding</span>
          <h2 className="text-3xl font-serif font-bold mb-6">Every Child, Known and Protected</h2>
          <p className="text-white/85 leading-relaxed">
            The safety and wellbeing of our students comes before everything else. It is our responsibility to know every child as an individual and to provide a secure, caring environment where they are free to learn, grow, and be themselves.
          </p>
        </div>
      </motion.section>

      {/* Fee Structure */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Investing in Education</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Fee Structure</h2>
          </div>

          <Card className="shadow-ambient">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface-containerHighest text-primary border-b border-outline-variant/30">
                      <th className="p-4 font-semibold whitespace-nowrap">Class</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Monthly Tuition</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Admission Fee</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Registration Fee</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Miscellaneous Fee</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Annual Charges</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    variants={staggerRows}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="divide-y divide-outline-variant/30 text-text-variant"
                  >
                    {feeStructures.map((fee, index) => (
                      <motion.tr
                        key={index}
                        variants={rowFadeIn}
                        className="hover:bg-surface-containerLow/50 transition-colors"
                      >
                        <td className="p-4 font-medium text-primary whitespace-nowrap">{fee.class}</td>
                        <td className="p-4 whitespace-nowrap">Rs. {fee.m_fee.toLocaleString()}</td>
                        <td className="p-4 text-secondary font-medium whitespace-nowrap">
                          {fee.a_fee > 0 ? `Rs. ${fee.a_fee.toLocaleString()}` : 'Waived Off'}
                        </td>
                        <td className="p-4 whitespace-nowrap">Rs. {fee.r_fee.toLocaleString()}</td>
                        <td className="p-4 whitespace-nowrap">Rs. {fee.ms_fee.toLocaleString()}</td>
                        <td className="p-4 whitespace-nowrap">Rs. {fee.a_charges.toLocaleString()}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Transport Services */}
          <div className="mt-16">
            <h3 className="font-serif font-bold text-2xl text-primary mb-6">Transport Services</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4"
            >
              {transports.map((transport, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="shadow-ambient hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-primary">
                      <div className="flex gap-4">
                        <div className="p-2.5 bg-primary/10 text-primary-container rounded-lg h-fit hidden sm:block">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-2">{transport.title}</h4>
                          <p className="text-text-variant flex items-start gap-1.5">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-fixedDim" />
                            {transport.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-8 pl-0 md:pl-2">
                        {transport.fee && (
                          <div>
                            <p className="text-sm text-text-variant mb-1">Monthly Fee</p>
                            <p className="text-2xl font-bold text-secondary">Rs. {transport.fee.toLocaleString()}</p>
                          </div>
                        )}
                        {transport.coverage && (
                          <div>
                            <p className="text-sm text-text-variant mb-1">Coverage</p>
                            <p className="text-base font-semibold text-primary max-w-[220px]">{transport.coverage}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Uniform Guidelines */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-6 bg-surface-containerLow"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Dress Code</span>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Uniform Guidelines</h2>
            <p className="text-text-variant max-w-xl mx-auto">
              A neat, consistent uniform reflects the discipline and pride we build in every student. Summer and winter uniforms differ slightly for boys and girls, as outlined below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Boys Summer */}
            <motion.div variants={fadeInUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <Card className="h-full overflow-hidden shadow-ambient hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-surface-containerHighest overflow-hidden">
                  <img
                    src={boysSummerImg}
                    alt="Boys summer uniform"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-2 block">Boys · Summer</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">Regular Uniform</h3>
                  <ul className="space-y-2">
                    {['Shirt', 'Trouser', 'Tie', 'Socks', 'Black shoes'].map((piece) => (
                      <li key={piece} className="flex gap-3 text-text-variant text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Girls Summer */}
            <motion.div variants={fadeInUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <Card className="h-full overflow-hidden shadow-ambient hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-surface-containerHighest overflow-hidden">
                  <img
                    src={girlsSummerImg}
                    alt="Girls summer uniform"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-2 block">Girls · Summer</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">Regular Uniform</h3>
                  <ul className="space-y-2">
                    {['Shalwar Kameez', 'Shawl / Dupatta', 'Socks', 'Black shoes'].map((piece) => (
                      <li key={piece} className="flex gap-3 text-text-variant text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Boys Winter */}
            <motion.div variants={fadeInUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <Card className="h-full overflow-hidden shadow-ambient hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-surface-containerHighest overflow-hidden">
                  <img
                    src={boysWinterImg}
                    alt="Boys winter uniform"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-2 block">Boys · Winter</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">Cold Weather Addition</h3>
                  <ul className="space-y-2">
                    {['Sweater', 'Coat/Blazer', 'Same shirt, trouser & tie', 'Black shoes'].map((piece) => (
                      <li key={piece} className="flex gap-3 text-text-variant text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Girls Winter */}
            <motion.div variants={fadeInUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <Card className="h-full overflow-hidden shadow-ambient hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-surface-containerHighest overflow-hidden">
                  <img
                    src={girlsWinterImg}
                    alt="Girls winter uniform"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-2 block">Girls · Winter</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">Cold Weather Addition</h3>
                  <ul className="space-y-2">
                    {['Sweater', 'Coat', 'Same shalwar kameez & shawl', 'Black shoes'].map((piece) => (
                      <li key={piece} className="flex gap-3 text-text-variant text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.p variants={fadeInUp} className="text-center text-text-variant text-sm">
            Uniform items can be purchased through the school office. Please contact administration for sizing and availability.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}