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
            ([indicator_id,id]) => ({
                indicator_id:indicator_id,
                score:id,
            })
        )
    }

    const sentform = (s,f,t) => req(async() => {
        const store = useUserStore()
        const file = f
        store.LoadUser()
        const fd = new FormData()
        const score = map(s)
        fd.append("score",JSON.stringify(score))
        fd.append("time_id",t.time_id)
        fd.append("id",store.id)

            Object.entries(f).forEach(([indicator_id,file]) => {
                fd.append("file_id",Number(indicator_id) || [])
                fd.append("file",file || [])
            });


        const res = await http.post("user/result",fd)
        console.log(res)
    })

    const getusign = async(t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("user/usersign",{
            headers:{
                id: store.id,
                time_id: t.time_id,
            }
        })
        return res.data.data
    }

    const getbsign = async(t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("user/boardsign",{
            headers:{
                id: store.id,
                time_id: t.time_id,
            }
        })
        return res.data.data
    }

    const getbuser = async(id) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http(`board/user/${store.id}`)
        return res.data.data
    }

    

    const getbform = async(id,t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("board/form",{
            headers:{
                board_id:store.id,
                user_id:id,
                time_id:t.time_id
            }
        })
        return res.data.data
    }


    const sentbform = (s,f,t,c,uid) => req(async() =>{
        const store = useUserStore()
        store.LoadUser()
        const fd = new FormData()
        const score = map(s)

        fd.append("board_id",store.id)
        fd.append("user_id",uid)
        fd.append("comment",c)
        fd.append("time_id",t.time_id)
        fd.append("score",JSON.stringify(score))
        fd.append("file",f || [])

        const res = http.post("board/result",fd)
        console.log(res)
    })

    const getresult = async(t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("user/result",{
            headers:{
                time_id: t.time_id,
                id:store.id
            }
        })
        return res.data.data
    }
    
    const getprofile = async() => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http(`user/profile/${store.id}`)
        return res.data.data
    }

    const profile = (data) => req(async() => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http.put("user/profile",{
            username: data.username,
            password: data.password,
            czid: data.czid,
            salary: data.salary,
            birthday: data.birthday,
            phone: data.phone,
            email: data.email,
            department: data.department,
            level: data.level,
            position: data.position
        })
    })

    return {
        getbuser,
        profile,
        getprofile,
        getresult,
        sentbform,
        getbform,
        getbsign,
        getusign,
        sentform,
        getform,
        gettime
    }
}