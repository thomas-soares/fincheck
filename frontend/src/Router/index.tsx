import { BrowserRouter, Route } from "react-router-dom";


export function Router() {
    return (
        <BrowserRouter>
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
        </BrowserRouter>
    )
})