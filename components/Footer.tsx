import Link from 'next/link'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

const Footer = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang)

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/logo.svg"
              alt="iGourd Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm mt-3">{dict.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{dict.footer.resources}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${lang}/training`} className="text-sm hover:text-gray-300">{dict.footer.helpCenter}</Link></li>
                <li><Link href={`/${lang}/training`} className="text-sm hover:text-gray-300">{dict.footer.guides}</Link></li>
                <li><Link href={`/${lang}/training`} className="text-sm hover:text-gray-300">{dict.footer.tutorials}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${lang}/contact-us`} className="text-sm hover:text-gray-300">{dict.footer.contactUs}</Link></li>
                <li><Link href={`/${lang}/contact-us#sales`} className="text-sm hover:text-gray-300">{dict.footer.sales}</Link></li>
                <li><Link href={`/${lang}/contact-us#locations`} className="text-sm hover:text-gray-300">{dict.footer.locations}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">{dict.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          <Link href={`/${lang}/privacy-policy`} className="text-sm hover:text-gray-300 mt-4 md:mt-0">{dict.footer.privacyPolicy}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

