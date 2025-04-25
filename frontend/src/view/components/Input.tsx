export function Input = forwardRef<HTMLInputElement, InputProps>({ placeholder, name, ...props }: InputProps) {
    return (
        <div className="relative">
            <input {...props} name={name} id={inputId} className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800" />
        
            <label htmlFor={inputId} className="absolute left-[13px] top-3.5 pointer">
                {placeholder}
            </label>
        </div>
    )
}