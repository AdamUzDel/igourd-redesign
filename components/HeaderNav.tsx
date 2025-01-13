'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  name: string
  href: string
}

type HeaderNavProps = {
  navigation: NavItem[]
  mobile?: boolean
  lang: string
}

const HeaderNav = ({ navigation, mobile = false }: HeaderNavProps) => {
  const pathname = usePathname()

  if (mobile) {
    return (
      <div className="overflow-x-auto whitespace-nowrap py-2 px-4 -mx-4">
        <div className="inline-flex space-x-4">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="hidden ml-10 space-x-8 lg:flex">
      {navigation.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-base font-medium ${
            pathname === link.href
              ? 'text-primary'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default HeaderNav

