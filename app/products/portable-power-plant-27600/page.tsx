"use client"
import { ArrowLeft, Check, Download, Truck, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageGallery from "@/components/product-image-gallery"

export default function PortablePowerPlant27600Page() {
  // Product images array
  const productImages = [
    {
      src: "/large-industrial-solar-array.png",
      alt: "Portable Power Plant 27600 Watt Array - Main View",
    },
    {
      src: "/vast-solar-array.png",
      alt: "Portable Power Plant 27600 - Deployed View",
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
      alt: "Power Plant in Use at Industrial Site",
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
            <span className="text-gray-900">Portable Power Plant 27600 Watts</span>
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Portable Power Plant 27600 Watts</h1>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Available within 2 months
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our Portable Power Plant 27600 Watt Array is an industrial-grade solar power solution designed for
                large-scale operations that demand exceptional power output. With 27,600 watts of solar power generation
                capacity and massive battery storage, this unit delivers clean, reliable energy for industrial sites,
                large construction projects, mining operations, and critical infrastructure. This system represents the
                pinnacle of portable solar technology, eliminating the need for multiple diesel generators while
                significantly reducing operational costs, noise pollution, and carbon emissions.
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Sixty 460 watt SunPower panels totaling 27,600 watts in solar power</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>500 kilowatt lithium ion battery storage system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>100 kilowatt inverter system with 110V, 220V & 3-phase output</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Two axis rotation for optimal solar tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Multiple outlet configurations for industrial applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Modular, expandable design for scalable power solutions</span>
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
                <h3 className="font-bold mb-2">Custom Industrial Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We specialize in customizing our industrial power plants to meet your specific operational
                  requirements. Contact our engineering team to discuss your project needs.
                </p>
                <Button variant="link" className="text-green-600 p-0">
                  Contact Engineering Team
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
              Watch our Portable Power Plant 27600 Watt Array demonstration
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
                title="Industrial Solar Powered Plant Operation"
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
                        <span className="font-medium">27,600 Watts</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Panel Configuration</span>
                        <span className="font-medium">60 x 460 watt SunPower panels</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Panel Efficiency</span>
                        <span className="font-medium">24%</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Array Configuration</span>
                        <span className="font-medium">Two axis rotation for optimal tracking</span>
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
                        <span className="font-medium">500 kilowatt hours</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Cycle Life</span>
                        <span className="font-medium">7000+ cycles</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Battery Management</span>
                        <span className="font-medium">Advanced BMS with thermal regulation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Output & Connectivity</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Inverter Capacity</span>
                        <span className="font-medium">100 kilowatts</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">AC Output</span>
                        <span className="font-medium">110V, 220V & 3-phase 480V</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Industrial Outlets</span>
                        <span className="font-medium">Multiple configurations available</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Monitoring</span>
                        <span className="font-medium">Advanced SCADA system with remote access</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-4">Physical Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Dimensions</span>
                        <span className="font-medium">45' long x 8' wide</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Weight</span>
                        <span className="font-medium">Approximately 20,000 lbs</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Transport Requirements</span>
                        <span className="font-medium">Commercial towing vehicle</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 py-2">
                        <span className="text-gray-600">Weather Rating</span>
                        <span className="font-medium">IP66</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications">
                <h2 className="text-2xl font-bold mb-6">Industrial Applications</h2>
                <p className="text-gray-600 mb-6">
                  The Portable Power Plant 27600 Watt Array is designed for demanding industrial applications that
                  require substantial, reliable power:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Mining & Resource Extraction</h3>
                    <p className="text-gray-600 mb-4">
                      Power for remote mining operations, exploration sites, and resource extraction facilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Remote mining operations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Exploration and drilling sites</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Processing equipment and facilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Large Construction Projects</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive power solution for major construction sites and infrastructure projects.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Major infrastructure development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Heavy equipment operation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Multiple work zones and site facilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Disaster Response & Emergency Management</h3>
                    <p className="text-gray-600 mb-4">
                      Critical power infrastructure for large-scale emergency response and disaster recovery operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Emergency command centers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Field hospitals and medical facilities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Water purification and critical infrastructure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Military & Defense Operations</h3>
                    <p className="text-gray-600 mb-4">
                      Tactical power solutions for large-scale military deployments and defense operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Forward operating bases</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Command and control centers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Logistics and support operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Oil & Gas Industry</h3>
                    <p className="text-gray-600 mb-4">
                      Reliable power for remote oil and gas operations, reducing reliance on traditional generators.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Exploration and drilling sites</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Monitoring and control systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Worker accommodations and facilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Large-Scale Events & Productions</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive power solution for major events, festivals, and large-scale productions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Major music festivals and sporting events</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Large-scale film and television productions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Temporary infrastructure for major gatherings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">What is the deployment time for this system?</h3>
                    <p className="text-gray-600">
                      The Portable Power Plant 27600 is designed for efficient deployment despite its size. With a
                      trained crew of 2-3 people, the system can be fully operational within 4-6 hours of arrival on
                      site. We offer optional deployment services where our technicians handle the entire setup process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">How does this compare to diesel generators?</h3>
                    <p className="text-gray-600">
                      Our 27600 Watt system replaces multiple large diesel generators, eliminating fuel costs,
                      emissions, and noise. While the initial investment is higher than diesel generators, the ROI is
                      typically achieved within 2-3 years through eliminated fuel costs, reduced maintenance, and lower
                      operational expenses. For remote locations with high diesel delivery costs, ROI can be even
                      faster.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Can it handle industrial equipment with high startup loads?
                    </h3>
                    <p className="text-gray-600">
                      Yes, the system is specifically designed for industrial applications with high inrush currents.
                      The 50kW inverter system can handle surge loads up to 100kW for short durations, making it
                      suitable for equipment with high startup requirements such as motors, pumps, and compressors. The
                      advanced power management system optimizes performance for these demanding applications.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What maintenance is required?</h3>
                    <p className="text-gray-600">
                      The system requires minimal maintenance compared to diesel generators. We recommend quarterly
                      inspections of the solar array, battery connections, and control systems. The solar panels should
                      be cleaned as needed based on environmental conditions. We offer comprehensive maintenance
                      contracts that include regular inspections, preventive maintenance, and priority support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Is financing available for this system?</h3>
                    <p className="text-gray-600">
                      Yes, we offer several financing options including capital leases, operating leases, and
                      rent-to-own programs specifically designed for industrial equipment. We also work with several
                      financial institutions that specialize in renewable energy projects and can help structure a
                      financing package that aligns with your operational needs and financial goals.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What monitoring and support is included?</h3>
                    <p className="text-gray-600">
                      The system includes our advanced SCADA monitoring platform with 24/7 remote monitoring
                      capabilities. This allows for real-time performance tracking, predictive maintenance, and
                      immediate alerts for any issues. We offer tiered support packages ranging from basic technical
                      support to comprehensive service agreements with guaranteed response times and regular on-site
                      maintenance visits.
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
                          Industrial Specification Sheet (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Engineering Manual (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Installation & Deployment Guide (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Maintenance Protocol (PDF)
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
                          Mining Operation Implementation (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Major Construction Project Case Study (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Download className="h-4 w-4 mr-2" />
                          Industrial ROI Analysis (PDF)
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
                          Industrial System Overview
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Zap className="h-4 w-4 mr-2" />
                          Deployment and Operation Tutorial
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Zap className="h-4 w-4 mr-2" />
                          Client Testimonials and Case Studies
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Support & Services</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Industrial Warranty Information
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Service & Maintenance Plans
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-green-600 hover:underline">
                          <Truck className="h-4 w-4 mr-2" />
                          Technical Support Portal
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
                  src="/portable-power-plant-4600.png"
                  alt="Portable Power Plant 4600 Watt Array"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Portable Power Plant 4600 Watt Array</h3>
                <p className="text-gray-600 mb-4">Mid-sized solar power solution for versatile applications</p>
                <Link href="/products/portable-power-plant-4600">
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
          <h2 className="text-3xl font-bold mb-6">Ready for Industrial-Grade Solar Power?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how our Portable Power Plant 27600 Watt Array can transform
            your industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Engineering Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
              Download Industrial Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
