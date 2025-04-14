import { AnimatePresence as AnimatePresenceBase, motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

interface AnimatePresenceProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatePresence({
  children,
  className = '',
  delay = 0
}: AnimatePresenceProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }, [])

  return (
    <AnimatePresenceBase initial={isVisible}>
      {isVisible ? (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className={className}
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0 }}
          key='box'
          transition={{
            opacity: { delay },
            scale: { delay }
          }}
        >
          {children}
        </motion.div>
      ) : (
        <></>
      )}
    </AnimatePresenceBase>
  )
}
