export function Input({ placeholder, ...props }: InputProps) {
    return (
        <div className="relative">
            <input {...props} className="bg-white w-full rounded-lg border" />
        
            <label className="absolute left-3">
                {placeholder}
            </label>
        </div>
    )
}