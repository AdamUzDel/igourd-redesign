import { i18n } from './i18n'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  zh: () => import('@/dictionaries/zh.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  const validLocale = (['en', 'zh'] as const).includes(locale as 'en' | 'zh') ? locale as 'en' | 'zh' : i18n.defaultLocale
  return dictionaries[validLocale as keyof typeof dictionaries]()
}

