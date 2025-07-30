'use client'

type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  )
}
