interface SignupParams {
    name: string;
    email: string;
    password: string
}

async function signup(params: SignupParams) {
    const { data } = await httpClient.post<{ accessToken: string }>

    return data;
}