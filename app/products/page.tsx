"use client"

import Link from "next/link"
import { ArrowRight, Check, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ProductsPage() {
  const products = [
    {
      id: "construction-trailer",
      name: "1300 Watts Portable Construction Trailer",
      description: "Compact power solution for construction sites and mobile offices",
      image: "/solar-powered-site-office.png",
      category: "trailers",
      tags: ["Popular", "Construction", "Mobile Office"],
      availability: "Available within 2 weeks",
      features: ["1300W solar array capacity", "Integrated battery storage", "Rugged construction for job sites"],
      path: "/products/portable-construction-trailer",
    },
    {
      id: "power-plant-4600",
      name: "Portable Power Plant 4600 Watt Array",
      description: "Mid-sized solar power solution for various applications",
      image: "/powerful-portable-solar.png",
      category: "power-plants",
      tags: ["Versatile", "Off-Grid"],
      availability: "Available within 6 weeks",
      features: ["4600W solar array capacity", "Advanced energy management system", "Expandable battery capacity"],
      path: "/products/portable-power-plant-4600",
    },
    {
      id: "power-plant-9200",
      name: "Portable Power Plant 9200 Watts Array",
      description: "High-capacity portable power solution for larger needs",
      image: "/powerful-portable-solar.png",
      category: "power-plants",
      tags: ["High Capacity", "Commercial"],
      availability: "Available within 6 weeks",
      features: ["9200W solar array capacity", "Commercial-grade power output", "Remote monitoring capabilities"],
      path: "/products/portable-power-plant-9200",
    },
    {
      id: "power-plant-27600",
      name: "Portable Power Plant 27600 Watts",
      description: "Industrial-grade solar power solution for large operations",
      image: "/large-industrial-solar-array.png",
      category: "power-plants",
      tags: ["Industrial", "Heavy Duty"],
      availability: "Available within 2 months",
      features: [
        "27600W solar array capacity",
        "Industrial applications and large sites",
        "Comprehensive power management system",
      ],
      path: "/products/portable-power-plant-27600",
    },
    {
      id: "solar-light-tower",
      name: "Solar Light Tower and Power Plant Trailer",
      description: "Combined lighting and power solution for work sites and events",
      image: "/solar-led-tower.png",
      category: "light-towers",
      tags: ["Dual Purpose", "Events", "Security"],
      availability: "Contact for availability",
      features: [
        "High-powered LED lighting array",
        "Integrated power generation",
        "Perfect for construction sites and events",
      ],
      path: "/products/solar-light-tower",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Portable solar solutions for any power need</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 bg-gray-100 relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2 py-1 rounded-full text-white ${
                          tag === "Popular"
                            ? "bg-green-500"
                            : tag === "Industrial"
                              ? "bg-blue-500"
                              : tag === "Dual Purpose"
                                ? "bg-purple-500"
                                : "bg-gray-500"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm mb-4">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span>{product.availability}</span>
                  </div>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={product.path} className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Comparison</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the right solar solution for your specific needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Product</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Power Output</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Battery Storage</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Best For</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">1300 Watts Portable Construction Trailer</td>
                  <td className="py-3 px-4 border-b">1300W</td>
                  <td className="py-3 px-4 border-b">5 kWh</td>
                  <td className="py-3 px-4 border-b">Small construction sites, mobile offices</td>
                  <td className="py-3 px-4 border-b">2 weeks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">Portable Power Plant 4600 Watt Array</td>
                  <td className="py-3 px-4 border-b">4600W</td>
                  <td className="py-3 px-4 border-b">10 kWh</td>
                  <td className="py-3 px-4 border-b">Medium work sites, events</td>
                  <td className="py-3 px-4 border-b">6 weeks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">Portable Power Plant 9200 Watts Array</td>
                  <td className="py-3 px-4 border-b">9200W</td>
                  <td className="py-3 px-4 border-b">20 kWh</td>
                  <td className="py-3 px-4 border-b">Large sites, commercial applications</td>
                  <td className="py-3 px-4 border-b">6 weeks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">Portable Power Plant 27600 Watts</td>
                  <td className="py-3 px-4 border-b">27600W</td>
                  <td className="py-3 px-4 border-b">50 kWh</td>
                  <td className="py-3 px-4 border-b">Industrial applications, large operations</td>
                  <td className="py-3 px-4 border-b">2 months</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">Solar Light Tower and Power Plant Trailer</td>
                  <td className="py-3 px-4 border-b">1200W</td>
                  <td className="py-3 px-4 border-b">30 kWh</td>
                  <td className="py-3 px-4 border-b">Construction sites, events, security</td>
                  <td className="py-3 px-4 border-b">Contact us</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project with Solar?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your portable power needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
