"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, FileText, TrendingUp, Package, Shield, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ServicesSection({id="services"} : { id?: string }) {
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

  const services = [
    {
      icon: Clock,
      title: "Market Entry Strategy",
      description:
        "Pricing, channel mix (Amazon, Walmart, DTC), and regulatory gates so your first U.S. units land with traction.",
    },
    {
      icon: FileText,
      title: "Catalog & Listing Ops",
      description:
        "Keyword research, A+ content, image stacks, review capture, and MAP policy setup across marketplaces.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Sponsored ads, DSP, and retail media with SKU-level P&L so you scale what's profitable.",
    },
    {
      icon: Package,
      title: "Fulfillment & 3PL",
      description: "FBA, WFS, in-housing, and 3PL orchestration so inventory flows without stock-outs or overages.",
    },
    {
      icon: Shield,
      title: "Compliance & Import (Optional)",
      description:
        "CBP, FDA, EPA, AQL, and landed-cost forecasts for brands managing their own customs broker filings.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Unit Economics",
      description: "Landed cost, fees, ad spend, and contribution margin dashboards so you know what's working.",
    },
  ]

  return (
    <section id={id} ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2" style={{ color: "#2ab197" }}>Core services</h2>
          <p className="text-xl text-gray-600">
            Deliverables that move your PO from quote to delivery with fewer surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#00BFA5]/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-[#00BFA5]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
