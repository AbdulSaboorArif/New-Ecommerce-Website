import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          ${className}`}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

