import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { getDictionary } from '@/lib/dictionary'
import HeaderNav from './HeaderNav'


interface PageProps {
  params: Promise<{ lang: string }>
  lang: string
}

const Header = async ({ params }: PageProps) => {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  const navigation = [
    { name: dict.navigation.home, href: `/${lang}` },
    { name: dict.navigation.productsServices, href: `/${lang}/products-services` },
    { name: dict.navigation.training, href: `/${lang}/training` },
    { name: dict.navigation.contactUs, href: `/${lang}/contact-us` },
    { name: dict.navigation.joinUs, href: `/${lang}/join-us` },
  ]

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-primary lg:border-none">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <span className="sr-only">iGourd</span>
              <Image
                src="/logo.svg"
                alt="iGourd Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <HeaderNav navigation={navigation} lang={lang} />
          </div>
          <div className="ml-10 space-x-4">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
        <div className="py-4 lg:hidden">
          <HeaderNav navigation={navigation} lang={lang} mobile />
        </div>
      </nav>
    </header>
  )
}

export default Header

