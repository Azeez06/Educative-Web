import React from "react";

const FeatureCard = ({title, text, icon}) => (
  <div className="p-6 bg-white card-glow rounded-xl hover:scale-105 transform transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-teal-300 to-yellow-300 text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{text}</p>
      </div>
    </div>
  </div>
);

export default function Features(){
  return (
    <section className="mt-12 mb-20">
      <h3 className="text-2xl font-semibold mb-6">What you get</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Structured Courses"
          text="Step-by-step modules focused on practical internship tasks."
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3"/></svg>}
        />
        <FeatureCard
          title="Submit Work"
          text="Upload assignments, get feedback and iterate."
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"/></svg>}
        />
        <FeatureCard
          title="Project Groups"
          text="Collaborate with peers and work on real projects."
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-4-4h-1"/></svg>}
        />
      </div>
    </section>
  );
}
