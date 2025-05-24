const schema = z.object({
    email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),

})

type FormData = z.infer<typeof schema>;

const handleSubmit = hookFormSubmit(async (data) => {
    try {
        await mutateAsync(data);
    } catch {
        toast.error('Credenciais inválidas!')
    }
})

return { handleSubmit, register, errors }