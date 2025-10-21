"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvnnpka";

type ContactSectionProps = {
  id?: string; // <--- allow an optional id prop
};

export function ContactSection({ id = "contact" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    try {
      setStatus("submitting");
      const formEl = e.currentTarget;

      // Build FormData from the form element (names must exist)
      const fd = new FormData(formEl);
      fd.append("_subject", "New Sofmax quote request");
      fd.append("_gotcha", ""); // honeypot

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }, // don't set Content-Type with FormData
      });

      if (!res.ok) {
        // try to show helpful message from Formspree
        let msg = await res.text();
        try {
          const j = JSON.parse(msg);
          msg = j?.errors?.[0]?.message || j?.error || msg;
        } catch {}
        throw new Error(msg || "Send failed");
      }

      setStatus("success");
      formEl.reset();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        category: "",
        message: "",
      });
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id={id}                            // <--- now defined
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900"
      aria-label="Get a U.S. launch plan"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-slate-700/50 text-white text-sm font-medium rounded-full">
              REPLIES WITHIN 1 BUSINESS DAY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a quote</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tell us your product and goals. We'll return a channel plan, budget ranges, and first-90-day milestones.
            Import & compliance are built in, as needed.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"                // <--- must have name
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full transition-all focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"              // <--- must have name
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full transition-all focus:scale-[1.02]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"            // <--- must have name
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full transition-all focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone <span className="font-normal text-gray-500">Optional</span>
                </label>
                <Input
                  id="phone"
                  name="phone"              // <--- must have name
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full transition-all focus:scale-[1.02]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                  Product category
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumer-goods">Consumer Goods</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="apparel">Apparel & Fashion</SelectItem>
                    <SelectItem value="home-garden">Home & Garden</SelectItem>
                    <SelectItem value="health-beauty">Health & Beauty</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {/* Ensure Select value is included in FormData */}
                <input type="hidden" name="category" value={formData.category} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"            // <--- must have name
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full min-h-[120px] md:min-h-[60px] transition-all focus:scale-[1.02]"
                />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-6">
                By submitting, you agree we may contact you about this request. We never sell your data.
              </p>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 text-lg rounded-lg hover:scale-[1.02] transition-all"
              >
                {status === "submitting" ? "Sending..." : "Get a quote"}
              </Button>

              {status === "success" && (
                <p className="mt-3 text-center text-emerald-600 font-medium" role="status">
                  Thanks! We’ll get back to you within 1 business day.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-red-600 font-medium" role="alert">
                  Sorry—couldn’t send your request. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
