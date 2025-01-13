import { getDictionary } from '@/lib/dictionary'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function PrivacyPolicy({ params }: PageProps) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{dict.privacyPolicy.title}</h1>
        <div className="prose max-w-none">
          {dict.privacyPolicy.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

