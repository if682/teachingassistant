import axios from "axios"

const SERVER = 'http://localhost:8077'

const axiosInstance = axios.create({
    baseURL: SERVER
})

export default axiosInstance