import { useUserStore } from "#imports";
import axios from "axios";

export const api = () => {
    const store = useUserStore()
    store.LoadUser()

    return axios.create({
        baseURL: "http://10.179.77.120:3000/api/",
        headers: {
            token: store.token
        }
    })
}