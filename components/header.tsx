import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Sofmax LLC" width={180} height={60} className="h-14 w-auto" priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-[#00BFA5] transition-colors font-medium">
                HOME
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#00BFA5] transition-colors font-medium">
                ABOUT US
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#00BFA5] transition-colors font-medium">
               SERVICES
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#00BFA5] transition-colors font-medium">
               CONTACT
              </a>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
