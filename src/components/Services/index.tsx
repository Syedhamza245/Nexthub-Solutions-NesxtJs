"use client";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import { Code, Layout, Smartphone, Layers, Globe2, Cloud } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-cyan-400" />,
    title: "Web Development",
    description:
      "Responsive, secure, and scalable websites using React, Next.js, and Node.js.",
  },
  {
    icon: <Layout className="h-10 w-10 text-pink-400" />,
    title: "UI/UX Design",
    description:
      "Stunning and user-focused interfaces to elevate your product experience.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-green-400" />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps built with React Native and Flutter.",
  },
  {
    icon: <Layers className="h-10 w-10 text-yellow-400" />,
    title: "3D & Animation",
    description:
      "High-quality 3D assets and animation for games, architecture, and branding.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-blue-400" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud hosting, serverless apps, and DevOps pipelines.",
  },
  {
    icon: <Globe2 className="h-10 w-10 text-purple-400" />,
    title: "Digital Marketing",
    description:
      "SEO, PPC, and social media strategies that bring measurable growth.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-10 py-20 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* 🔮 Animated Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500 opacity-30 rounded-full blur-[100px] animate-pulse-fast" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Core Services"
          paragraph="We combine tech and creativity to build impactful digital experiences that elevate your brand."
          center
          mb="60px"
          textColor="text-white"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full px-4 md:w-1/2 lg:w-1/3 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative z-10 h-full rounded-2xl bg-white/10 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
