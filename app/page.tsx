import { ArrowRight, Battery, Calendar, Clock, Cloud, Cpu, Eye, Leaf, LightbulbIcon, Zap, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Zap className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold">PortaSolar Solutions</h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            Sustainable Energy Solutions for a Brighter Future
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Harness the power of the sun with our cutting-edge solar technology. Reduce your carbon footprint and energy
            costs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="mt-16 w-full max-w-4xl">
            <img
              src="/solar-roof-blue-sky.png"
              alt="Solar panels installation"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Solar Solutions?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive energy solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Reduce your carbon footprint with clean, renewable energy from the sun.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Battery className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Storage</h3>
              <p className="text-gray-600">
                Advanced battery solutions to store excess energy for use when you need it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Technology</h3>
              <p className="text-gray-600">
                Intelligent systems that optimize energy usage and provide real-time monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Energy Services</h2>
              <p className="text-gray-600 mb-8">
                From initial consultation to installation and maintenance, we provide end-to-end solutions for all your
                energy needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <LightbulbIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Residential Solar Installation</h3>
                    <p className="text-gray-600">Custom solar solutions for homes of all sizes.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Commercial Energy Systems</h3>
                    <p className="text-gray-600">Scalable solutions for businesses and industrial applications.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Cloud className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Energy Monitoring & Management</h3>
                    <p className="text-gray-600">Advanced systems to track and optimize your energy usage.</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-green-600 hover:bg-green-700">View All Services</Button>
            </div>

            <div className="md:w-1/2">
              <img
                src="/solar-installation.png"
                alt="Solar installation service"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The team was professional and efficient. Our solar system has been running flawlessly for over a year
                now, and we've seen significant savings on our energy bills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a business owner, I was concerned about the initial investment, but the ROI has been impressive. The
                energy savings have made a significant impact on our operating costs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The smart monitoring system gives me complete control over my energy usage. I can track production and
                consumption in real-time, which has helped us become more energy efficient."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powering Various Applications</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our solar solutions are designed to meet the needs of diverse industries and scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Construction & Mobile Offices</h3>
              <p className="text-gray-600">
                Power tools, equipment, lighting, and temporary office spaces at construction sites without noise or
                emissions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Events & Festivals</h3>
              <p className="text-gray-600">
                Clean, silent power for outdoor events, concerts, festivals, and temporary installations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency & Backup Power</h3>
              <p className="text-gray-600">
                Reliable power during emergencies, natural disasters, and unexpected outages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Off-Grid Sites</h3>
              <p className="text-gray-600">
                Sustainable power solutions for remote locations without access to the electrical grid.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Eye className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Surveillance</h3>
              <p className="text-gray-600">
                Power for security cameras, monitoring equipment, and perimeter lighting at remote locations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-6">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maintenance Downtime</h3>
              <p className="text-gray-600">
                Backup power during scheduled maintenance, equipment servicing, or grid upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch to Clean Energy?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Take the first step towards energy independence and a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
