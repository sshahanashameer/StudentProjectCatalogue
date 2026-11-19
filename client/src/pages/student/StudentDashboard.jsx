
import { Link } from 'react-router-dom'
import {
  FolderOpen,
  ClipboardList,
  CheckCircle2,
  Clock3,
  ArrowRight,
  Search,
} from 'lucide-react'

const stats = [
  {
    label: 'Available Projects',
    value: '24',
    icon: FolderOpen,
  },
  {
    label: 'My Requests',
    value: '08',
    icon: ClipboardList,
  },
  {
    label: 'Approved',
    value: '05',
    icon: CheckCircle2,
  },
  {
    label: 'Pending',
    value: '03',
    icon: Clock3,
  },
]

const recentRequests = [
  {
    project: 'Campus Connect',
    date: '05 Nov 2026',
    status: 'Pending',
  },
  {
    project: 'Smart Vision',
    date: '04 Nov 2026',
    status: 'Approved',
  },
]

const projects = [
  {
    title: 'Campus Connect',
    category: 'Web Development',
    technologies: 'React, Node.js',
    description: 'A platform designed to connect students and campus communities.',
  },
  {
    title: 'Smart Vision',
    category: 'Artificial Intelligence',
    technologies: 'Python, OpenCV',
    description: 'An intelligent computer vision application.',
  },
]

function StudentDashboard() {
  return (
    <div className="space-y-7">

      {/* Welcome section */}
      <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-sm tracking-wide text-[#789182] font-medium">
            STUDENT DASHBOARD
          </p>
          <h1 className="text-3xl font-semibold text-[#285744] mt-2">
            Welcome back!
          </h1>
          <p className="text-sm text-[#777A73] mt-2">
            Explore projects, manage your requests and keep track of your progress.
          </p>
        </div>

        <Link
          to="/student/projects"
          className="inline-flex items-center justify-center gap-2 bg-[#285744] text-white px-5 py-3 rounded-lg text-sm hover:bg-[#204735] transition"
        >
          Explore Projects
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-[#EEEAE3] shadow-sm p-5"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#777A73]">{stat.label}</p>
                <Icon size={19} className="text-[#39765A]" />
              </div>

              <p className="text-3xl font-semibold text-[#285744] mt-4">
                {stat.value}
              </p>
            </div>
          )
        })}
      </section>

      {/* Main content */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Recent requests */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-[#EEEAE3] shadow-sm overflow-hidden">
          <div className="flex justify-between items-center px-6 py-5 border-b border-[#EEEAE3]">
            <h2 className="font-semibold text-[#303B33]">
              Recent Requests
            </h2>

            <Link
              to="/student/requests"
              className="text-sm text-[#39765A] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-[#92968D] bg-[#FAF9F6]">
                  <th className="px-6 py-4 font-medium">Project</th>
                  <th className="px-6 py-4 font-medium">Request Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentRequests.map((request) => (
                  <tr
                    key={request.project}
                    className="border-t border-[#F0EDE7]"
                  >
                    <td className="px-6 py-5 text-sm font-medium text-[#38453C]">
                      {request.project}
                    </td>

                    <td className="px-6 py-5 text-sm text-[#777A73]">
                      {request.date}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          request.status === 'Approved'
                            ? 'bg-[#E2F1E8] text-[#39765A]'
                            : 'bg-[#FFF1D8] text-[#986B24]'
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 border-t border-[#EEEAE3]">
            <Link
              to="/student/requests"
              className="text-sm font-medium text-[#39765A] hover:underline"
            >
              Manage my requests <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-[#285744] rounded-xl shadow-sm p-6 text-white flex flex-col">
          <h2 className="text-xl font-medium">Your Workspace</h2>
          <p className="text-sm text-white/75 mt-2">
            Continue exploring the student project catalogue.
          </p>

          <div className="space-y-3 mt-8">
            <Link
              to="/student/projects"
              className="flex items-center justify-between bg-[#F7F3ED] text-[#285744] rounded-lg px-4 py-3 text-sm hover:bg-white transition"
            >
              Browse Projects
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/student/requests"
              className="flex items-center justify-between bg-[#F7F3ED] text-[#285744] rounded-lg px-4 py-3 text-sm hover:bg-white transition"
            >
              Track Requests
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-auto pt-8">
            <p className="text-xs text-white/70">
              Discover something worth building.
            </p>
          </div>
        </div>
      </section>

      {/* Recently added projects */}
      <section className="bg-white rounded-xl border border-[#EEEAE3] shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#EEEAE3]">
          <div>
            <h2 className="font-semibold text-[#303B33]">
              Recently Added Projects
            </h2>
            <p className="text-xs text-[#92968D] mt-1">
              Discover the latest additions to the catalogue.
            </p>
          </div>

          <Link
            to="/student/projects"
            className="text-sm text-[#39765A] hover:underline"
          >
            Browse all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[#EEEAE3] rounded-lg p-5 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-[#35463B]">
                  {project.title}
                </h3>

                <FolderOpen size={19} className="text-[#39765A]" />
              </div>

              <p className="text-xs text-[#39765A] mt-2">
                {project.category}
              </p>

              <p className="text-sm text-[#777A73] mt-3 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-[#92968D] mt-4">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default StudentDashboard
