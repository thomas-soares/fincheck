const schema = z.object({
    email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),

})

type FormData = z.infer<typeof schema>;