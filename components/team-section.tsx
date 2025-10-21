"use client"

import { Mail, Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Saidamin Saidkarimov",
    title: "Founder & CEO",
    phone: "+1 (321) 314-7187",
    email: "Saidamin.saidikromov@sofmax.us",
    linkedin: "https://www.linkedin.com/in/saidamin-saidkarimov-558658381",
  },
  {
    name: "Isafandiyor Okhunov",
    title: "Co-Founder & Managing Director",
    phone: "+1 (215) 526-7137",
    email: "Isafandiyor.okhunov@sofmax.us",
    linkedin: "https://www.linkedin.com/in/isafandiyor-okhunov/",
  },
  {
    name: "Rakhmiddin Dekhkonov",
    title: "Operations Manager",
    phone: "+65 9083 0166",
    email: "dehqonovrahmiddin1@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakhmiddin-dekhkonov",
  },
]

export function TeamSection() {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ color: "#2ab197" }}>Meet our team</h2>
          <p className="text-lg text-gray-600">Reach out directly — we keep lines open for partners and clients.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-700 mb-6">{member.phone}</p>

                <div className="flex justify-center gap-4">
                <a
                href={member.email ? `mailto:${member.email}` : undefined}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-teal-600 hover:text-white flex items-center justify-center"
                aria-label="Email"
                onClick={(e) => {
                  if (!member.email) e.preventDefault(); // avoid 404 if missing
  }}
>
                <Mail className="w-5 h-5" />
                </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
