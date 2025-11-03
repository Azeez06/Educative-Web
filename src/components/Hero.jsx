import React from "react";

export default function Hero(){
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Empower your career with guided internships<br/>
          <span className="text-teal-600">— learn, submit, collaborate.</span>
        </h2>
        <p className="text-gray-600 max-w-xl">
          A focused platform for internship learning: take structured courses, upload real assignments, join project groups and earn certificates that show your work.
        </p>

        <div className="flex items-center gap-4">
          <a className="btn-accent px-6 py-3 rounded-lg font-medium shadow-lg">Start Your Internship</a>
          <a className="px-4 py-3 rounded-lg border border-gray-200 text-sm hover:bg-gray-100">How it works</a>
        </div>

        <div className="mt-6 flex gap-4">
          <div className="text-sm">
            <p className="font-semibold">Trusted by</p>
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
              <span className="px-3 py-1 bg-white card-glow rounded-md">ABU Zaria</span>
              <span className="px-3 py-1 bg-white card-glow rounded-md">Faculty Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white card-glow p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Course: Media Internship</h3>
              <p className="text-sm text-gray-600">Module 2 • Submission open</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-teal-600">2/8</p>
              <p className="text-xs text-gray-500">modules completed</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-400 to-yellow-400" style={{width: '25%'}}></div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-600">Next due: Project brief</span>
              <button className="px-3 py-1 rounded-md bg-teal-50 text-teal-600">Open</button>
            </div>
          </div>
        </div>

        <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-xl bg-gradient-to-br from-teal-100 to-yellow-100 opacity-80 blur-3xl transform rotate-12"></div>
      </div>
    </section>
  );
}
