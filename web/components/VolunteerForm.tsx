// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Volunteer application form — shows a success state on submit; wire to Formspree for real delivery
"use client";
import { useState } from "react";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-heading font-bold text-green-800 text-2xl mb-2">Thank you!</h3>
        <p className="text-green-700">
          Your application has been received. Catherine Savell will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
      <h3 className="text-2xl font-heading font-bold text-[#1e3a5f] mb-1">
        Volunteer Application
      </h3>
      <p className="text-stone-500 text-sm mb-7">
        Please include the skills you would like to share and a short motivation statement.{" "}
        <span className="text-red-500">*</span> Required fields.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="First"
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#00209F] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Last"
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#00209F] transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#00209F] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">
            Skills & Motivation Statement <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={6}
            placeholder="Describe your skills and why you'd like to volunteer..."
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#00209F] transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00209F] hover:bg-blue-800 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-md text-base"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
