import React from 'react';
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F5]">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl bg-[#FFFFFF] rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#183B63] mb-2">Receive personalized assistance</h2>
            <p className="text-[#404040]">
              Just a few steps are all it takes to be called back by an advisor.
            </p>
          </div>

          {/* Single Contact / Callback Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#404040] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 rounded-lg border border-[#A9B4C0] text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#2E5D8A] bg-[#FFFFFF]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#404040] mb-2">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Enter Number"
                className="w-full px-4 py-3 rounded-lg border border-[#A9B4C0] text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#2E5D8A] bg-[#FFFFFF]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#404040] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 rounded-lg border border-[#A9B4C0] text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#2E5D8A] bg-[#FFFFFF]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#404040] mb-2">
                How can we help you?
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe what you'd like to discuss..."
                className="w-full px-4 py-3 rounded-lg border border-[#A9B4C0] text-[#404040] focus:outline-none focus:ring-2 focus:ring-[#2E5D8A] bg-[#FFFFFF] resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-[#F68B2D] text-[#FFFFFF] font-semibold hover:bg-[#e07b23] transition-colors duration-200 shadow-md"
            >
              Request Callback
            </button>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;