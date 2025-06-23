"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { FaLightbulb, FaTools, FaRocket, FaComments } from "react-icons/fa";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
    title: "Discover",
    desc: "We immerse ourselves in your vision, exploring goals, challenges, and the bigger picture.",
  },
  {
    icon: <FaComments className="text-blue-500 text-3xl" />,
    title: "Collaborate",
    desc: "Through deep discussions and feedback loops, we define a plan that reflects your voice.",
  },
  {
    icon: <FaTools className="text-green-500 text-3xl" />,
    title: "Build",
    desc: "We prototype quickly, iterate fast, and align each step with real-time input.",
  },
  {
    icon: <FaRocket className="text-purple-500 text-3xl" />,
    title: "Launch",
    desc: "Your product goes live with polish, performance, and purpose. Success is our mission.",
  },
];

const AboutSectionOne = () => {
  return (
    <section id="about" className="relative z-10 pt-16 md:pt-20 lg:pt-28 overflow-hidden bg-gradient-to-br from-[#f9fafb] to-[#ecf1f9] dark:from-[#0f172a] dark:to-[#1e293b]">
      {/* Decorative Circles */}
      <div className="absolute -top-10 left-10 h-[300px] w-[300px] rounded-full bg-primary opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 right-10 h-[200px] w-[200px] rounded-full bg-indigo-400 opacity-20 blur-2xl animate-spin-slow" />

      <div className="container">
        {/* Section 1: About */}
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Your Vision, Our Mission. Let’s Build the Future Together"
                paragraph="At NextHub Solutions, we turn ideas into powerful digital realities. From web development to 3D modeling, our expert team delivers smart, creative, and results-driven solutions. We blend innovation with strategy to help your brand stand out and grow."
                mb="44px"
              />
              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="End-to-End Digital Services" />
                    <List text="Creative & Strategic Thinking" />
                    <List text="Expert Team Across Domains" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Client-Focused Collaboration" />
                    <List text="Agile & Scalable Services" />
                    <List text="On-Time, On-Budget, On-Point" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Our Approach */}
          <div className="mt-20 text-center max-w-4xl mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-primary"
            >
              Our Approach
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-body-color leading-relaxed"
            >
              We believe every great product starts with a clear purpose and strong collaboration. At NextHub Solutions,
              we begin by deeply understanding your goals. From strategy and wireframes to design and code — our
              agile process ensures rapid delivery, client feedback, and a product that truly resonates with your audience.
            </motion.p>
          </div>

          {/* 4-Step Cards */}
          <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl p-8 transition duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-primary mt-24 mb-8"
          >
            Stack We Use
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "Adobe",
              "Illustrator",
              "Wordpress",
              "Custom Develpment",
              "ReactJS",
              "NodeJs",
              "MongoDB / SQL",
              "Docker / Git / Jenkins",
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-tr from-white to-gray-100 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg font-medium transition text-black dark:text-white"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
