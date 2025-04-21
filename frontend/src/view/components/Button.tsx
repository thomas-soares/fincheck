interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button {...props} className="bg-teal-900"></button>
    )
}