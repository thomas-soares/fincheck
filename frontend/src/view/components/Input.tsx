export function Input({ placeholder, ...props }: InputProps) {
    return (
        <div className="relative">
            <input {...props} className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]" />
        
            <label className="absolute left-[13px] top-3.5">
                {placeholder}
            </label>
        </div>
    )
}