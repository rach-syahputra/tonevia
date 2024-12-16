import { cn } from '@/lib/utils'
import { JSX } from 'react'

type HeadingProps = {
  level: 1 | 2 | 3
  children: React.ReactNode
  className?: string
}

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={cn(
        'font-bold',
        {
          'text-2xl md:text-3xl lg:text-4xl': level === 1,
          'text-lg md:text-xl lg:text-2xl': level === 2,
          'text-base md:text-lg lg:text-xl': level === 3
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
