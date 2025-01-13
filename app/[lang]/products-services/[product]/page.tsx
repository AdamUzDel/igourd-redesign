import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PageProps {
  params: Promise<{ lang: string, product: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const lang = (await params).lang
  const product = (await params).product
  const dict = await getDictionary(lang)
  const productData = dict.productsServices.products.find(p => p.slug === product)

  if (!productData) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {productData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {productData.description}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={productData.image} 
                alt={productData.name} 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{dict.productsServices.productDetails}</h2>
              <ul className="space-y-4">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8">
                {dict.productsServices.contactSales}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.productsServices.keyBenefits}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.productsServices.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{dict.productsServices.ctaDescription}</p>
          <Button variant="secondary">
            {dict.productsServices.ctaButton}
          </Button>
        </div>
      </section>
    </div>
  )
}

