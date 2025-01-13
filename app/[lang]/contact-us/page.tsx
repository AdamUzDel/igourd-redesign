import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function ContactUs({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {dict.contactUs.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {dict.contactUs.heroSubtitle} 
            <Link href={`/${lang}/support`} className="text-white underline hover:text-gray-200">
              {dict.contactUs.supportLink}
            </Link>
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">{dict.contactUs.getInTouch}</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{dict.contactUs.phone}</h3>
                    <p>{dict.contactUs.phoneNumber}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{dict.contactUs.email}</h3>
                    <p>{dict.contactUs.emailAddress}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{dict.contactUs.address}</h3>
                    <p>{dict.contactUs.addressDetails}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{dict.contactUs.businessHours}</h3>
                    <p>{dict.contactUs.businessHoursDetails}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">{dict.contactUs.sendMessage}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    {dict.contactUs.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    {dict.contactUs.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    {dict.contactUs.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block mb-2 font-medium">
                    {dict.contactUs.businessType}
                  </label>
                  <select
                    id="businessType"
                    multiple
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    {dict.contactUs.businessTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    {dict.contactUs.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {dict.contactUs.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50" id='locations'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{dict.contactUs.findUs}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573224776256!2d32.58426561475369!3d0.31933408539552234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c63%3A0x7ccb25d39f4c2a1!2sSerena%20Hotel%20Kampala!5e0!3m2!1sen!2sus!4v1673644401273!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.contactUs.faqTitle}</h2>
          <Accordion type="single" collapsible className="w-full">
            {dict.contactUs.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

