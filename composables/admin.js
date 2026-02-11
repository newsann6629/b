import { api } from "../composables/api";
import { req } from "../composables/request";
import { useUserStore } from "#imports";

export const adminauth = () => {
    
    const http = api()

    const usign = (id) => req(async() => {
        const res = http.post("admin/usersign",{
            id: id,
        })
        console.log(res)
    })

    const bsign = (g) => req(async() => {
        const res = http.post("admin/boardsign",{
            id:g.user_id,
            role:Number(g.role),
        })
        console.log(res)
    })

    const getuser = async() =>{
        const res = await http("admin/user")
        return res.data.data
    }

    const addsec = async(d) => req(async() => {
        const res = await http.post("admin/section",{
            section:d.section,
            weight:d.weight,
        })
        alert("เพิ่มสำเร็จ")
        window.location.reload()
    })

    const addform = async(f) => req(async() => {
        const res = await http.post("admin/indicator",{
            section_id:f.section_id,
            indicator:f.indicator,
            detail:f.detail,
            type:f.type,
            freq:f.file,
        })
        console.log(res)
        window.location.reload()
    })

    const getsec = async() => {
        const res = await http("admin/section")
        return res.data.data
    }

    const getindicator = async() => {
        const res = await http("admin/form")
        return res.data.data
    }

    const getusign = async() => {
        const res = await http("admin/usersign")
        return res.data.data
    }

    const getbsign = async() => {
        const res = await http("admin/boardsign")
        return res.data.data
    }

    const delusign = (id) => req(async() => {
        const res = await http.delete(`admin/usersign/${id}`)
        console.log(res)
        alert("ลบสำเร็จ")
        window.location.reload()
    })

    const delbsign = (id) => req(async() => {
        const res = await http.delete(`admin/boardsign/${id}`)
        console.log(res)
        alert("ลบสำเร็จ")
        window.location.reload()
    })

    const delsec = (id) => req(async() => {
        const res = await http.delete(`admin/section/${id}`)
        console.log(res)
        alert("ลบสำเร็จ")
        window.location.reload()
    })


    const delindicator = (id) => req(async() => {
        const res = await http.delete(`admin/indicator/${id}`)
        console.log(res)
        alert("ลบสำเร็จ")
        window.location.reload()
    })

    const getresult = async(t) => {
        const store = useUserStore()
        store.LoadUser()
        const res = await http("admin/result",{
            time_id:t.time_id,
            id:store.id,
        })
        return res.data.data
    }

    const gettime = async() => {
        const store = useUserStore()
        store.LoadUser()
        const res = http("admin/time")
        return res.data.data
    }

    return {
        gettime,
        getresult,
        delindicator,
        delsec,
        delbsign,
        delusign,
        getbsign,
        getusign,
        bsign,
        getindicator,
        getsec,
        addform,
        addsec,
        getuser,
        usign,
    }
}