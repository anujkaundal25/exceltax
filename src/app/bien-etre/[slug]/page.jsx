'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/component/ui/Header';
import Footer from '@/component/ui/Footer';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import bien from '../data'; // Adjust path based on your folder structure

export default function Page({ params }) {
    // Unwrapping params React hook style or direct usage for client components
    const { slug } = React.use(params);
    const data = bien.find((item) => item.slug === slug);

    // If data is not found, trigger Next.js 404 page
    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#EEF2F5] flex flex-col font-sans">
            <Header />

            <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-10">

                    {/* Editorial Header Card with Framer Motion Animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                        className="bg-[#183B63] rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden text-[#FFFFFF] group"
                    >
                        {/* Decorative background accent shape with hover glow */}
                        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#2E5D8A]/30 pointer-events-none blur-2xl group-hover:scale-125 transition-transform duration-700" />

                        <div className="relative z-10 space-y-4">
                            {data.key && (
                                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F68B2D] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider shadow-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] animate-pulse"></span>
                                    {data.key}
                                </div>
                            )}

                            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFFFF]">
                                {data.title}
                            </h1>

                            {data.dis && (
                                <p className="text-lg sm:text-xl text-[#EEF2F5]/90 max-w-2xl leading-relaxed pt-2">
                                    {data.dis}
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* Quick Metadata Info Cards Grid with Framer Motion Hover Effects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                            whileHover={{ y: -4, scale: 1.01 }} 
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-sm border border-[#A9B4C0]/20 flex items-start gap-4 transition-shadow hover:shadow-md cursor-pointer group"
                        >
                            <div className="p-3 bg-[#EEF2F5] rounded-xl text-[#2E5D8A] group-hover:bg-[#2E5D8A] group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#A9B4C0] uppercase tracking-wider">Category Type</h3>
                                <p className="text-base font-bold text-[#183B63] mt-1">{data.key || "General Article"}</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -4, scale: 1.01 }} 
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-sm border border-[#A9B4C0]/20 flex items-start gap-4 transition-shadow hover:shadow-md cursor-pointer group"
                        >
                            <div className="p-3 bg-[#EEF2F5] rounded-xl text-[#F68B2D] group-hover:bg-[#F68B2D] group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#A9B4C0] uppercase tracking-wider">Overview Status</h3>
                                <p className="text-base font-bold text-[#183B63] mt-1">Verified & Published</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Document-style Markdown Container with Embedded Card Components & Animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#FFFFFF] p-8 sm:p-16 rounded-3xl shadow-sm border border-[#A9B4C0]/20"
                    >
                        <div className="prose prose-lg max-w-none text-[#404040]">
                            <ReactMarkdown
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-3xl sm:text-4xl font-bold text-[#183B63] mt-10 mb-6 tracking-tight">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E5D8A] mt-12 mb-4 pb-3 border-b-2 border-[#EEF2F5]">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-xl sm:text-2xl font-semibold text-[#183B63] mt-8 mb-3">
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-lg leading-relaxed text-[#404040] mb-6">{children}</p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 pl-0 list-none">{children}</ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="bg-[#EEF2F5]/50 border border-[#A9B4C0]/20 p-4 rounded-xl text-[#404040] leading-relaxed flex items-start gap-3 m-0 hover:border-[#2E5D8A]/50 hover:bg-[#EEF2F5] transition-all duration-300">
                                            <span className="w-2 h-2 rounded-full bg-[#F68B2D] mt-2.5 flex-shrink-0"></span>
                                            <div>{children}</div>
                                        </li>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="space-y-4 my-6 pl-0 list-none">{children}</ol>
                                    ),
                                    strong: ({ children }) => (
                                        <strong className="font-bold text-[#2E5D8A]">{children}</strong>
                                    ),
                                    a: ({ href, children }) => (
                                        <a
                                            href={href}
                                            className="text-[#2E5D8A] font-semibold underline underline-offset-4 hover:text-[#F68B2D] transition-colors"
                                        >
                                            {children}
                                        </a>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-[#F68B2D] bg-[#EEF2F5] p-6 rounded-r-2xl my-8 italic text-[#183B63] shadow-sm hover:translate-x-1 transition-transform duration-300">
                                            {children}
                                        </blockquote>
                                    ),
                                    hr: () => (
                                        <hr className="my-10 border-[#EEF2F5]" />
                                    ),
                                }}
                            >
                                {data.content}
                            </ReactMarkdown>
                        </div>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}