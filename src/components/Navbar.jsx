import React from "react";

export default function Navbar(){
  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-teal-400 to-yellow-400 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Azeez Learn</h1>
            <p className="text-xs text-muted-foreground">Inspire • Learn • Apply</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-teal-600 transition">Explore</a>
          <a className="hover:text-teal-600 transition">Submissions</a>
          <a className="hover:text-teal-600 transition">Groups</a>
          <a className="hover:text-teal-600 transition">Certificates</a>
          <button className="ml-4 px-4 py-2 rounded-md btn-accent shadow">Get Started</button>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 rounded-md bg-white shadow">Menu</button>
        </div>
      </div>
    </header>
  );
}
