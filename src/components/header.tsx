import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

interface Props {
  currentPath: string
}

const navLinks = [
  {
    href: '/',
    label: 'Home'
  }
  // TODO: uncomment once these pages are done
  /* {
    href: '/works',
    label: 'Works'
  },
  {
    href: '/about',
    label: 'About'
  } */
]

export function Header({ currentPath }: Props) {
  return (
    <header className='flex justify-between items-center'>
      <h3 className='text-4xl'>Marcelo Alvarez</h3>

      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((navLink) => (
            <NavigationMenuItem>
              <Button
                asChild
                size='lg'
                variant='link'
                className={cn(
                  'text-3xl text-amber-900',
                  currentPath === navLink.href && 'font-extrabold'
                )}
              >
                <NavigationMenuLink href={navLink.href}>
                  {navLink.label}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* TODO: add language select */}
    </header>
  )
}
