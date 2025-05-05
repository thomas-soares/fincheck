import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000'
})

httpClient.post('http://localhost:3000/auth/signin')
httpClient.get('http://localhost:3000/')
