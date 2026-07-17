import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Tag, X, ArrowRight, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';

// Using an atmospheric background image for the News Hero to match StudentLife
import heroImage from '../assets/images/hero/5.jpeg';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // 0-indexed layout mapping StudentLife
  const articlesPerPage = 9; // Display 9 news stories at a time

  const newsArticles = [
    {
      id: 1,
      title: 'Pen & Page Wins National Science Olympiad',
      date: 'October 15, 2026',
      category: 'Achievement',
      excerpt: 'Our Grade 10 team secured the first position at the prestigious National Science Olympiad held last weekend.',
      content: 'We are incredibly proud to announce that our Grade 10 team clinched the 1st position overall at the prestigious National Science Olympiad. Over 50 top schools participated in rigorous rounds testing physics, chemistry, and experimental biology. The team, spearheaded by our dedicated science faculty, stood out for their innovative project on sustainable urban water filtration systems. This victory is a testament to the hard work, curiosity, and scientific rigor of our student community.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Annual Winter Charity Drive Announced',
      date: 'October 10, 2026',
      category: 'Community',
      excerpt: 'Join us in our annual initiative to collect warm clothes and essential items for the local community shelter.',
      content: 'As the temperatures drop, our commitment to giving back grows stronger. Pen & Page is officially launching its Annual Winter Charity Drive. Starting next Monday, collection bins will be set up near the main school entrance for warm clothing, durable blankets, non-perishable food items, and educational kits. All items collected will be distributed in partnership with the central City Shelter network. Let’s come together to make this winter warm and comfortable for everyone in our community.',
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'New Robotics Lab Inauguration',
      date: 'September 28, 2026',
      category: 'Academics',
      excerpt: 'Equipped with the latest STEM tools, our new robotics lab was officially opened by the Mayor today.',
      content: 'Our STEM landscape took a giant leap forward today with the formal opening of our state-of-the-art Robotics Lab. Ribbon-cut by the City Mayor, the space is fully equipped with advanced 3D printers, modular robotic kits, physical computing devices, and specialized high-performance workstations. This space will host our primary computer science curriculums, elective robotics tracks, and the competitive coding league starting next month.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Parent-Teacher Meeting Schedule',
      date: 'September 20, 2026',
      category: 'Announcements',
      excerpt: 'The term 1 PTM is scheduled for next Friday. Please check the portal to book your individual slots.',
      content: 'A strong school-parent relationship is fundamental to student success. The Term 1 Parent-Teacher Consultations are set to happen next Friday from 9:00 AM to 4:00 PM. Parents can now log onto the digital Parent Portal to view and reserve individual 15-minute consultation slots with class mentors and subject specialists. We highly encourage you to read through your child’s self-reflection logs on the portal ahead of the meeting.',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Alumni Network Launches Mentorship Program',
      date: 'September 12, 2026',
      category: 'Community',
      excerpt: 'Connect with successful Pen & Page alumni across the globe through our new digital mentorship platform.',
      content: 'We are thrilled to unveil our new global Digital Mentorship program connecting active Senior students with our brilliant alumni. Operating across diverse sectors—such as Technology, Arts, Medicine, and Public Policy—mentors will guide current students through college applications, career selection, and internship opportunities. Sign-ups are officially live for seniors via their student emails.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'School Play: Shakespeare in the Park',
      date: 'September 05, 2026',
      category: 'Arts & Culture',
      excerpt: 'Tickets are now on sale for the Drama Club’s highly anticipated outdoor production of A Midsummer Night’s Dream.',
      content: 'Get ready for an enchanting evening under the stars! The Pen & Page Drama Guild proudly presents this year’s theatrical production, Shakespeare’s "A Midsummer Night’s Dream," adapted for an outdoor forest amphitheater experience on our East Lawn. Tickets are limited and are available now at the administrative block. Pack a picnic blanket and prepare to be mesmerized by our exceptionally talented cast and crew!',
      img: 'https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=800&auto=format&fit=crop'
    },
    // Adding 15 additional unique news stories to support pagination display logic
    {
      id: 7,
      title: 'Creative Writing Workshop Series Starts',
      date: 'August 30, 2026',
      category: 'Academics',
      excerpt: 'Acclaimed authors join our literature department to run an intensive creative fiction bootcamp for senior students.',
      content: 'Our literature division has organized a month-long intensive creative fiction bootcamp starting next Tuesday. Two award-winning novelists will lead interactive seminars detailing story architecture, character development, and editorial refinement.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 8,
      title: 'Varsity Basketball Team Secures Regional Cup',
      date: 'August 24, 2026',
      category: 'Achievement',
      excerpt: 'An incredible fourth-quarter comeback led our team to a decisive victory in the regional tournament finals.',
      content: 'The Pen & Page Falcons clinched the regional championship cup after a thrilling encounter last night. Down by 8 points entering the final quadrant, superb tactical execution and team defense drove a magnificent 18-4 scoring run to secure the trophy.',
      img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 9,
      title: 'Campus Solar Energy Transition Complete',
      date: 'August 18, 2026',
      category: 'Announcements',
      excerpt: 'Infrastructure milestones reached as the secondary academic block transitions entirely to renewable solar cells.',
      content: 'As part of our ecological campus mandate, engineering operations have finalized mounting photovolatic grids on our main school blocks. This clean setup will safely power our climate control networks and lab grids, lowering net utility carbon footprints by nearly 40%.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 10,
      title: 'Annual Art Exhibition Open Call',
      date: 'August 11, 2026',
      category: 'Arts & Culture',
      excerpt: 'Submissions are officially open for the upcoming annual fall creative arts exhibition and display gallery.',
      content: 'The fine arts gallery committee is inviting original student submissions for our winter retrospective exhibition. Mixed media paintings, physical pottery pieces, architecture design scale mockups, and conceptual digital vector art formats are welcomed before next Friday.',
      img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 11,
      title: 'Debate Club Dominates Interschool Invitational',
      date: 'August 03, 2026',
      category: 'Achievement',
      excerpt: 'Our speaking delegates achieved comprehensive clean sweeps across both policy and impromptu modules.',
      content: 'Outstanding performances highlighted the regional debate matches as our elite speech core won maximum speaker honors. Topics explored complex public administration ethical dilemmas and contemporary global market dynamics structures.',
      img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 12,
      title: 'Student Council Nominations Open',
      date: 'July 28, 2026',
      category: 'Announcements',
      excerpt: 'Active application slots are now officially open for the upcoming campus governance council elections.',
      content: 'Leadership portfolios are currently accessible for grade levels 10 and 11. Prospective student candidates can retrieve administrative request packs and campaign structural regulations via the central student council portal before final ballot locks.',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 13,
      title: 'New Modern Languages Track Introduced',
      date: 'July 20, 2026',
      category: 'Academics',
      excerpt: 'Curriculum expansions launch advanced interactive conversational electives for regional conversational levels.',
      content: 'Beginning this coming dynamic autumn semester, our humanities cluster will offer certified advanced communicative frameworks in both Mandarin and conversational French, featuring direct cloud connections with sister global colleges.',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 14,
      title: 'Music Department Receives Grand Piano Donation',
      date: 'July 14, 2026',
      category: 'Arts & Culture',
      excerpt: 'Generous foundational grants allow the purchase of concert-grade studio instruments for the performance hall.',
      content: 'The campus theater collective is exceptionally pleased to acknowledge an anonymous philanthropic instrument allocation. This incredible asset upgrades our performance auditorium setup for live recital exams and classic musical ensembles.',
      img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 15,
      title: 'Community Health Awareness Seminars Set',
      date: 'July 05, 2026',
      category: 'Community',
      excerpt: 'Regional medical researchers join us next week to present on mental resilience, dietetics, and lifestyle habits.',
      content: 'In collaboration with city health partners, a series of weekend public health seminars will touch upon stress optimization, youthful nutrition requirements, and advanced cognitive wellness paradigms for students and parents alike.',
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 16,
      title: 'Ecology Club Mini-Forest Project Validated',
      date: 'June 29, 2026',
      category: 'Community',
      excerpt: 'Our student biodiversity task force receives environmental micro-grants to build an endemic micro-forest.',
      content: 'A dedicated eco-consortium has received city development approval to construct an urban bio-diverse zone on our southern property boundaries, protecting localized insect habitats and promoting native microclimates.',
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 17,
      title: 'Math Olympiad Training Squad Selected',
      date: 'June 22, 2026',
      category: 'Academics',
      excerpt: 'Following grueling elimination testing phases, our elite numerical analysis squad enters final selection states.',
      content: 'Our senior mathematical society has completed their initial evaluation runs. Selected participants will undergo intensive coaching tracks involving multi-variable optimization problems and advanced probabilistic logic proofs.',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 18,
      title: 'Photography Club Autumn Tour Finalized',
      date: 'June 15, 2026',
      category: 'Arts & Culture',
      excerpt: 'Visual communication groups schedule expedition workshops across regional national mountain reserves.',
      content: 'An incredible multi-day creative itinerary has been approved for landscape photography members. Students will explore golden hour tracking, manual focus controls, and advanced digital RAW processing frameworks out in the field.',
      img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 19,
      title: 'Annual Campus Upgrade Masterplan Shared',
      date: 'June 08, 2026',
      category: 'Announcements',
      excerpt: 'Development blueprints reveal upcoming comprehensive upgrades to our central athletic fields and indoor tracks.',
      content: 'Administrative real estate updates indicate a total renovation layout for the main sport courts. New weather-resistant artificial grass arrays and specialized modern track rubber compounds will be deployed before winter phases.',
      img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 20,
      title: 'Chess Grandmaster Hosts School Simultaneous Exhibition',
      date: 'June 01, 2026',
      category: 'Achievement',
      excerpt: 'Twelve of our highest-rated tactical board players went head-to-head in an master-class exhibition.',
      content: 'An unforgettable tactical event occurred as an international chess grandmaster contested 12 top-tier campus chess members at the exact same time. Two senior board members managed to extract brilliant defensive draws.',
      img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 21,
      title: 'Alumni-Funded Science Scholarships Open',
      date: 'May 25, 2026',
      category: 'Academics',
      excerpt: 'New financial research funding pipelines launch for top performers entering university laboratory tracks.',
      content: 'In partnership with foundational science alumni groups, we are introducing targeted academic research grants. These financial packages support selected senior innovators pursuing collegiate laboratory specializations.',
      img: 'https://images.unsplash.com/photo-1440061805914-54f15ae979a8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // Pagination Logic matching StudentLife layout structure
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, startIndex + articlesPerPage);

  const handlePageNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
    }
  };

  const handlePagePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
    }
  };

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="bg-surface font-sans min-h-screen relative">
      {/* Immersive Hero Section */}
      <div className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pen & Page School news and events"
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
            Inside Pen & Page
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1]">
            News & Updates
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Stay informed with the latest announcements, monumental achievements, and community events from our campus.
          </p>
        </motion.div>
      </div>

      {/* Main Articles Grid Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="text-center md:text-left">
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
                Announcements
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Latest Campus Bulletins
              </h2>
            </div>

            {/* Pagination Controls synced with StudentLife layout design */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={handlePagePrev}
                  disabled={currentPage === 0}
                  className="p-2.5 rounded-full border border-border/20 text-primary hover:bg-primary/5 hover:border-primary/30 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Previous News Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-text-variant font-medium">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={handlePageNext}
                  disabled={currentPage === totalPages - 1}
                  className="p-2.5 rounded-full border border-border/20 text-primary hover:bg-primary/5 hover:border-primary/30 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                  aria-label="Next News Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Paginated Grid Animation Loop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="flex flex-col h-full group shadow-ambient hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                        {article.category}
                      </div>
                    </div>

                    <CardContent className="flex flex-col flex-grow p-6">
                      <div className="flex items-center gap-2 text-xs text-text-variant/70 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>

                      <h3
                        onClick={() => setSelectedArticle(article)}
                        className="font-serif text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary cursor-pointer transition-colors"
                      >
                        {article.title}
                      </h3>

                      <p className="text-text-variant text-sm mb-6 flex-grow leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="mt-auto">
                        <Button
                          variant="ghost"
                          onClick={() => setSelectedArticle(article)}
                          className="px-0 py-0 text-sm text-primary hover:text-secondary font-bold flex items-center gap-1 group/btn"
                        >
                          Read Full Story
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* POPUP MODAL (Read More) */}
      <AnimatePresence>
        {selectedArticle && (
          <React.Fragment key={selectedArticle.id}>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal Box Center Wrapper */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="bg-white w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 z-20 bg-black/50 text-white hover:bg-black/80 p-2 rounded-full transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Body Scroll Container */}
                <div className="overflow-y-auto">
                  <div className="h-64 md:h-80 w-full relative">
                    <img
                      src={selectedArticle.img}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Category in image header */}
                    <div className="absolute bottom-6 left-6 md:left-8">
                      <span className="bg-secondary text-primary text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                        {selectedArticle.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Meta Details */}
                    <div className="flex items-center gap-4 text-sm text-text-variant/70 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Newspaper className="w-4 h-4" />
                        <span>Pen & Page Editorial</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                      {selectedArticle.title}
                    </h2>

                    <hr className="border-border/30 mb-6" />

                    {/* Main Content Body */}
                    <div className="text-text-variant text-base md:text-lg leading-relaxed space-y-4">
                      <p className="font-semibold text-primary/95 text-lg">
                        {selectedArticle.excerpt}
                      </p>
                      <p className="text-text-variant/90">
                        {selectedArticle.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-border/10 bg-surface-containerLow flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2 bg-primary text-white hover:bg-primary/90 font-bold rounded shadow transition-colors"
                  >
                    Close Story
                  </button>
                </div>
              </motion.div>
            </div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}