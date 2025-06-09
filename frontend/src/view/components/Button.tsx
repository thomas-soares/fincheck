interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props}: ButtonProps) {
    return (
        <button {...props} className={cn("bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white")}></button>
    )
}