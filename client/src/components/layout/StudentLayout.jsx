
import { Link, Outlet, useLocation } from 'react-router-dom'
import { LayoutDashboard, FolderOpen, ClipboardList, Settings, LogOut } from 'lucide-react'

function StudentLayout() {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
    { name: 'Projects', path: '/student/projects', icon: FolderOpen },
    { name: 'My Requests', path: '/student/requests', icon: ClipboardList },
    { name: 'Settings', path: '/student/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-[#F7F3ED]">
      <header className="bg-[#F7F3ED] border-b border-[#E9E5DC] px-8 py-5 flex justify-between items-center">
        <Link to="/student" className="font-semibold tracking-wide text-[#285744]">
          STUDENT PROJECTS
        </Link>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm pb-1 border-b-2 ${
                  active
                    ? 'text-[#285744] border-[#285744]'
                    : 'text-[#555B53] border-transparent hover:text-[#285744]'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/login"
          className="text-sm border border-[#789382] text-[#285744] px-5 py-2 rounded-lg hover:bg-white"
        >
          Log Out
        </Link>
      </header>

      <main className="max-w-[1250px] mx-auto px-8 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default StudentLayout
