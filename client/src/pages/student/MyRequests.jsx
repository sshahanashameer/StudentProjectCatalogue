
import { useState } from 'react'
import { Search, CalendarDays, Eye } from 'lucide-react'

const requests = [
  {
    id: 'REQ-001',
    project: 'Campus Connect',
    category: 'Web Development',
    date: '05 Nov 2026',
    status: 'Pending',
    updated: 'Awaiting administrator review',
  },
  {
    id: 'REQ-002',
    project: 'Smart Vision',
    category: 'Artificial Intelligence',
    date: '04 Nov 2026',
    status: 'Approved',
    updated: 'Access granted',
  },
  {
    id: 'REQ-003',
    project: 'Autonomous Rover',
    category: 'Robotics',
    date: '02 Nov 2026',
    status: 'Rejected',
    updated: 'Project access not approved',
  },
]

const statusStyles = {
  Pending: 'bg-[#FFF1D8] text-[#986B24]',
  Approved: 'bg-[#E2F1E8] text-[#39765A]',
  Rejected: 'bg-[#F9E5E2] text-[#A34F45]',
}

function MyRequests() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All statuses')

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = request.project.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = filter === 'All statuses' || request.status === filter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-7">

      <section>
        <p className="text-sm text-[#6E8275] font-medium">STUDENT ACCOUNT</p>
        <h1 className="text-3xl font-semibold text-[#285744] mt-2">
          My Requests
        </h1>
        <p className="text-sm text-[#777A73] mt-2">
          View and track the status of your project access requests.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Requests', value: '03', color: 'text-[#315B4B]' },
          { label: 'Pending', value: '01', color: 'text-[#986B24]' },
          { label: 'Approved', value: '01', color: 'text-[#39765A]' },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl border border-[#EEEAE3] shadow-sm p-5">
            <p className="text-sm text-[#85877F]">{item.label}</p>
            <p className={`text-3xl font-semibold mt-2 ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-[#EEEAE3] overflow-hidden">

        <div className="p-5 md:p-6 border-b border-[#F0EDE7]">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#92968D]" />
              <input
                type="text"
                placeholder="Search by project name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-lg border border-[#DDDCD4] bg-[#FAF9F5] text-sm outline-none focus:border-[#789382]"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-11 px-4 rounded-lg border border-[#DDDCD4] bg-[#FAF9F5] text-sm text-[#555B53] outline-none focus:border-[#789382]"
            >
              <option>All statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[720px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-[#92968D] border-b border-[#EEEAE3]">
                <th className="px-6 py-4 font-medium">Project Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Request Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRequests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-[#F0EDE7] last:border-0 hover:bg-[#FCFBF8] transition"
                >
                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-[#38453C]">{request.project}</p>
                    <p className="text-xs text-[#A0A198] mt-1">{request.id}</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-[#74786F]">
                    {request.category}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#74786F]">
                    <CalendarDays size={14} className="inline mr-2 text-[#92968D]" />
                    {request.date}
                  </td>

                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${statusStyles[request.status]}`}>
                      {request.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <button
                      type="button"
                      title={request.updated}
                      className="text-sm text-[#39765A] hover:text-[#234A38] font-medium"
                      onClick={() => window.alert(request.updated)}
                    >
                      <Eye size={16} className="inline mr-1" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRequests.length === 0 && (
            <p className="text-center text-sm text-[#92968D] py-12">
              No requests found.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default MyRequests
