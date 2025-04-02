import { Outlet } from 'react-router-dom'
import { Logo } from '../components/Logo'

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-full h-full flex items-center justify-center flex-col gap-16">

                <div className='w-full max-w-md bg-red-500 px-8 lg:px-0'>
                    <Outlet />
                </div>
            </div>
            <div className='w-1/2 h-full justify-center'>
                <img src={illustration} className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]" alt="" />
            </div>
            <p className='text-gray-700'>Gerencie suas finanças</p>
        </div>
    )
}