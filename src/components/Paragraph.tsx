import { cn } from '@/lib/utils'

type ParagraphProps = {
  size?: 'sm' | 'base'
  color?: 'gray' | 'dark-gray' | 'black' | 'primary' | 'white'
  children: React.ReactNode
  className?: string
}

export default function Paragraph({
  size = 'base',
  color = 'black',
  children,
  className
}: ParagraphProps) {
  return (
    <p
      className={cn(
        {
          'text-[10px] md:text-xs lg:text-sm': size === 'sm',
          'text-sm md:text-base lg:text-lg': size === 'base',
          'text-primary': color === 'primary',
          'text-black': color === 'black',
          'text-gray-500': color === 'dark-gray',
          'text-gray-400': color === 'gray',
          'text-white': color === 'white'
        },
        className
      )}
    >
      {children}
    </p>
  )
}
