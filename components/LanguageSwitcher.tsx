'use client'

import { useRouter, usePathname } from 'next/navigation'
import { i18n } from '@/lib/i18n'

const LanguageSwitcher = ({ currentLang }: { currentLang: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLang: string) => {
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPathname)
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-primary hover:border-primary/80 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale === 'en' ? 'English' : '中文'}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default LanguageSwitcher

