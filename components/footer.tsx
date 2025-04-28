import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">PortaSolar Solutions</span>
            </div>
            <p className="mb-6">
              Providing sustainable energy solutions for homes and businesses since 2010. Our mission is to accelerate
              the world's transition to clean energy.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-green-500 shrink-0 mt-0.5" />
                <span>123 Solar Street, Renewable City, CA 94123</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-500 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-500 shrink-0" />
                <span>info@portasolar.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on clean energy solutions and special offers.
            </p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} PortaSolar Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-green-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
