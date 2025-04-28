import { Award, Clock, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pioneering sustainable energy solutions since 2010
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To accelerate the world's transition to sustainable energy through innovative solar solutions that are
              accessible to everyone.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600">
              A world powered by clean, renewable energy where sustainability and prosperity go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, PortaSolar Solutions began with a simple mission: to make clean, renewable energy
                accessible to everyone. What started as a small team of passionate engineers has grown into a leading
                provider of solar solutions across the country.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been driven by innovation and a commitment to sustainability. We've continuously evolved
                our technology and services to meet the changing needs of our customers and the planet.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped thousands of homes and businesses reduce their carbon footprint and
                energy costs through our comprehensive solar solutions.
              </p>
            </div>

            <div className="md:w-1/2">
              <img src="/solar-team-success.png" alt="Our team" className="rounded-xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-gray-600">Installations Completed</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-600">Expert Team Members</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-4xl font-bold mb-2">13+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to creating a sustainable future through renewable energy solutions that reduce carbon
                emissions and protect our planet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in research and development to stay at the forefront of solar technology and
                provide cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings, building trust with our customers,
                partners, and communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our products to the service we provide
                to our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                We believe clean energy should be accessible to everyone, and we work to make solar solutions affordable
                and available to all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We're committed to giving back to the communities we serve through education, outreach, and sustainable
                development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The journey that brought us here</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-2">
                    <span className="text-xl font-bold text-green-600">2010</span>
                  </div>
                  <div className="h-full w-0.5 bg-green-200 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                  <p className="text-gray-600">
                    PortaSolar Solutions was founded by Michael Johnson with a small team of engineers dedicated to
                    making solar energy accessible to homeowners.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-2">
                    <span className="text-xl font-bold text-green-600">2013</span>
                  </div>
                  <div className="h-full w-0.5 bg-green-200 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">First Major Project</h3>
                  <p className="text-gray-600">
                    Completed our first commercial installation, a 500kW system for a manufacturing facility that
                    reduced their energy costs by 40%.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-2">
                    <span className="text-xl font-bold text-green-600">2016</span>
                  </div>
                  <div className="h-full w-0.5 bg-green-200 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Expansion & Innovation</h3>
                  <p className="text-gray-600">
                    Expanded to three new states and launched our proprietary energy management system, PowerControl™.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-2">
                    <span className="text-xl font-bold text-green-600">2019</span>
                  </div>
                  <div className="h-full w-0.5 bg-green-200 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Battery Storage Launch</h3>
                  <p className="text-gray-600">
                    Introduced our integrated battery storage solutions, allowing customers to achieve greater energy
                    independence.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-green-100 p-3 rounded-full w-fit">
                    <span className="text-xl font-bold text-green-600">2023</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">National Recognition</h3>
                  <p className="text-gray-600">
                    Named one of the top solar providers in the country with over 10,000 installations completed and
                    expanded operations to 15 states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet the experts behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src="/confident-executive.png" alt="CEO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                <p className="text-green-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 20 years of experience in renewable energy, Michael leads our company's vision and strategy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src="/confident-female-cto.png" alt="CTO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
                <p className="text-green-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Sarah oversees our technology development and ensures we stay at the cutting edge of solar innovation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src="/confident-coo.png" alt="COO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Rodriguez</h3>
                <p className="text-green-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  David ensures the smooth operation of our business and oversees our installation teams.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">View Full Team</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We work with the best in the industry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-32">
              <img src="/solar-certified-seal.png" alt="NABCEP Certification" className="max-h-16" />
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-32">
              <img src="/energy-star-compliance.png" alt="Energy Star Partner" className="max-h-16" />
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-32">
              <img src="/abstract-solar-growth.png" alt="SEIA Member" className="max-h-16" />
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-32">
              <img src="/eco-certified-seal.png" alt="Green Business Certified" className="max-h-16" />
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Solar Provider 2023</h3>
                <p className="text-gray-600">National Renewable Energy Association</p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Award 2022</h3>
                <p className="text-gray-600">Clean Energy Business Council</p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability Excellence</h3>
                <p className="text-gray-600">Green Business Awards 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Careers at PortaSolar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our team and make a difference</p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals who are passionate about renewable energy and
              sustainability. Join our team and be part of the clean energy revolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Solar Installation Technician</h3>
                <p className="text-gray-600 mb-4">Full-time • Multiple Locations</p>
                <Button variant="outline" size="sm">
                  View Position
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Energy Consultant</h3>
                <p className="text-gray-600 mb-4">Full-time • Remote</p>
                <Button variant="outline" size="sm">
                  View Position
                </Button>
              </div>
            </div>

            <Button>View All Positions</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Be part of the clean energy revolution. Contact us today to learn how we can help you make the switch to
            solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
