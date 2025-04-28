import Link from "next/link"
import { ArrowRight, Battery, Cloud, Cpu, Leaf, LightbulbIcon, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive energy solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Solar Installation</h3>
              <p className="text-gray-600 mb-6">
                Custom solar solutions for homes of all sizes. Reduce your energy bills and carbon footprint with clean,
                renewable energy.
              </p>
              <Link
                href="/services/residential"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Battery className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Storage Solutions</h3>
              <p className="text-gray-600 mb-6">
                Advanced battery systems to store excess energy for use when you need it. Ensure power continuity during
                outages.
              </p>
              <Link href="/services/storage" className="text-green-600 font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Energy Management</h3>
              <p className="text-gray-600 mb-6">
                Intelligent systems that optimize energy usage and provide real-time monitoring of your energy
                production and consumption.
              </p>
              <Link
                href="/services/management"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-6">
                <LightbulbIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Solar Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable solar installations for businesses and industrial applications. Reduce operating costs and meet
                sustainability goals.
              </p>
              <Link
                href="/services/commercial"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">EV Charging Stations</h3>
              <p className="text-gray-600 mb-6">
                Installation of electric vehicle charging stations for residential and commercial properties. Power your
                transportation with clean energy.
              </p>
              <Link
                href="/services/ev-charging"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Surveillance Solutions</h3>
              <p className="text-gray-600 mb-6">
                Solar-powered security systems and surveillance equipment for remote monitoring and site security.
              </p>
              <Link href="/services/security" className="text-green-600 font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-6">
                <Battery className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backup Power Systems</h3>
              <p className="text-gray-600 mb-6">
                Reliable backup power solutions for maintenance downtime, emergencies, and critical operations
                continuity.
              </p>
              <Link
                href="/services/backup-power"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 p-3 rounded-full w-fit mb-6">
                <Cloud className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive maintenance services to ensure your solar system operates at peak efficiency. 24/7 support
                for all your energy needs.
              </p>
              <Link
                href="/services/maintenance"
                className="text-green-600 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we make switching to solar energy simple and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We assess your energy needs and design a custom solution tailored to your property.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                Our engineers create a detailed plan for your solar system, optimizing for maximum efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Installation</h3>
              <p className="text-gray-600">
                Our professional team installs your system with minimal disruption to your daily routine.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Activation</h3>
              <p className="text-gray-600">
                We handle all permits and inspections, then activate your system so you can start saving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Take the first step towards energy independence.
          </p>
          <Button size="lg" variant="secondary">
            Request a Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
