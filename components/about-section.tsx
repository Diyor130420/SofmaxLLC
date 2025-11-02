export function AboutSection({id="about"}: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ color: "#2ab197" }}>About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-2 md:order-1">
            <div className="relative w-full h-[400px] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/global-trade-network.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-30% via-white/70 via-60% to-white to-90%" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-gray-800"style={{ color: "#2ab197" }}>Sofmax LLC</h3>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                We help international brands launch and grow in the United States with a full go-to-market strategy.
                From market research and channel selection to product listings, ads, fulfillment, and compliance, we
                align every step so your brand scales with confidence.
              </p>
              <p>
                Our model blends marketing expertise with operational execution. By combining marketplace management,
                performance advertising, and U.S. import support under one team, we remove friction and reduce costs.
                Whether you're testing entry or expanding nationwide, Sofmax delivers clarity, speed, and results across
                the entire revenue journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
