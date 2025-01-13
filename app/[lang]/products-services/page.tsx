import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function ProductServices({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {dict.productsServices.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {dict.productsServices.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{dict.productsServices.productsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.productsServices.products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    href={`/${lang}/products-services/${product.slug}`} 
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    {dict.productsServices.learnMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{dict.productsServices.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.productsServices.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-xl mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/${lang}/products-services#${service.slug}`} 
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  {dict.productsServices.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.productsServices.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{dict.productsServices.ctaDescription}</p>
          <Link 
            href={`/${lang}/contact-us`} 
            className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {dict.productsServices.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}

