import React, { useState } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const allCourses = [
    {
      title: "Web Design Fundamentals",
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      description:
        "Learn the basics of modern web design using HTML, CSS, and responsive layout techniques. Build sleek, mobile-friendly websites that look great on all devices.",
      link: "#/courses/web-design",
    },
    {
      title: "Data Science Essentials",
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Understand how to analyze, visualize, and interpret data using Python and common libraries. Perfect for beginners who want to explore data-driven problem-solving.",
      link: "#/courses/data-science",
    },
    {
      title: "Public Relations Practice",
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      description:
        "Master the principles of managing public image, crisis communication, and brand storytelling to build lasting trust and visibility.",
      link: "#/courses/public-relations",
    },
    {
      title: "Digital Marketing Strategy",
      duration: "7 Weeks",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop data-driven marketing campaigns using SEO, content, and social media strategies to engage digital audiences effectively.",
      link: "#/courses/digital-marketing",
    },
    {
      title: "Photography & Visual Storytelling",
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      description:
        "Learn to capture meaningful stories through your camera. Discover composition, lighting, and editing techniques that bring photos to life.",
      link: "#/courses/photography",
    },
    {
      title: "Artificial Intelligence Basics",
      duration: "4 Weeks",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      description:
        "Get started with AI by exploring machine learning concepts, neural networks, and simple models in an approachable, hands-on way.",
      link: "#/courses/ai-basics",
    },
    {
      title: "Content Writing & Storytelling",
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      description:
        "Build your writing voice and learn structure, clarity, and persuasive techniques for articles, blogs, and web copy.",
      link: "#/courses/content-writing",
    },
  ];

  const filtered = allCourses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Header & Search */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#00284e] mb-6">📚 Available Courses</h1>

        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#00c8ff] outline-none"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length ? (
            filtered.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col min-h-[460px] hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {/* Image taller */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-[#00284e] mb-2">{course.title}</h2>

                  <p className="text-sm text-gray-600 mb-4">⏳ {course.duration}</p>

                  <div className="flex-1">
                    {/* small preview of description (one short sentence) */}
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="text-[#00c8ff] font-medium hover:underline"
                    >
                      Learn more
                    </button>

                    <a
                      href={course.link}
                      className="inline-block bg-[#00c8ff] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#00a8e0] transition"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No courses found. Try another search.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div
            className="relative bg-white rounded-2xl shadow-lg max-w-xl w-full p-6 z-10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold text-[#00284e] mb-3">
              {selectedCourse.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">{selectedCourse.description}</p>

            <div className="flex justify-end gap-3">
              <a
                href={selectedCourse.link}
                className="bg-[#00c8ff] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#00a8e0] transition"
              >
                Go to course
              </a>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
