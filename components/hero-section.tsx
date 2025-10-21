"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url('/shipping-containers-global-logistics.jpg')`,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p
            className="text-[#00BFA5] text-sm font-semibold mb-2 uppercase tracking-wide transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            U.S. Import Partner
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Launch & sell in the U.S. — we handle go-to-market end to end.
          </h2>
          <p
            className="text-lg text-white/90 mb-6 transition-all duration-700 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Sofmax helps international brands enter the United States and grow sales: market fit, listings, ads,
            fulfillment, and compliance.
          </p>
          <div
            className="flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Button
              size="lg"
              className="bg-[#00BFA5] hover:bg-[#00A890] text-white hover:scale-105 transition-transform"
            >
              Get a launch plan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 hover:scale-105 transition-transform"
            >
              See how it works
            </Button>
          </div>
          <div
            className="flex flex-wrap gap-3 text-sm transition-all duration-700 delay-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-white/20 transition-colors">
              <Check className="h-4 w-4" />
              <span>CBP filings</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-white/20 transition-colors">
              <Check className="h-4 w-4" />
              <span>FDA/EPA where applicable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-white/20 transition-colors">
              <Check className="h-4 w-4" />
              <span>AQL inspections</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-white/20 transition-colors">
              <Check className="h-4 w-4" />
              <span>Landed-cost forecasts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
