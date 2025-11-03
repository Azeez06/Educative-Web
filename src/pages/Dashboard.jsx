import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#00284e] text-[#e5e7eb] p-6 space-y-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-[#00c8ff]">Academy</h1>

        <nav className="flex flex-col space-y-3">
          <Link to="/dashboard" className="hover:bg-[#004078] rounded-md px-3 py-2 transition flex items-center">
            🏠 Dashboard
          </Link>

          <Link to="/courses" className="hover:bg-[#004078] rounded-md px-3 py-2 transition flex items-center">
            📚 My Courses
          </Link>

          <a href="#" className="hover:bg-[#004078] rounded-md px-3 py-2 transition flex items-center">
            👥 Community
          </a>

          <a href="#" className="hover:bg-[#004078] rounded-md px-3 py-2 transition flex items-center">
            🏆 Leaderboard
          </a>

          <a href="#" className="hover:bg-[#004078] rounded-md px-3 py-2 transition flex items-center">
            ⚙️ Settings
          </a>
        </nav>

        <div className="mt-auto">
          <button className="bg-[#00c8ff] text-[#00284e] w-full py-2 rounded-lg font-semibold hover:bg-[#00a8e0] transition">
            Logout
          </button>
        </div>
      </aside>

  

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-semibold text-[#00284e]">
            Welcome, Learner 👋
          </h2>
        </header>

        {/* Main Area */}
        <main className="p-6 space-y-8">
          {/* Motivational Banner */}
          <section className="bg-gradient-to-r from-[#00284e] to-[#004078] text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Keep Learning, Keep Growing 🚀
            </h2>
            <p className="text-sm opacity-90">
              Every class you attend brings you closer to mastery. Stay curious, stay consistent.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Courses Enrolled", value: 6 },
              { title: "Average Progress", value: "68%" },
              { title: "Upcoming Class", value: "Tomorrow, 10 AM" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-5 border-l-4 border-[#00c8ff]"
              >
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold text-[#00284e] mt-2">
                  {stat.value}
                </p>
              </div>
            ))}
          </section>

          {/* Middle Boxes */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Leaderboard */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold text-[#00284e] mb-3">
                🏆 Most Gifted Students
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Fatima Bello — 98%</li>
                <li>2. Musa Abdullahi — 94%</li>
                <li>3. Maryam Lawal — 92%</li>
                <li>4. Azeez Sulaiman — 89%</li>
              </ul>
            </div>

            {/* Connect Box */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold text-[#00284e] mb-3">
                💬 Connect with Peers
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join discussions with students who share your interests and goals.
              </p>
              <button className="bg-[#00c8ff] text-[#00284e] w-full py-2 rounded-full font-semibold hover:bg-[#00a8e0] transition">
                Join Community
              </button>
            </div>

            {/* Upcoming Class */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold text-[#00284e] mb-3">
                📅 Upcoming Class
              </h3>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Course:</strong> Website Development
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Date:</strong> Tomorrow, 10 AM
              </p>
              <p className="text-gray-700 text-sm mb-4">
                <strong>Instructor:</strong> Dr. Ibrahim
              </p>
              <button className="bg-[#00c8ff] text-[#00284e] w-full py-2 rounded-full font-semibold hover:bg-[#00a8e0] transition">
                View Details
              </button>
            </div>
          </section>

          {/* Learning Progress */}
          <section className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-[#00284e] mb-4">
              📈 Learning Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              {[
                { name: "Mass Communication 302", progress: 75 },
                { name: "Advertising Strategy", progress: 50 },
                { name: "Media Law & Ethics", progress: 35 },
              ].map((course, i) => (
                <div key={i} className="p-4 border rounded-xl">
                  <h4 className="font-medium">{course.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#00c8ff] h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1 text-gray-500">
                    {course.progress}% completed
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Announcements & Assignments */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Announcements */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-[#00284e] mb-3">
                📢 Recent Announcements
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong>📘 PR Practice:</strong> New reading materials uploaded for Week 5.
                </li>
                <li>
                  <strong>🕒 Media Ethics:</strong> Quiz deadline extended to next Monday.
                </li>
                <li>
                  <strong>🎓 General Notice:</strong> Mid-semester break begins November 10.
                </li>
              </ul>
            </div>

            {/* Assignments Due */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-[#00284e] mb-3">
                📝 Assignments Due Soon
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Technical Writing:</strong> Case study submission — <span className="text-red-500">Nov 4</span>
                </li>
                <li>
                  <strong>Advertising Strategy:</strong> Group project report — <span className="text-red-500">Nov 7</span>
                </li>
                <li>
                  <strong>Advance Web Development:</strong> Presentation slides — <span className="text-red-500">Nov 9</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Account Settings Shortcut */}
          <section className="bg-gradient-to-r from-[#00284e] to-[#004078] text-white rounded-2xl p-6 shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                ⚙️ Manage Your Account
              </h3>
              <p className="text-sm opacity-90">
                Update your profile, change password, or adjust preferences easily.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#00c8ff] text-[#00284e] px-5 py-2 rounded-full font-semibold hover:bg-[#00a8e0] transition"
            >
              Go to Settings
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
