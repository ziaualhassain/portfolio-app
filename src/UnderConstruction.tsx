import { React } from 'react'
import { Construction } from "lucide-react"

export default function UnderConstruction() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="text-center p-6 bg-white rounded-lg shadow-xl max-w-sm w-full mx-auto">
          <Construction className="mx-auto text-yellow-500 mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Under Construction</h1>
          <p className="text-gray-600 mb-4">
            My portfolio is currently being built. Check back soon for amazing content!
          </p>
          <div className="text-sm text-gray-500">
            Expected completion: Coming Soon
          </div>
        </div>
      </div>
    )
  }