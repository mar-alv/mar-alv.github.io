import { motion, animate } from 'motion/react'
import { useRef } from 'react'

export function BounceIcons({ icons }: { icons: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  function handleHover() {
    const children = containerRef.current?.children

    if (!children) return

    Array.from(children).forEach((child, index) => {
      animate(
        child,
        {
          // @ts-ignore
          transform: [
            'translateY(0)',
            'translateY(-20px)',
            'translateY(-20px)',
            'translateY(0)',
            'translateY(-6px)',
            'translateY(0)'
          ]
        },
        {
          duration: 0.6,
          delay: index * 0.1,
          easing: 'ease-out'
        }
      )
    })
  }

  return (
    <div
      ref={containerRef}
      className='flex text-3xl cursor-pointer'
      onMouseEnter={handleHover}
    >
      {icons.map((icon, i) => (
        <motion.div key={i}>{icon}</motion.div>
      ))}
    </div>
  )
}
