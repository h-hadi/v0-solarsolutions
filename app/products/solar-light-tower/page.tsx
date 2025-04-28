"use client"
import { ArrowLeft, Check, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageGallery from "@/components/product-image-gallery"

export default function SolarLightTowerPage() {
  // Product images array
  const productImages = [
    {
      src: "/solar-light-tower-1.jpg",
      alt: "Solar Light Tower and Power Plant Trailer 144",
    },
    {
      src: "/solar-light-tower-side.png",
      alt: "Light tower side view",
    },
    {
      src: "/solar-trailer-setup.png",
      alt: "Solar panels",
    },
    {
      src: "/modern-solar-control.png",
      alt: "Control panel",
    },
    {
      src: "/solar-light-tower-2.jpg",
      alt: "Light tower in use",
    },
  ]

  const specifications = (
    <div>
      <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Lighting System</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">LED Array</span>
              <span className="font-medium">4 x 200 Watt LEDs</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Lumens</span>
              <span className="font-medium">144,000 lumens total</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Tower Height</span>
              <span className="font-medium">Extends up to 20 feet</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Rotation</span>
              <span className="font-medium">2-axis rotation</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-4">Power Generation</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Solar Capacity</span>
              <span className="font-medium">1,200 Watts</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Panel Type</span>
              <span className="font-medium">High-efficiency monocrystalline</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Energy Storage</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Battery Capacity</span>
              <span className="font-medium">30 KW</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Battery Type</span>
              <span className="font-medium">Lithium Iron Phosphate</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Inverters</span>
              <span className="font-medium">4 KW (surge up to 8 KW)</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">AC Output</span>
              <span className="font-medium">120 Volt AC</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-4">Physical Specifications</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Driving Dimensions</span>
              <span className="font-medium">7' X 10'</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Deployed Panel Dimensions</span>
              <span className="font-medium">16' X 6'</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Trailer Hitch</span>
              <span className="font-medium">Standard 2"</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 py-2">
              <span className="text-gray-600">Stabilization</span>
              <span className="font-medium">Equipped with Outriggers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

  const applications = (
    <div>
      <h2 className="text-2xl font-bold mb-6">Applications</h2>
      <p className="text-gray-600 mb-6">
        The Solar Light Tower and Power Plant Trailer 144 is a versatile solution for various scenarios where lighting
        and power are needed without access to the grid:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Construction Sites</h3>
          <p className="text-gray-600 mb-4">
            Provide bright, reliable lighting and power for tools and equipment at construction sites without the noise
            and pollution of diesel generators.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Night construction work</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Remote job sites</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Temporary power for tools and equipment</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Events & Festivals</h3>
          <p className="text-gray-600 mb-4">
            Silent, clean power and lighting for outdoor events, concerts, festivals, and gatherings.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Outdoor concerts and festivals</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Sporting events</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Film and photography shoots</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Security & Surveillance</h3>
          <p className="text-gray-600 mb-4">
            Power security cameras and monitoring equipment in remote locations or construction sites.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Construction site security</span>
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
          <h3 className="text-xl font-bold mb-4">Mobile Offices</h3>
          <p className="text-gray-600 mb-4">
            Provide reliable power for temporary office spaces at construction sites and remote locations.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Construction site offices</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Field operation centers</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
              <span>Temporary work facilities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

  const faq = (
    <div>
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">How long can the light tower operate on a full charge?</h3>
          <p className="text-gray-600">
            With the 30 KW battery storage capacity, the light tower can operate for multiple nights without recharging,
            depending on usage. The LED lights consume approximately 800W total, so they can run for over 30 hours on
            battery power alone. During daylight hours, the solar panels recharge the batteries, potentially allowing
            for continuous operation in good weather conditions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">How quickly can the unit be set up?</h3>
          <p className="text-gray-600">
            The Solar Light Tower is designed for quick deployment. A trained operator can typically set up the unit in
            15-20 minutes, including deploying the solar panels and extending the light tower to the desired height. The
            outriggers ensure stability on various terrains.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">What maintenance is required?</h3>
          <p className="text-gray-600">
            The system requires minimal maintenance. We recommend occasional cleaning of the solar panels to ensure
            maximum efficiency, checking the battery connections every 6 months, and a professional inspection once a
            year. The LED lights have a lifespan of approximately 50,000 hours, meaning years of operation before
            replacement is needed.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Can it be used in all weather conditions?</h3>
          <p className="text-gray-600">
            The Solar Light Tower is built for durability in various weather conditions. It can operate in rain, snow,
            and temperatures ranging from -20°F to 120°F. The system includes weather-resistant components and the tower
            is designed to withstand winds up to 60 mph when properly secured with the outriggers deployed.
          </p>
        </div>
      </div>
    </div>
  )

  // Using the reusable component for the rest of the implementation
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
            <span className="text-gray-900">Solar Light Tower and Power Plant Trailer 144</span>
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Solar Light Tower and Power Plant Trailer 144</h1>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Currently Available!
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our Solar Light Tower and Power Plant Trailer 144 is a versatile, eco-friendly solution that replaces
                diesel generators and eliminates air pollution by harvesting the power of the sun. This mobile unit
                combines powerful LED lighting with reliable solar power generation, perfect for construction sites,
                mobile offices, events and festivals, emergency backup power, off-grid locations, security &
                surveillance, and routine maintenance downtime.
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>4 x 200 Watt LEDs & 180 Lumens per Watt (144,000 lumens)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>1,200 Watts in solar power</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>30 KW in storage capacity batteries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>4 KW in inverters that surge up to 8 KW</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>120 Volt AC</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Light tower extends up to 20 feet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span>Equipped with Outriggers for stability</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <div className="mt-6 bg-white p-6 rounded-lg">
              <TabsContent value="specifications">{specifications}</TabsContent>
              <TabsContent value="applications">{applications}</TabsContent>
              <TabsContent value="faq">{faq}</TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Related Products section remains the same */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/solar-powered-construction-office.png"
                alt="1300 Watts Portable Construction Trailer"
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">1300 Watts Portable Construction Trailer</h3>
              <p className="text-gray-600 mb-4">Compact power solution for construction sites</p>
              <Link href="/products/portable-construction-trailer" className="text-green-600 hover:text-green-700">
                Learn More
              </Link>
            </div>
            <div>
              <img
                src="/solar-powered-station.png"
                alt="Portable Power Plant 4600 Watt Array"
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Portable Power Plant 4600 Watt Array</h3>
              <p className="text-gray-600 mb-4">Mid-sized solar power solution with expanded capacity</p>
              <Link href="/products/portable-power-plant-4600" className="text-green-600 hover:text-green-700">
                Learn More
              </Link>
            </div>
            <div>
              <img
                src="/portable-solar-power-outdoors.png"
                alt="Portable Power Plant 9200 Watts Array"
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Portable Power Plant 9200 Watts Array</h3>
              <p className="text-gray-600 mb-4">High-capacity portable power solution for larger needs</p>
              <Link href="/products/portable-power-plant-9200" className="text-green-600 hover:text-green-700">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section remains the same */}
      <section className="py-24 bg-green-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to power your future?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today to learn more about the Solar Light Tower and Power Plant Trailer 144 and how it can
            benefit your operations.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
