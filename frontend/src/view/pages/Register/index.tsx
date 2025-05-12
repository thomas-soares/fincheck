export function Register() {
  const { errors, handleSubmit, register } = useRegisterController()

    return (
        <>
        <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Crie sua conta
        </h1>
        </header>

        <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
          <Input placeholder="Nome" error={errors.name?.message} {...register('name')} />
        </form>
        </>
    )
}