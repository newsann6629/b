import { api } from "../composables/api";
import { req } from "../composables/request";
import { useUserStore } from "#imports";

export const userauth = () => {
    
    const http = api()

    const gettime = async() => {
        const res = await http("user/time")
        return res.data.data
    }

    const getform = async(t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("user/form",{
            headers:{
                token: store.token,
                time_id: t.time_id,
                id: store.id,
            }
        })
        return res.data.data
    }

    const map = (name) => {
        return Object.entries(name).map(
            ([form_id,s]) => ({
                indicator_id:form_id,
                score:s,
            })
        )
    }

    const sentform = (s,f,t) => req(async() => {
        const store = useUserStore()
        store.LoadUser()
        const fd = new FormData()
        const score = map(s)
        fd.append("score",JSON.stringify(score))
        fd.append("time_id",t.time_id)
        fd.append("id",store.id)


        Object.entries(f).forEach(([indicator_id,file]) => {
            fd.append("file_id",indicator_id)
            fd.append("file",file)
        });

        const res = await http.post("user/result",fd)
        console.log(res)
    })

    const getusign = async() => {
        const res = http("user/usersign")
        return res.data.data
    }

    const getbsign = async() => {
        const res = http("board/usersign")
        return res.data.data
    }

    return {
        getbsign,
        getusign,
        sentform,
        getform,
        gettime
    }
}