'use client'
import { useAuth } from "@/context/AuthContext"

export default function page() {
  const { user } = useAuth()


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-violet-700 mb-4">Welcome, {user?.email || 'anonymous'}</h1>
      </div>
    </div>
  )
}
