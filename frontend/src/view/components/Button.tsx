interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props}: ButtonProps) {
    return (
        <button {...props} className={cn("bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100")}></button>
    )
}