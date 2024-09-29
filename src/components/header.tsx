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
		</header>
	)
}
