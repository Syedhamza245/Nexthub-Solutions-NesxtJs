"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "49" : "449"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for startups and personal brands taking their first digital step."
          >
            <OfferList text="1 Static or Landing Page Website" status="active" />
            <OfferList text="Mobile-Responsive Layout" status="active" />
            <OfferList text="Basic On-Page SEO" status="active" />
            <OfferList text="Contact Form Setup" status="active" />

            <OfferList text="Hosting & Domain Setup Guidance" status="inactive" />
            <OfferList text="Monthly Tech Support" status="inactive" />
            <OfferList text="Social Media Integration" status="inactive" />
            <OfferList text="Content Writing" status="inactive" />
            <OfferList text="Performance Optimization	" status="inactive" />

          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "99" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="Up to 5 Custom Pages" status="active" />
            <OfferList text="Responsive & Modern UI/UX" status="active" />
            <OfferList text="On-Page SEO Optimization" status="active" />
            <OfferList text="2 Design Revisions" status="active" />
            <OfferList text="Hosting & Domain Assistance" status="active" />
            <OfferList text="Monthly Tech Support" status="active" />

            <OfferList text="Social Media Integration" status="inactive" />
            <OfferList text="Content Writing" status="inactive" />
            <OfferList text="Performance Optimization	" status="inactive" />


          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "199" : "1,899"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="Up to 10 Custom Pages" status="active" />
            <OfferList text="Premium UI/UX Design" status="active" />
            <OfferList text="Full SEO Setup (On-Page + Technical)" status="active" />
            <OfferList text="4 Design Revisions" status="active" />
            <OfferList text="Hosting & Domain Assistance" status="active" />
            <OfferList text="Performance & Speed Optimization" status="active" />
            <OfferList text="Monthly Analytics Reports" status="active" />
            <OfferList text="Social Media Integration" status="active" />
            <OfferList text="Content Writing" status="active" />

          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
