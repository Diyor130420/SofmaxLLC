import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Sofmax LLC"
              width={150}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">U.S. Import Partner</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Export Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Import Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Air & Ocean Freight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customs Clearance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Phone: +1 (737) 808-8888</li>
              <li>Part of the Share Logistics Family</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Export Import Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
