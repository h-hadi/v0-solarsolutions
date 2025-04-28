"use client"
import { ArrowLeft, Check, Download, Truck, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageGallery from "@/components/product-image-gallery"

export default function PortablePowerPlant4600Page() {
  // Product images array
  const productImages = [
    {
      src: "/portable-power-plant-4600.png",
      alt: "Portable Power Plant 4600 Watt Array - Main View",
    },
    {
      src: "/portable-power-plant-side.png",
      alt: "Portable Power Plant 4600 - Side View",
    },
    {
      src: "/portable-power-plant-panels.png",
      alt: "Solar Panels Deployed",
    },
    {
      src: "/portable-power-plant-control.png",
      alt: "Control Panel",
    },
    {
      src: "/portable-power-plant-in-use.png",
      alt: "Power Plant in Use at Site",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Portable Power Plant 4600 Watt Array</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              {/* Using the reusable image gallery component */}
              <ProductImageGallery images={productImages} />
            </div>

            <div className="lg:w-1/2">
              <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Portable Power Plant 4600 Watt Array</h1>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Available within 6 weeks
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our Portable Power Plant 4600 Watt Array is a mid-sized solar power solution designed for versatility
                and reliability. With 4,600 watts of solar power generation capacity and substantial battery storage,
                this unit provides clean, silent energy for construction sites, events, remote locations, and emergency
                backup situations. The system eliminates the need for traditional generators, reducing both noise
                pollution and carbon emissions while delivering consistent power for your operations.
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>4,600 Watt solar array with high-efficiency panels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>40 kWh lithium battery storage system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>12 kW inverter with 110V & 220V output</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Multiple outlet options (50A, 30A, 15A)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Expandable design with modular components</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Advanced energy management system with remote monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Spec Sheet
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Need a custom solution?</h3>
                <p className="text-gray-600 mb-4">
                  We can customize this power plant to meet your specific energy requirements. Contact our team to
                  discuss your needs.
                </p>
                <Button variant="link" className="text-green-600 p-0">
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our Portable Power Plant 4600 Watt Array demonstration
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-xl overflow-hidden shadow-lg"
              style={{ paddingBottom: "56.25%", height: "0" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                style={{ minHeight: "400px" }}
                src="https://www.youtube.com/embed/YxDFVDlhmIY"
                title="Solar Powered Portable Power Plant Operation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Mobile-specific video container that will only show on smaller screens */}
          <style jsx>{`
            @media (max-width: 640px) {
              iframe {
                min-height: 300px !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
              <TabsContent value="specifications">
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Solar Array</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Total Capacity</span>
                        <span className="font-medium">4,600 Watts</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Panel Type</span>
                        <span className="font-medium">Monocrystalline</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Panel Efficiency</span>
                        <span className="font-medium">22%</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Array Configuration</span>
                        <span className="font-medium">Adjustable tilt</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">Battery System</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Battery Type</span>
                        <span className="font-medium">Lithium Iron Phosphate</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Storage Capacity</span>
                        <span className="font-medium">40 kWh</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Cycle Life</span>
                        <span className="font-medium">5000+ cycles</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Battery Management</span>
                        <span className="font-medium">Advanced BMS included</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Output & Connectivity</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Inverter Capacity</span>
                        <span className="font-medium">12 kW</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">AC Output</span>
                        <span className="font-medium">110V & 220V</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">220V Outlets</span>
                        <span className="font-medium">2 x 50 amp</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">110V Outlets</span>
                        <span className="font-medium">2 x 30 amp, 6 x 15 amp</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Monitoring</span>
                        <span className="font-medium">Wi-Fi, Cellular, Bluetooth</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">Physical Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Dimensions (Closed)</span>
                        <span className="font-medium">12' x 6'</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Dimensions (Open)</span>
                        <span className="font-medium">12' x 16'</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Weight</span>
                        <span className="font-medium">1,200 lbs</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Towing Requirements</span>
                        <span className="font-medium">Standard 2" ball hitch</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Weather Rating</span>
                        <span className="font-medium">IP65</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications">
                <h2 className="text-2xl font-bold mb-6">Applications</h2>
                <p className="text-gray-600 mb-6">
                  The Portable Power Plant 4600 Watt Array is versatile and can be used in various scenarios where
                  reliable, clean power is needed:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Construction Sites</h3>
                    <p className="text-gray-600 mb-4">
                      Ideal for medium to large construction sites requiring power for tools, equipment, and temporary
                      facilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Power for medium to heavy-duty tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Site lighting for extended work hours</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Temporary office power needs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Events & Festivals</h3>
                    <p className="text-gray-600 mb-4">
                      Clean, silent power for outdoor events, concerts, festivals, and temporary installations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Sound systems and stage equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Vendor booths and food service</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lighting and climate control</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Disaster Relief & Emergency Response</h3>
                    <p className="text-gray-600 mb-4">
                      Reliable power for emergency situations, disaster relief efforts, and critical infrastructure.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Medical equipment and facilities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Communication systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Water purification and essential services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Off-Grid Applications</h3>
                    <p className="text-gray-600 mb-4">
                      Sustainable power for remote locations without access to traditional power infrastructure.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Remote research stations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Eco-tourism facilities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Agricultural operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Film & Production</h3>
                    <p className="text-gray-600 mb-4">
                      Silent power for film sets, outdoor broadcasts, and production equipment.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lighting and camera equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Sound recording without generator noise</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Mobile production facilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Military & Defense</h3>
                    <p className="text-gray-600 mb-4">
                      Tactical power solutions for military operations and field deployments.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Forward operating bases</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Command and communication centers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Field hospitals and medical facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">How long can the system run without sunlight?</h3>
                    <p className="text-gray-600">
                      With the standard 40kWh battery system, runtime depends on your power consumption. For example, it
                      can power a 2kW load for approximately 15-20 hours without any solar input. With optimal solar
                      conditions, the system can provide power indefinitely for loads within its generation capacity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Can I expand the system's capacity?</h3>
                    <p className="text-gray-600">
                      Yes, the Portable Power Plant 4600 is designed with modularity in mind. You can expand both the
                      solar array (up to 9200W total) and battery storage (up to 80kWh) to meet growing power needs. Our
                      team can help design the right expansion configuration for your specific requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What maintenance is required?</h3>
                    <p className="text-gray-600">
                      The system requires minimal maintenance. We recommend occasional cleaning of the solar panels to
                      ensure maximum efficiency, checking the battery connections every 6 months, and a professional
                      inspection once a year. The battery system is designed for 5000+ cycles with proper care, which
                      translates to many years of reliable service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">How does weather affect performance?</h3>
                    <p className="text-gray-600">
                      The solar panels will generate electricity even on cloudy days, though at reduced capacity
                      (typically 10-25% of rated output depending on cloud cover). The system includes weather-resistant
                      components rated IP65 for protection against dust and water jets. The trailer is designed to
                      withstand winds up to 70 mph when properly secured.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Can it be used in extreme temperatures?</h3>
                    <p className="text-gray-600">
                      Yes, the Portable Power Plant 4600 is designed to operate in a wide temperature range from -20°F
                      to 120°F (-29°C to 49°C). The battery management system includes temperature regulation to
                      optimize performance and protect the batteries in extreme conditions. For very cold environments,
                      we offer an optional cold weather package with additional insulation and heating elements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What monitoring capabilities are included?</h3>
                    <p className="text-gray-600">
                      The system comes with comprehensive monitoring capabilities, including a local control panel and
                      remote monitoring via our mobile app and web portal. You can track power generation, consumption,
                      battery status, and system health in real-time. The system can also send alerts and notifications
                      for important events or maintenance requirements.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <h2 className="text-2xl font-bold mb-6">Resources & Downloads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Technical Documentation</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Product Specification Sheet (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          User Manual (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Installation Guide (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Maintenance Schedule (PDF)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Case Studies</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Construction Site Implementation (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Event Power Solution Case Study (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          ROI Analysis Report (PDF)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Videos</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Zap className="h-4 w-4 mr-2" />
                          Product Overview Video
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Zap className="h-4 w-4 mr-2" />
                          Setup and Operation Tutorial
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Zap className="h-4 w-4 mr-2" />
                          Customer Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Support</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Warranty Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Service Request Form
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Troubleshooting Guide
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="h-48 bg-gray-100">
                <img
                  src="/solar-powered-construction-trailer.png"
                  alt="1300 Watts Portable Construction Trailer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">1300 Watts Portable Construction Trailer</h3>
                <p className="text-gray-600 mb-4">Compact power solution for construction sites</p>
                <Link href="/products/portable-construction-trailer">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="h-48 bg-gray-100">
                <img
                  src="/portable-solar-power-outdoors.png"
                  alt="Portable Power Plant 9200 Watts Array"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Portable Power Plant 9200 Watts Array</h3>
                <p className="text-gray-600 mb-4">High-capacity portable power solution for larger needs</p>
                <Link href="/products/portable-power-plant-9200">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="h-48 bg-gray-100">
                <img
                  src="/solar-light-tower-1.jpg"
                  alt="Solar Light Tower and Power Plant Trailer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Solar Light Tower and Power Plant Trailer</h3>
                <p className="text-gray-600 mb-4">Combined lighting and power solution for work sites</p>
                <Link href="/products/solar-light-tower">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our Portable Power Plant 4600 Watt Array can meet your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
