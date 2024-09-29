import { Linkedin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'
import { GithubLogo } from '@phosphor-icons/react'

interface Props {
	currentPath: string
}

export function Header({ currentPath }: Props) {
	return (
		<header className='flex justify-between items-center'>
			<h3 className='text-3xl'>
				Marcelo Alvarez
			</h3>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Button asChild size='lg' variant='link' className={cn(currentPath === '/' && 'font-extrabold')}>
							<NavigationMenuLink href='/'>
								Home
							</NavigationMenuLink>
						</Button>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Button asChild size='lg' variant='link'>
							<NavigationMenuLink href='/works'>
								Works
							</NavigationMenuLink>
						</Button>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Button asChild size='lg' variant='link'>
							<NavigationMenuLink href='/about'>
								About
							</NavigationMenuLink>
						</Button>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className='gap-2 flex'>
				<Button asChild variant='ghost'>
					<a href='https://github.com/mar-alv' target='_blank'>
						<GithubLogo size={16} />
					</a>
				</Button>

				<Button asChild variant='ghost'>
					<a href='https://www.linkedin.com/in/marcelo-santos-alvarez/' target='_blank'>
						<Linkedin size={16} />
					</a>
				</Button>
			</div>
		</header>
	)
}
