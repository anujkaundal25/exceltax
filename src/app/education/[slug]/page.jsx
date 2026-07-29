import React from "react";
import Header from '@/component/ui/Header';
import Footer from '@/component/ui/Footer';
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import education from "../data";

export default async function Page({ params }) {
  const { slug } = await params;

  const educations = education.find((item) => item.slug === slug);

  if (!educations) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#EEF2F5]">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-[#A9B4C0]/30 max-w-md w-full">
          <h1 className="text-2xl font-bold text-[#183B63] mb-2">Data Not Found</h1>
          <p className="text-[#404040]">The education page you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#EEF2F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Hero Section with Background Image, Title, and Description */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#A9B4C0]/30 overflow-hidden">
          <div className="relative w-full h-80 sm:h-96 bg-[#183B63] flex items-end">
            <Image
              src="/education/1.webp"
              alt="Education image"
              fill
              priority
              className="object-cover opacity-90 transition-transform duration-500 hover:scale-105"
            />
            {/* Gradient Overlay for high text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#183B63] via-[#183B63]/50 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-10 w-full text-white">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider bg-[#F68B2D] text-white rounded-full">
                {educations.key}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm mb-3">
                {educations.title}
              </h1>
              {educations.dis && (
                <p className="text-base sm:text-lg text-gray-200 line-clamp-2 max-w-2xl">
                  {educations.dis}
                </p>
              )}
            </div>
          </div>

          {/* Description Block */}
          {educations.dis && (
            <div className="px-8 sm:px-12 pt-8 pb-2">
              <p className="text-xl font-medium text-[#2E5D8A] leading-relaxed">
                {educations.dis}
              </p>
            </div>
          )}
        </div>

        {/* Markdown Content Container */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#A9B4C0]/30">
          <div className="prose prose-lg max-w-none text-[#404040]">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#183B63] mt-8 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E5D8A] mt-10 mb-4 border-l-4 border-[#F68B2D] pl-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg sm:text-xl font-semibold text-[#2E5D8A] mt-10 mb-4 border-l-4 border-[#F68B2D] pl-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-lg leading-8 text-[#404040] mb-5">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-3 mb-6 text-[#404040]">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 space-y-3 mb-6 text-[#404040]">{children}</ol>
                ),
                li: ({ children }) => <li className="text-[#404040]">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-bold text-[#2E5D8A]">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-[#2E5D8A] font-medium underline hover:text-[#F68B2D] transition-colors"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#2E5D8A] bg-[#EEF2F5] p-4 rounded-r-lg my-6 italic text-[#183B63]">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {educations.content}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}