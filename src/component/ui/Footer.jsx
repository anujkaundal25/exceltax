import React from "react";

function Footer() {
  const quickLinks = [
  { label: "Welcome", href: "/" },
  { label: "Advice", href: "/advice" },
  { label: "Exsafe", href: "/exsafe" },
  { label: "Education", href: "/education" },
  { label: "Online Procedure", href: "/online-procedure" },
  { label: "JurisFiscal", href: "/jurisfiscal" },
  { label: "Event", href: "/event" },
  { label: "Well-Being", href: "/well-being" },
  { label: "About", href: "/about" },
];

  const services = [
    { label: "EXCELTAX Conseil", href: "/" },
    { label: "EXCELTAX Logi", href: "/" },
    { label: "EXCELTAX Edu", href: "/" },
    { label: "EXCELT@X JuriFiscal", href: "/" },
    { label: "EXCELT@X TéléProcédure", href: "/" },
    { label: "EXCELT@X Recouv", href: "/" },
  ];

  return (
    <footer className="bg-[#0B1E3A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <img
              src="/logo.png"
              alt="EXCELTAX"
              className="bg-white p-2 h-20 mb-5 rounded-lg"
            />

            <p className="text-sm leading-7 text-gray-400">
              Your trusted partner for digital tax, accounting, legal,
              administrative, payroll and business management solutions
              throughout the CEMAC region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-[#F4B400] transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-[#F4B400] transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <span className="text-[#F4B400]">📍</span>
                <p>
                  EXCELTAX-NGO NJOH Building<br />
                  Carrefour BEN DECCA, PK12<br />
                  Douala, Cameroon
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#F4B400]">📞</span>
                <div>
                  <a
                    href="tel:+237652521717"
                    className="hover:text-white block"
                  >
                    +237 652 521 717
                  </a>

                  <a
                    href="tel:+237656561508"
                    className="hover:text-white block"
                  >
                    +237 656 561 508
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-[#F4B400]">✉️</span>

                <div>
                  <a
                    href="mailto:direction@exceltax.org"
                    className="hover:text-white block"
                  >
                    direction@exceltax.org
                  </a>

                  <a
                    href="mailto:cabinetexceltax@gmail.com"
                    className="hover:text-white block"
                  >
                    cabinetexceltax@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} EXCELTAX. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;