import React from "react";

function Footer() {
  const quickLinks = [
    { name: "Accueil", url: "/" },
    { name: "Conseil", url: "/conseil" },
    { name: "EXSAFE", url: "/logiciel" },
    { name: "Education", url: "/education" },
    { name: "Téléprocédure", url: "/online-procedure" },
    { name: "JurisFISCAL", url: "/jurisfiscal" },
    { name: "Evènements", url: "/event" },
    { name: "BIEN ETRE", url: "/well-being" },
    { name: "A propos", url: "/about" },
  ];

  const services = [
    { label: "EXCELTAX Conseil", href: "#services" },
    { label: "EXCELTAX Logi", href: "#services" },
    { label: "EXCELTAX Edu", href: "#services" },
    { label: "EXCELT@X JuriFiscal", href: "#services" },
    { label: "EXCELT@X TéléProcédure", href: "#services" },
    { label: "EXCELT@X Recouv", href: "#services" },
  ];

  return (
    <footer className="bg-[#183B63] text-[#A9B4C0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img
              src="/new-logo.png"
              alt="EXCELTAX"
              className="bg-[#FFFFFF] p-2 h-20 mb-5 rounded-lg"
            />

            <p className="text-sm leading-7 text-[#A9B4C0]">
              Your trusted partner for digital tax, accounting, legal,
              administrative, payroll and business management solutions
              throughout the CEMAC region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="hover:text-[#F68B2D] transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-[#F68B2D] transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-[#F68B2D]">📍</span>
                <p className="text-[#A9B4C0]">
                  EXCELTAX-NGO NJOH Building
                  <br />
                  Carrefour BEN DECCA, PK12
                  <br />
                  Douala, Cameroon
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#F68B2D]">📞</span>
                <div>
                  <a
                    href="tel:+237652521717"
                    className="hover:text-[#FFFFFF] transition-colors block"
                  >
                    +237 652 521 717
                  </a>

                  <a
                    href="tel:+237656561508"
                    className="hover:text-[#FFFFFF] transition-colors block"
                  >
                    +237 656 561 508
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-[#F68B2D]">✉️</span>

                <div>
                  <a
                    href="mailto:direction@exceltax.org"
                    className="hover:text-[#FFFFFF] transition-colors block"
                  >
                    direction@exceltax.org
                  </a>

                  <a
                    href="mailto:cabinetexceltax@gmail.com"
                    className="hover:text-[#FFFFFF] transition-colors block"
                  >
                    cabinetexceltax@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#FFFFFF]/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A9B4C0]">
          <p>© {new Date().getFullYear()} EXCELTAX. All Rights Reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-[#FFFFFF] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;