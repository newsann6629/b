import { api } from "../composables/api";
import { req } from "../composables/request";

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
    })

    const getsec = async() => {
        const res = await http("admin/section")
        return res.data.data
    }

    const getindicator = async() => {
        const res = await http("admin/form")
        return res.data.data
    }


    return {
        bsign,
        getindicator,
        getsec,
        addform,
        addsec,
        getuser,
        usign,
    }
}