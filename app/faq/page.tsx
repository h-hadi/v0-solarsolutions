import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about solar energy and our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  How do solar panels work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Solar panels work by allowing photons, or particles of light, to knock electrons free from atoms,
                  generating a flow of electricity. They're comprised of many small units called photovoltaic cells,
                  which convert sunlight into electricity. The electricity generated is direct current (DC), which is
                  then converted to alternating current (AC) by an inverter for use in your home or business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  How much can I save with solar energy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Savings vary depending on your location, energy consumption, and the size of your solar system. On
                  average, homeowners can save between 50-90% on their monthly electricity bills. Over the lifetime of
                  your solar system (25+ years), you could save tens of thousands of dollars. We provide a detailed
                  savings estimate during your free consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  What happens when it's cloudy or at night?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Solar panels still generate electricity on cloudy days, though at reduced efficiency. At night, when
                  your panels aren't producing electricity, you'll draw power from the grid. Alternatively, if you have
                  a battery storage system, you can use stored energy collected during the day. Most solar systems are
                  grid-tied, meaning they work in conjunction with your utility provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  How long does installation take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  The physical installation of solar panels typically takes 1-3 days, depending on the system size and
                  complexity. However, the entire process, including site assessment, design, permitting, and final
                  inspection, usually takes 2-3 months. Our team handles all the paperwork and coordination to make the
                  process as smooth as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  What maintenance is required for solar panels?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Solar panels require minimal maintenance. They're designed to withstand various weather conditions and
                  typically only need occasional cleaning to remove dust and debris. In most climates, rain naturally
                  cleans the panels. We recommend a professional inspection once a year to ensure optimal performance.
                  All our installations come with monitoring systems that alert us to any issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  Are there tax incentives or rebates available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Yes, there are various incentives available. The federal Investment Tax Credit (ITC) allows you to
                  deduct a percentage of your solar costs from your taxes. Additionally, many states and local utilities
                  offer rebates and incentives. During your consultation, we'll provide detailed information about all
                  incentives available in your area to maximize your savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  What happens if I produce more electricity than I use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  If your system produces more electricity than you use, the excess is typically sent back to the grid.
                  In many areas, utility companies offer net metering, which credits you for this excess electricity.
                  These credits can offset the cost of power drawn from the grid when your system isn't producing enough
                  electricity, such as at night.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  How long do solar panels last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Most solar panels are warrantied for 25-30 years, but they can continue to generate electricity for
                  much longer. The efficiency may decrease slightly over time (typically 0.5-0.8% per year). Our
                  high-quality panels are designed for durability and can withstand harsh weather conditions including
                  heavy snow, hail, and high winds. We provide comprehensive warranties on all our products and
                  installations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  Will solar panels work on my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Solar panels can be installed on most roof types, including asphalt shingle, metal, tile, and flat
                  roofs. Factors that affect suitability include roof orientation, angle, shading, and structural
                  integrity. During our free site assessment, we'll evaluate your roof to determine the optimal solar
                  solution for your property. If your roof isn't suitable, ground-mounted systems are also an option.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left text-lg font-semibold py-4">
                  What happens during a power outage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, if
                  you have a solar battery storage system, you can continue to power essential appliances and systems
                  during an outage. We offer various battery solutions that can be integrated with your solar system to
                  provide backup power when the grid goes down.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find answers specific to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Residential Solar</h3>
              <p className="text-gray-600 mb-4">Information about home solar installations, costs, and benefits.</p>
              <Button variant="outline">View FAQs</Button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Commercial Solutions</h3>
              <p className="text-gray-600 mb-4">Details about business and industrial solar applications.</p>
              <Button variant="outline">View FAQs</Button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-xl font-bold mb-2">Battery Storage</h3>
              <p className="text-gray-600 mb-4">Learn about energy storage options and backup power solutions.</p>
              <Button variant="outline">View FAQs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Contact us for personalized assistance with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
