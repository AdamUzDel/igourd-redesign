import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { ShoppingCart, Zap, Settings, HeadphonesIcon } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function Home({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {dict.home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              {dict.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href={`/${lang}/products-services`} 
                className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {dict.home.exploreProducts}
              </Link>
              <Link 
                href={`/${lang}/contact-us`} 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {dict.home.contactSales}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.home.featuredProducts}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.home.products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-center">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.home.keyFeatures.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.home.keyFeatures.features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                {i === 0 && <ShoppingCart className="w-12 h-12 text-primary mb-4" />}
                {i === 1 && <Zap className="w-12 h-12 text-primary mb-4" />}
                {i === 2 && <Settings className="w-12 h-12 text-primary mb-4" />}
                {i === 3 && <HeadphonesIcon className="w-12 h-12 text-primary mb-4" />}
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.home.businessImpact.title}</h2>
            <p className="text-xl mb-10">{dict.home.businessImpact.description}</p>
            <Link 
              href={`/${lang}/products-services`} 
              className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {dict.home.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.home.valueProposition.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.home.valueProposition.points.map((point, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.home.testimonials.title}</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...dict.home.testimonials.quotes, ...dict.home.testimonials.quotes].map((quote, i) => (
                <div key={i} className="flex-none w-80 mx-4">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <p className="text-gray-600 mb-4">&ldquo;{quote.text}&rdquo;</p>
                    <div className="flex items-center">
                      <Image 
                        src={quote.avatar} 
                        alt={quote.author} 
                        width={40} 
                        height={40} 
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">{quote.author}</p>
                        <p className="text-sm text-gray-500">{quote.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.home.contact.title}</h2>
            <p className="text-xl mb-10">{dict.home.contact.description}</p>
            <Link 
              href={`/${lang}/contact-us`} 
              className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {dict.home.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

