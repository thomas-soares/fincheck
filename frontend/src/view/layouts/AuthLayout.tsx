import { Logo } from '../components/Logo'

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-1/2 h-full flex items-center">
            <Logo className="h-6 text-gray-500" />
            </div>
        </div>
    )
}