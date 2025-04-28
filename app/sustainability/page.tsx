import { ArrowRight, Leaf, Recycle, Sprout, TreePine } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SustainabilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Commitment to Sustainability</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a greener future through renewable energy and sustainable practices
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Environmental Impact</h2>
              <p className="text-gray-600 mb-6">
                At SolarGrid Pro, sustainability isn't just a buzzword—it's at the core of everything we do. Our mission
                is to create a cleaner, more sustainable world through renewable energy solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Through our solar installations, we've helped thousands of homes and businesses reduce their carbon
                footprint and dependence on fossil fuels. But our commitment to sustainability extends beyond our
                products.
              </p>
              <p className="text-gray-600">
                We're dedicated to minimizing our own environmental impact through sustainable business practices, from
                our eco-friendly offices to our electric vehicle fleet.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="/solar-field-peace.png"
                alt="Solar panels in a green field"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The measurable difference we're making together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Carbon Reduction</h3>
              </div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-gray-600 mb-4">Metric tons of CO2 emissions avoided annually</p>
              <Progress value={75} className="h-2 bg-gray-200" />
              <p className="text-sm text-gray-500 mt-2">75% of our 2025 goal</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Recycle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Clean Energy</h3>
              </div>
              <div className="text-4xl font-bold mb-2">120 GWh</div>
              <p className="text-gray-600 mb-4">Clean energy generated annually</p>
              <Progress value={80} className="h-2 bg-gray-200" />
              <p className="text-sm text-gray-500 mt-2">80% of our 2025 goal</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <TreePine className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Tree Equivalent</h3>
              </div>
              <div className="text-4xl font-bold mb-2">2.3 Million</div>
              <p className="text-gray-600 mb-4">Equivalent trees planted through carbon reduction</p>
              <Progress value={65} className="h-2 bg-gray-200" />
              <p className="text-sm text-gray-500 mt-2">65% of our 2025 goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainable Practices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">How we're walking the talk in our own operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Green Facilities</h3>
              </div>
              <p className="text-gray-600">
                Our headquarters and all regional offices are powered by 100% renewable energy. We've implemented
                energy-efficient lighting, HVAC systems, and water conservation measures throughout our facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Responsible Sourcing</h3>
              </div>
              <p className="text-gray-600">
                We carefully select suppliers who share our commitment to sustainability. Our solar panels and
                components are sourced from manufacturers with strong environmental and labor practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Electric Fleet</h3>
              </div>
              <p className="text-gray-600">
                Our service and installation vehicles are transitioning to an all-electric fleet, with 75% of our
                vehicles already electric or hybrid. We've installed charging stations at all our facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Recycling Program</h3>
              </div>
              <p className="text-gray-600">
                We have a comprehensive recycling program for all materials used in our operations, including solar
                panels at the end of their lifecycle. We're committed to responsible disposal and minimizing waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Goals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Looking ahead to a greener future</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Carbon Neutral by 2025</h3>
                <p className="text-gray-600 mb-4">
                  We're on track to make our entire operations carbon neutral by 2025 through renewable energy use,
                  efficiency improvements, and carbon offsets.
                </p>
                <Progress value={70} className="h-2 bg-gray-200" />
                <p className="text-sm text-gray-500 mt-2">70% complete</p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">100% Sustainable Materials by 2026</h3>
                <p className="text-gray-600 mb-4">
                  We're working to ensure all materials used in our products and operations are sustainably sourced and
                  recyclable by 2026.
                </p>
                <Progress value={55} className="h-2 bg-gray-200" />
                <p className="text-sm text-gray-500 mt-2">55% complete</p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">1 Million Solar Installations by 2030</h3>
                <p className="text-gray-600 mb-4">
                  Our ambitious goal is to complete 1 million solar installations by 2030, significantly reducing carbon
                  emissions and fossil fuel dependence.
                </p>
                <Progress value={25} className="h-2 bg-gray-200" />
                <p className="text-sm text-gray-500 mt-2">25% complete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Together, we can make a significant impact on our planet's health through clean, renewable energy.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
