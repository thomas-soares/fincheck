interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button {...props} className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100"></button>
    )
}