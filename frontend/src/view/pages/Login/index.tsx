export function Login() {
    return (
        <div>
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold">Entre em sua conta</h1>
                <p className="space-x-2">
                    <span>Novo por aqui?</span>
                </p>
            </header>
            <form onSubmit={handleSubmit} className="mt-[60px]">

            </form>
        </div>
    )
}