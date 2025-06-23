"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

// Add this to your CSS or global stylesheet
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

const servicesData = [
   {
    id: 1,
    category: "Web App",
    image: "/images/portfolio/port2.png",
    title: "Childern Cherrity Funds",
    description: "is a donation based charity website I built to support underprivileged children, featuring secure payment integration (Stripe & PayPal) for seamless contributions. The responsive design ensures accessibility across devices, while a dynamic dashboard allows donors to track their impact. I developed both frontend and backend, prioritizing transparency and ease of use to encourage more donations. The goal was to create a trustworthy platform where generosity meets technology for a meaningful cause.",
    technologies: ["Wordpess", "Web App", "PHP"],
    link: "https://www.savethechildren.org/",
  },
   {
    id: 2,
    category: "LMS",
    image: "/images/portfolio/port1.png",
    title: "Institute of Health Care",
    description: "I developed an educational healthcare website for a client to provide reliable medication information to patients and caregivers. The platform features drug databases, dosage guidelines, side effect information, and interactive learning tools. I implemented user authentication, responsive design for mobile access, and content management for medical professionals. The project enhanced medication safety awareness while complying with healthcare data privacy standards.",
    technologies: ["LMS", "WordPress", "PHP"],
    link: "https://www.ihi.org/",
  },
  {
    id: 3,
    category: "LMS",
    image: "/images/portfolio/1.jpg",
    title: "LMS Website for Medical Courses",
    description:
      "Developed a LearnDash-based LMS website tailored for doctors to access structured courses, quizzes, and certifications. The platform ensures seamless course delivery, user-friendly navigation, and secure payment integration.",
    technologies: ["LearnDash", "WordPress", "PHP"],
    link: "https://learnmrcs.com",
  },
  {
    id: 4,
    category: "Business",
    image: "/images/portfolio/2.jpg",
    title: "Business Website Development",
    description:
      "Designed and developed a responsive, modern website for Digitize Planet to professionally showcase their services. The site enhances customer engagement and strengthens the client’s online presence.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://digitizingplanet.net",
  },
  {
    id: 5,
    category: "Business",
    image: "/images/portfolio/3.jpg",
    title: "MA Fitness Club, Static Business Website",
    description:
      "Designed a static website for MA Fitness Club with a modern, responsive UI to professionally showcase their services. The site focuses purely on presentation, without dynamic features, tailored for a sleek user experience.",
    technologies: ["HTML", "CSS"],
    link: "https://mafitnessclub.netlify.app",
  },
  {
    id: 6,
    category: "Business",
    image: "/images/portfolio/4.jpg",
    title: "My Fondue Static Website for Swiss Client",
    description:
      "Designed and developed a clean, content-based static website named My Fondue for a Swiss client. Focused on modern UI and structured presentation to highlight key information. The site excludes dynamic features and serves purely for informational display.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://www.myfondue.shop",
  },
  {
    id: 7,
    category: "Marketing",
    image: "/images/portfolio/5.png",
    title: "Premier Digital Marketing Agency",
    description:
      "We help businesses grow with powerful, customized digital marketing strategies. From SEO to social media, our expert team ensures maximum online visibility. Boost your brand and reach the right audience effectively.",
    technologies: ["SEO", "Social Media"],
    link: "https://brandigz.com/",
  },
  {
    id: 8,
    category: "Web App",
    image: "/images/portfolio/61.jpg",
    title: "EConsultancy Network Website with University Suggestions and Chatbot",
    description:
      "Developed a website that recommends universities based on filters like country, IELTS, GPA, and budget using APIs. Integrated a custom-trained chatbot to answer user queries with relevant information, enhancing the user experience.",
    technologies: ["React", "Node.js", "Chatbot AI"],
    link: "https://fyp-frontend1.onrender.com/home",
  },
  {
    id: 9,
    category: "API",
    image: "/images/portfolio/71.jpg",
    title: "Scalable API Monetization and Analytics Platform for Zong",
    description:
      "Developed a robust API monetization and analytics platform for Zong featuring automated billing, subscription management, and real-time usage tracking. Integrated with WSO2 DevPortal and powered by ELK Kibana, it offers detailed insights and advanced filtering to optimize API services.",
    technologies: ["Node.js", "WSO2", "ELK Stack"],
    link: "https://your-edu-link.com",
  },
  {
    id: 10,
    category: "Business",
    image: "/images/portfolio/8.png",
    title: "Hunts Taxis Cab Servicing in the UK",
    description:
      "Provides reliable and professional cab servicing solutions across the UK under the Hunts Taxis brand. Focused on timely, safe, and comfortable rides for all customers with easy booking options and excellent customer support.",
    technologies: ["React", "Express"],
    link: "https://huntstaxis.co.uk/",
  },
  {
    id: 11,
    category: "Business",
    image: "/images/portfolio/9.jpg",
    title: "Professional Website for Printing & Embroidery BusinessSite",
    description:
      "Created a responsive website for printing and embroidery services featuring custom designs and fabric options. The platform offers an easy-to-use interface, enhancing brand visibility. It ensures a smooth browsing and ordering experience for customers.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://brandigz.com/",
  },
];

const categories = ["All", "LMS", "Business", "Marketing", "Web App", "API"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <section
      id="services"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 font-poppins"
    >
      <div className="pt-20 container mx-auto px-4">
        <SectionTitle
          title="Discover Our Digital Creations"
          paragraph="A refined portfolio of meaningful projects demonstrating my strength in design thinking and full-stack development."
          center
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 font-poppins ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 dark:bg-dark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4 rounded-lg text-center">
                  <p className="mb-4 text-sm font-poppins">{service.description.slice(0, 90)}...</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition font-poppins"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-3 font-poppins">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5 font-poppins">
                {service.description}
              </p>
              {/* Technologies Tags */}
              <div className="mb-5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-2 font-poppins"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <section className="mt-24 bg-gray-50 dark:bg-gray-900 py-16 rounded-lg shadow-lg max-w-6xl mx-auto px-6 font-poppins">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-white font-poppins">
            What Clients Say
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <blockquote className="p-6 bg-white dark:bg-gray-800 rounded shadow">
              <p className="mb-4 text-gray-700 dark:text-gray-300 italic font-poppins">
                Outstanding work on our LMS project — very professional and reliable!
              </p>
              <footer className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">
                — Dr. Farhad, LearnDash Client
              </footer>
            </blockquote>
            <blockquote className="p-6 bg-white dark:bg-gray-800 rounded shadow">
              <p className="mb-4 text-gray-700 dark:text-gray-300 italic font-poppins">
                The digital marketing site helped us grow our online presence tremendously.
              </p>
              <footer className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">
                — Ahmed Khan, Brandigz
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Call To Action */}
        <section className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white max-w-4xl mx-auto font-poppins">
          <h2 className="text-3xl font-bold mb-6 font-poppins">
            Interested in working together?
          </h2>
          <p className="mb-8 max-w-xl mx-auto font-poppins">
            Lets create amazing digital experiences. Contact me to discuss your project and bring your ideas to life!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition font-poppins"
          >
            Get In Touch
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;