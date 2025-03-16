"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { UserMenu } from "./user-menu"
import { useAuth } from "@/hooks/use-auth"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-md py-4"
        : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#8B0000]">
          Alina Wellness
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            About
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Services
          </Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Testimonials
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Gallery
          </Link>
          <Link href="/sales" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Offers
          </Link>
          <Link href="/booking" className="text-gray-700 hover:text-[#8B0000] transition-colors">
            Book Now
          </Link>
          {isAuthenticated && (
            <Link href="/profile" className="text-white bg-[#8B0000] px-4 py-2 rounded-md hover:bg-[#6B0000] transition-colors font-medium">
              Journey
            </Link>
          )}
        </div>
        
        <UserMenu />
      </div>
    </nav>
  )
}