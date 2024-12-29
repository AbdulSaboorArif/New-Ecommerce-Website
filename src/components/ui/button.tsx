import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg' | 'icon'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'rounded-md font-medium transition-colors focus:outline-none'
    const variants = {
      default: 'bg-[#B88E2F] text-white hover:bg-[#A67E2A]',
      outline: 'border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F]/10'
    }
    const sizes = {
      default: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
      icon: 'p-2'
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

