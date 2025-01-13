import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, FileText, Phone } from 'lucide-react'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function Training({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {dict.training.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto">
            {dict.training.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{dict.training.programsTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">{dict.training.programsSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.training.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative">
                  <Image 
                    src={`/home_hero-BUtSJqLd.png`}
                    alt={video.title}
                    width={640}
                    height={360}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.subtitle}</p>
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-medium flex items-center"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    {dict.training.watchVideo}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Materials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{dict.training.supportMaterialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.training.supportMaterials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
                <FileText className="w-16 h-16 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-4">{material.title}</h3>
                <p className="text-gray-600 mb-6">{material.description}</p>
                <a 
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300"
                >
                  {dict.training.downloadPDF}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Training CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.training.additionalTrainingTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{dict.training.additionalTrainingDescription}</p>
          <Link 
            href={`/${lang}/contact-us`} 
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            {dict.training.contactUs}
          </Link>
        </div>
      </section>

      {/* Benefits of iGourd Training */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{dict.training.benefitsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.training.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
                <div className="text-primary mb-4">
                  {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>}
                  {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>}
                  {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>}
                </div>
                <h3 className="font-semibold text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{dict.training.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.training.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

