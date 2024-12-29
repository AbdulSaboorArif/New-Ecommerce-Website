import { forwardRef } from 'react'

interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children?: React.ReactNode
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onValueChange, className = '', children }, ref) => {
    return (
      <div ref={ref} className={`flex gap-2 ${className}`}>
        {children}
      </div>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'

interface RadioGroupItemProps {
  value: string
  id: string
  className?: string
}

export const RadioGroupItem = forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ value, id, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="radio"
        value={value}
        id={id}
        className={`sr-only peer ${className}`}
        {...props}
      />
    )
  }
)
RadioGroupItem.displayName = 'RadioGroupItem'

