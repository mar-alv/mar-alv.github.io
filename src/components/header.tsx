import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Header({ children }: Props) {
	return (
		<header className='flex justify-between items-center'>
			<div>
				Logo
			</div>

			<div className='flex'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Documentation
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Work Experience
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				{children}
			</div>
		</header>
	)
}
