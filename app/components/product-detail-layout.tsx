import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductDetailLayoutProps {
  breadcrumb: string
  title: string
  availability: string
  description: string
  mainImage: string
  thumbnails: { src: string; alt: string }[]
  features: string[]
  specifications: ReactNode
  applications: ReactNode
  faq: ReactNode
  relatedProducts: {
    image: string
    title: string
    description: string
    path: string
  }[]
}

export default function ProductDetailLayout({
  breadcrumb,
  title,
  availability,
  description,
  mainImage,
  thumbnails,
  features,
  specifications,
  applications,
  faq,
  relatedProducts,
}: ProductDetailLayoutProps) {
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
            <span className="text-gray-900">{breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
                <img src={mainImage || "/placeholder.svg"} alt={title} className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((thumbnail, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={thumbnail.src || "/placeholder.svg"}
                      alt={thumbnail.alt}
                      className="w-full h-auto object-cover h-20"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {availability}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{description}</p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
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

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link href={product.path}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our products can meet your power needs.
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
