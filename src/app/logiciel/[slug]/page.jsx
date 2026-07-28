import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logiciel from "../data";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
// Optional: Generate static paths at build time for better performance
export async function generateStaticParams() {
  return logiciel.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const page = logiciel.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <>
    <Header/>
    <main className="min-h-screen bg-[#EEF2F5] text-[#404040]">
      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative overflow-hidden bg-[#183B63] text-white py-20 lg:py-28">
        {/* Background Image overlay (Only in the Hero Section) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={page.hero.image}
            alt={page.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-[#183B63]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center text-center">
          <div className="max-w-3xl space-y-6 flex flex-col items-center">
            <span className="inline-block bg-[#F68B2D]/10 text-[#F68B2D] font-semibold px-3 py-1 rounded-full text-sm border border-[#F68B2D]/25">
              {page.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {page.hero.title}
            </h1>
            <p className="text-xl text-[#F68B2D] font-medium">
              {page.hero.subtitle}
            </p>
            {/* <p className="text-[#A9B4C0] text-lg leading-relaxed">
              {page.hero.description}
            </p> */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href={page.hero.primaryButton.url}
                className="bg-[#F68B2D] hover:bg-[#e07a22] text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                {page.hero.primaryButton.text}
              </Link>
              <Link
                href={page.hero.secondaryButton.url}
                className="bg-[#2E5D8A] hover:bg-[#254c72] text-[#FFFFFF] border border-[#2E5D8A] font-medium px-6 py-3 rounded-xl transition-all"
              >
                {page.hero.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC SECTIONS --- */}
      {page.sections.map((section) => {
        switch (section.id) {
          case "overview":
            return (
              <section
                key={section.id}
                className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-[#183B63]">
                    {section.title}
                  </h2>
                  <p className="text-lg text-[#404040] leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                    {section.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center space-x-3 text-[#404040] font-medium bg-white p-3 rounded-xl border border-[#A9B4C0]/30 shadow-sm"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EEF2F5] text-[#2E5D8A] flex items-center justify-center text-xs font-bold border border-[#A9B4C0]/35">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );

          case "features":
            return (
              <section
                key={section.id}
                className="py-20 bg-[#FFFFFF] border-y border-[#A9B4C0]/20"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-[#183B63]">
                      {section.title}
                    </h2>
                    <p className="text-lg text-[#404040]">
                      {section.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.cards.map((card) => (
                      <div
                        key={card.title}
                        className="bg-[#EEF2F5] border border-[#A9B4C0]/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-3"
                      >
                        <h3 className="text-xl font-bold text-[#183B63]">
                          {card.title}
                        </h3>
                        <p className="text-[#404040] text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "benefits":
            return (
              <section
                key={section.id}
                className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-[#183B63]">
                    {section.title}
                  </h2>
                  <p className="text-lg text-[#404040]">
                    {section.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="bg-white border border-[#2E5D8A]/20 p-5 rounded-xl shadow-sm flex items-start space-x-3"
                    >
                      <span className="text-[#F68B2D] font-bold text-lg">
                        •
                      </span>
                      <span className="text-[#404040] font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "how-it-works":
            return (
              <section
                key={section.id}
                className="py-20 bg-[#183B63] text-white"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      {section.title}
                    </h2>
                    <p className="text-lg text-[#A9B4C0]">
                      {section.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.steps.map((step, idx) => (
                      <div
                        key={step.title}
                        className="bg-[#2E5D8A]/30 border border-[#2E5D8A] p-8 rounded-2xl space-y-4 relative"
                      >
                        <span className="absolute -top-4 left-6 bg-[#F68B2D] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow">
                          0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold pt-2 text-white">
                          {step.title}
                        </h3>
                        <p className="text-[#A9B4C0] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "why-us":
            return (
              <section
                key={section.id}
                className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="bg-gradient-to-br from-[#183B63] to-[#2E5D8A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      {section.title}
                    </h2>
                    <p className="text-[#A9B4C0] text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="bg-white/10 backdrop-blur border border-white/10 px-6 py-4 rounded-xl flex items-center space-x-3"
                      >
                        <span className="text-[#F68B2D] font-bold">✔</span>
                        <span className="font-medium text-[#FFFFFF]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "faq":
            return (
              <section
                key={section.id}
                className="py-20 bg-[#FFFFFF] border-t border-[#A9B4C0]/20"
              >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold tracking-tight text-[#183B63] text-center mb-12">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.items.map((item) => (
                      <div
                        key={item.question}
                        className="border border-[#A9B4C0]/30 rounded-2xl p-6 bg-[#EEF2F5] space-y-2"
                      >
                        <h3 className="text-lg font-bold text-[#183B63]">
                          {item.question}
                        </h3>
                        <p className="text-[#404040] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </main>
    <Footer/>
    </>
  );
}
