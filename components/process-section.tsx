"use client"

import { Search, ClipboardCheck, Beaker, Truck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Discovery & scope",
      description: "Define product specs, volumes, timelines, and target landed cost so we can map the best path.",
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: "Sourcing & validation",
      description: "Shortlist factories, align samples to specs, and confirm the compliance pathway for U.S. entry.",
    },
    {
      number: 3,
      icon: Beaker,
      title: "Production & QA",
      description: "Place orders, run AQL inspections, and lock packaging & labeling before hand-off to logistics.",
    },
    {
      number: 4,
      icon: Truck,
      title: "Logistics & customs",
      description: "Book freight, file ISF/entries, clear customs, and deliver to your warehouse or 3PL with POD.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="max-w-4xl mx-auto text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance" style={{ color: "#2ab197" }}>How it works</h2>
          <p className="text-xl text-gray-600 text-pretty">
            Four clear phases—connected like a timeline so you always know the next step.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-1000"
              style={{
                width: isVisible ? "calc(100% - 8rem)" : "0%",
                left: "4rem",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Step number badge */}
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto relative z-10 hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-pretty">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
