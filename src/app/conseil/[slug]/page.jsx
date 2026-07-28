import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import services from "../data"; 
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: "conseil-fiscal", 
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const slugMapping = {
    "conseil-fiscal": "exceltax-fiscalite",
  };

  const targetSlug = slugMapping[slug] || slug;
  const service = services.find((s) => s.slug === targetSlug);

  if (!service) {
    notFound();
  }

  const aboutSection = service.sections.find((s) => s.highlights);
  const servicesSection = service.sections.find((s) => s.services);
  const processSection = service.sections.find((s) => s.steps);
  const benefitsSection = service.sections.find((s) => s.benefits);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-[#404040]">
        
        {/* --- HERO SECTION --- */}
        <section className="relative bg-[#183B63] text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-[#F68B2D] font-semibold tracking-wide uppercase text-sm">
                  {service.hero.title}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
                  {service.hero.subtitle}
                </h1>
                <p className="text-lg text-[#EEF2F5]/80 leading-relaxed">
                  {service.hero.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {service.hero.buttons.map((btn, index) => (
                    <Link
                      key={index}
                      href={btn.link}
                      className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
                        index === 0
                          ? "bg-[#2E5D8A] hover:bg-[#183B63] text-white shadow-lg"
                          : "bg-[#183B63] hover:bg-[#2E5D8A] text-[#EEF2F5] border border-[#2E5D8A]"
                      }`}
                    >
                      {btn.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-2xl border border-[#2E5D8A]/40">
                <Image
                  src={service.hero.image}
                  alt={service.hero.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT / HIGHLIGHTS SECTION --- */}
        {aboutSection && (
          <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-lg border border-[#EEF2F5]">
                <Image
                  src={aboutSection.image || "/images/placeholder.jpg"}
                  alt={aboutSection.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#183B63] tracking-tight">
                  {aboutSection.title}
                </h2>
                <p className="text-[#404040] leading-relaxed">
                  {aboutSection.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {aboutSection.highlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-[#EEF2F5] p-3 rounded-lg border border-[#A9B4C0]/30"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#F68B2D]" />
                      <span className="text-sm font-medium text-[#183B63]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <hr className="border-[#EEF2F5]" />

        {/* --- SERVICES GRID SECTION WITH HOVER EFFECT --- */}
        {servicesSection && (
          <section className="py-16 lg:py-24 bg-[#EEF2F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl font-bold text-[#183B63] tracking-tight">
                  {servicesSection.title}
                </h2>
                <p className="text-[#404040] text-lg">
                  {servicesSection.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesSection.services?.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-sm border border-[#A9B4C0]/30 hover:shadow-xl hover:border-[#2E5D8A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Gradient Accent Bar on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F68B2D] to-[#2E5D8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-[#F68B2D] text-lg group-hover:translate-x-1 transition-transform duration-200">
                          ▶
                        </span>
                        <h3 className="text-xl font-bold text-[#183B63] group-hover:text-[#2E5D8A] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#404040] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- WORKING PROCESS SECTION --- */}
        {processSection && (
          <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold text-[#183B63] tracking-tight">
                {processSection.title}
              </h2>
              <p className="text-[#404040] text-lg">
                {processSection.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSection.steps?.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-[#EEF2F5] shadow-sm relative flex flex-col space-y-4 hover:border-[#2E5D8A] transition-colors"
                >
                  <span className="text-4xl font-extrabold text-[#F68B2D]/30">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#183B63]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- WHY TRUST US & CTA SECTION WITH BACKGROUND IMAGE --- */}
        {benefitsSection && (
          <section className="relative text-white py-16 lg:py-24 overflow-hidden bg-[#183B63]">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero.webp"
                alt="Background"
                fill
                className="object-cover object-center opacity-25"
              />
              <div className="absolute inset-0 " />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 mb-10">
              <div className=" gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    {benefitsSection.title}
                  </h2>
                  <p className="text-[#EEF2F5]/90 leading-relaxed">
                    {benefitsSection.description}
                  </p>
                </div>
                <div className="flex  flex-col gap-4">
                  {benefitsSection.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-[#183B63]/60 backdrop-blur-sm p-4"
                    >
                      <svg
                        className="h-5 w-5 text-[#F68B2D] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#EEF2F5] font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              {benefitsSection.cta && (
                <div className="bg-[#2E5D8A]/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-[#F68B2D]/30">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {benefitsSection.cta.title}
                  </h3>
                  <p className="text-[#EEF2F5] max-w-2xl mx-auto text-base sm:text-lg">
                    {benefitsSection.cta.description}
                  </p>
                  <div>
                    <Link
                      href={benefitsSection.cta.buttonLink}
                      className="inline-block bg-white text-[#183B63] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#EEF2F5] transition duration-200"
                    >
                      {benefitsSection.cta.buttonText}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}