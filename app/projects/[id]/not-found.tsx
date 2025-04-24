import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 flex items-center justify-center">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="text-center relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
          Project Not Found
        </h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 bg-gray-800/50 text-teal-400 border border-teal-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  )
}
