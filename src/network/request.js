import axios from 'axios'
export function request(config) {
    const reqInterface = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 3000
    })
    reqInterface.interceptors.request.use((config) => { return config }, error => Promise.reject(error))
    reqInterface.interceptors.response.use(response => response.data, error => Promise.reject(error))
    return reqInterface(config)
}

