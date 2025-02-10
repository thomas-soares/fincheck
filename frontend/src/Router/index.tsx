import { BrowserRouter, Route } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div className="w-full bg-red-500 h-10"></div>
            <div>
                <nav className="w-[300px] bg-red-600"></nav>
            </div>
        </div>
    )
}

interface AuthGuardProps {
    isPrivate: boolean
}

function AuthGuard() {
    return <Outlet />
}

export function Router() {
    return (
        <BrowserRouter>
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
        </BrowserRouter>
    )
})