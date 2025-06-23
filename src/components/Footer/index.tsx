"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
            <div className="-mt-10 max-w-[360px] lg:mb-16">
              <Link href="/" className="inline-block">
                <img
                  src="/images/logo/logo_light_theme.png"
                  alt="logo"
                  className="dark:hidden"
                  width={160}
                  height={50}
                />
                <img
                  src="/images/logo/logo_dark_theme.png"
                  alt="logo"
                  className="hidden dark:block"
                  width={160}
                  height={40}
                />
              </Link>
              <p className="mb-6 mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Nexthub Solutions is a creative tech company offering top-notch web design,
                development, and branding services to help you stand out.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-0">
                📞 +44 7960 600059
                <br />
                ✉️ info@nexthubsolutions.com
              </p>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Quick Links</h2>
              <ul>
                {["home", "about", "services", "portfolio"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link === "home" ? "" : link}`}
                      className="mb-3 inline-block capitalize text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Support</h2>
              <ul>
                <li>
                  <Link href="/faq" className="mb-3 inline-block text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="mb-3 inline-block text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="mb-3 inline-block text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="mb-3 inline-block text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Follow Us</h2>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <i className="fab fa-facebook-f mr-2"></i> Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition"
                  >
                    <i className="fab fa-instagram mr-2"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-500 transition"
                  >
                    <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nexthub Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
