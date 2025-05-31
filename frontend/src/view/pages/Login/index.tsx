export function Login() {
    const {handleSubmit, register, errors, isLoading } = useLoginController();

    return (
        <div>
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold">Entre em sua conta</h1>
                <p className="space-x-2">
                    <span>Novo por aqui?</span>
                </p>
            </header>
            <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
<Input type="email" placeholder="E-mail"  />
            </form>
        </div>
    )
}