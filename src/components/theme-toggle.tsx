import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

type Theme = 'theme-light' | 'dark' | 'system'

// TODO: remove from package switch and dropdown menu components
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('theme-light')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')

    setTheme(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  useEffect(() => {
    const isDark =
			theme === 'dark' ||
			(theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

	function handleToggleTheme() {
		setTheme(state => state === 'dark' ? 'theme-light' : 'dark')
	}

  return (
		<Button size='icon' variant='outline' onClick={handleToggleTheme}>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
  )
}
