import axios from "axios"

const app = axios.create({
    baseURL: "http://localhost:4003"
})

export { app };