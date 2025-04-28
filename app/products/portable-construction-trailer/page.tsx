"use client"

import { useState } from "react"
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Clock, Download, Truck, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortableConstructionTrailerPage() {
  // Product images array
  const productImages = [
    {
      src: "/solar-powered-construction-trailer.png",
      alt: "1300 Watts Portable Construction Trailer",
    },
    {
      src: "/solar-trailer-front.png",
      alt: "Trailer front view",
    },
    {
      src: "/portable-solar-trailer-side.png",
      alt: "Trailer side view",
    },
    {
      src: "/solar-trailer-setup.png",
      alt: "Solar panels",
    },
    {
      src: "/modern-solar-control.png",
      alt: "Control panel",
    },
  ]

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1))
  }

  // Function to select image by index
  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

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
            <span className="text-gray-900">1300 Watts Portable Construction Trailer</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              {/* Main Image with Navigation */}
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                <img
                  src={productImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={productImages[currentImageIndex].alt}
                  className="w-full h-auto object-contain aspect-[4/3]"
                />

                {/* Image Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                  {currentImageIndex + 1} / {productImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${
                      currentImageIndex === index ? "border-green-500" : "border-transparent"
                    }`}
                    onClick={() => selectImage(index)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">1300 Watts Portable Construction Trailer</h1>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">In Stock</div>
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Available within 2 weeks
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our 1300 Watts Portable Construction Trailer is designed specifically for construction sites, mobile
                offices, events, security systems, and off-grid locations that need reliable, clean power. This compact
                yet powerful solar solution features a 10 kW inverter supporting both 110V and 220V outputs, a robust 30
                kWh lithium battery system, and 1,300 Watts of solar panels. With multiple outlet options including 50
                amp 220V, 30 amp 110V, and four 15 amp 110V plugs, it eliminates the need for noisy, polluting
                generators while providing consistent energy for your operations.
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>1300W solar array with high-efficiency panels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>30 kWh lithium battery storage system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>10 kW inverter with 110V & 220V output</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Multiple outlet options (50A, 30A, 15A)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Compact design: 10' x 5' closed, 10' x 10' open</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Remote monitoring capabilities via mobile app</span>
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
                  We can customize this trailer to meet your specific power requirements. Contact our team to discuss
                  your needs.
                </p>
                <Button variant="link" className="text-green-600 p-0">
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <div className="mt-6 bg-white p-6 rounded-lg">
              <TabsContent value="specifications">
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Solar Array</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Total Capacity</span>
                        <span className="font-medium">1,300 Watts</span>
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
                        <span className="font-medium">Lithium Ion</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Storage Capacity</span>
                        <span className="font-medium">30 kWh</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Cycle Life</span>
                        <span className="font-medium">4000+ cycles</span>
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
                        <span className="font-medium">10 kW</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">AC Output</span>
                        <span className="font-medium">110V & 220V</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">220V Outlets</span>
                        <span className="font-medium">1 x 50 amp</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">110V Outlets</span>
                        <span className="font-medium">1 x 30 amp, 4 x 15 amp</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Monitoring</span>
                        <span className="font-medium">Wi-Fi, Cellular options</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">Physical Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Dimensions (Closed)</span>
                        <span className="font-medium">10' x 5'</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Dimensions (Open)</span>
                        <span className="font-medium">10' x 10'</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Weight</span>
                        <span className="font-medium">900 lbs</span>
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

              {/* Other tab contents remain the same */}
              <TabsContent value="applications">
                <h2 className="text-2xl font-bold mb-6">Applications</h2>
                <p className="text-gray-600 mb-6">
                  The 1300 Watts Portable Construction Trailer is versatile and can be used in various scenarios where
                  temporary, clean power is needed:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Construction Sites</h3>
                    <p className="text-gray-600 mb-4">
                      Perfect for powering tools, lighting, and communication equipment at construction sites without
                      access to grid power.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Power for small to medium tools and equipment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Site lighting for early morning or evening work</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Charging stations for power tools and devices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Remote Work Sites</h3>
                    <p className="text-gray-600 mb-4">
                      Ideal for providing power in locations far from the electrical grid or where generator noise would
                      be disruptive.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Environmental monitoring stations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Archaeological sites and field research</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Remote communication equipment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Events & Temporary Installations</h3>
                    <p className="text-gray-600 mb-4">
                      Clean, quiet power for outdoor events, film productions, and temporary installations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Outdoor festivals and markets</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Film and photography shoots</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Pop-up retail and food service</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Mobile Offices</h3>
                    <p className="text-gray-600 mb-4">
                      Power for temporary office spaces at construction sites and remote work locations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Construction site management offices</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Temporary workspaces</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Field operation centers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Security & Surveillance</h3>
                    <p className="text-gray-600 mb-4">
                      Reliable power for security cameras, monitoring equipment, and perimeter lighting.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Construction site security systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Remote property monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Temporary security deployments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Maintenance & Downtime</h3>
                    <p className="text-gray-600 mb-4">
                      Backup power during scheduled maintenance or unexpected outages.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Equipment servicing periods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Grid maintenance backup</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Critical systems continuity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">How long does the battery last on a full charge?</h3>
                    <p className="text-gray-600">
                      With the standard 5kWh battery system, runtime depends on your power consumption. For example, it
                      can power a 500W load for approximately 8-10 hours without any solar input. With optimal solar
                      conditions, the system can provide power indefinitely for loads within its generation capacity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Can I expand the solar capacity or battery storage?</h3>
                    <p className="text-gray-600">
                      Yes, the system is designed to be modular. We offer expansion options for both the solar array (up
                      to 2600W total) and battery storage (up to 10kWh). Contact our sales team for customization
                      options.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What maintenance is required?</h3>
                    <p className="text-gray-600">
                      The system requires minimal maintenance. We recommend occasional cleaning of the solar panels to
                      ensure maximum efficiency, checking the battery connections every 6 months, and a professional
                      inspection once a year. The battery system is designed for 4000+ cycles with proper care.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">How does weather affect performance?</h3>
                    <p className="text-gray-600">
                      The solar panels will generate electricity even on cloudy days, though at reduced capacity. The
                      system includes weather-resistant components rated IP65 for protection against dust and water
                      jets. The trailer is designed to withstand winds up to 60 mph when properly secured.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Is training provided for setup and operation?</h3>
                    <p className="text-gray-600">
                      Yes, we provide comprehensive training upon delivery. Additionally, each unit comes with detailed
                      documentation, and our support team is available for remote assistance. The system is designed to
                      be user-friendly with minimal technical knowledge required for basic operation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Are financing options available?</h3>
                    <p className="text-gray-600">
                      Yes, we offer flexible financing options including leasing and rent-to-own programs. We also help
                      customers identify and apply for applicable renewable energy incentives and tax credits that may
                      be available in their region.
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
                          Remote Work Site Case Study (PDF)
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

      {/* Related Products section remains the same */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  src="/portable-solar-power-station.png"
                  alt="Portable Power Plant 4600 Watt Array"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Portable Power Plant 4600 Watt Array</h3>
                <p className="text-gray-600 mb-4">Mid-sized solar power solution with expanded capacity</p>
                <Link href="/products/portable-power-plant-4600">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  src="/solar-led-illumination.png"
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

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  src="/placeholder.svg?key=j4ltz"
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
          </div>
        </div>
      </section>

      {/* CTA Section remains the same */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our 1300 Watts Portable Construction Trailer can meet your power needs.
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
