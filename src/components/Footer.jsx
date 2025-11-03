import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white/60 mt-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold">Azeez Learn</h4>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} — Inspiring learners.</p>
        </div>
        <div className="text-sm text-gray-600">
          <span className="mr-4">Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
