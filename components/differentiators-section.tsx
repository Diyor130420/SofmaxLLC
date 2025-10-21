"use client"

import { Clock, BarChart3, TrendingUp, CreditCard, Shield, List } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function DifferentiatorsSection() {
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

  const features = [
    {
      icon: Clock,
      title: "End-to-end U.S. launch",
      description:
        "We own the go-to-market: channels, pricing, listings, ads, and fulfillment. Import/compliance is integrated so sales aren't delayed.",
      details: "Amazon · Walmart · Sofmax Marketplace · DTC",
    },
    {
      icon: BarChart3,
      title: "SKU-level P&L transparency",
      description:
        "Decisions driven by contribution margin — not vanity metrics. Every fee, ad dollar, and landed cost is visible by SKU.",
      details: "Dashboard: landed cost · fees · ROAS · margin",
    },
    {
      icon: TrendingUp,
      title: "Listing + retail media engine",
      description:
        "Keyword research, A+ content, image stacks, review capture, and retail media that compounds — built for conversion and rank.",
      details: "A+ content · Reviews · Sponsored Ads/DSP",
    },
    {
      icon: CreditCard,
      title: "Fulfillment without surprises",
      description:
        "FBA prep/labels, FBM backup, and 3PL orchestration with SLAs. Inventory health and returns managed to protect margins.",
      details: "FBA/FBM · 3PL routing · returns flow",
    },
    {
      icon: Shield,
      title: "Compliance built-in (optional)",
      description:
        "HTS/HS guidance, admissibility, labeling, and filings coordinated via licensed U.S. brokers — aligned to your sell-through plan.",
      details: "CBP entry via licensed brokers · FDA/EPA where required",
    },
    {
      icon: List,
      title: "Single team, fewer handoffs",
      description:
        "Sourcing, QA, compliance, marketing, and ops under one roof. Faster cycles, fewer exceptions, clearer accountability.",
      details: "One plan · One POC · Faster feedback loops",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="max-w-4xl mx-auto text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance" style={{ color: "#2ab197"}}>What makes us different</h2>
          <p className="text-xl text-gray-600 text-pretty">
            Go-to-market first. Import and compliance integrated — so U.S. sales start faster and scale with control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 transition-transform hover:scale-110">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-pretty">{feature.description}</p>
              <p className="text-sm text-gray-500">{feature.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
