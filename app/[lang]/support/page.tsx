import { getDictionary } from '@/lib/dictionary'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, HelpCircle, FileText, MessageCircle, Phone } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function SupportCenter({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {dict.support.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {dict.support.heroSubtitle}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <Input 
                type="search" 
                placeholder={dict.support.searchPlaceholder} 
                className="w-full rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                {dict.support.search}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.support.categories.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.support.categories.items.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-6 w-6 mr-2 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                  <Button variant="link" className="mt-4 p-0">
                    {dict.support.learnMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.support.faq.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.support.faq.items.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              {dict.support.viewAllFAQs}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{dict.support.contact.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                  {dict.support.contact.chat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{dict.support.contact.chat.description}</p>
                <Button>
                  {dict.support.contact.chat.cta}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-primary" />
                  {dict.support.contact.phone.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{dict.support.contact.phone.description}</p>
                <Button>
                  {dict.support.contact.phone.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

