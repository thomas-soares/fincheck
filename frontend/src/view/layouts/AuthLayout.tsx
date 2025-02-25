import { Outlet } from 'react-router-dom'
import { Logo } from '../components/Logo'

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-1/2 h-full flex items-center">
                <Logo className="h-6 text-gray-500" />

                <div className='w-full max-w-md bg-red-500 px-8 lg:px-0'>
                    <Outlet />
                </div>
            </div>
            <div className='w-1/2 h-full justify-center'>
                <img src={illustration} className="object-cover w-full h-full" alt="" />
            </div>
        </div>
    )
}