<template>
    <div>
        <div class="px-3">
            <div class="mt-3">
                <div class="flex">
                    <label for="" class="head border-l-blue">สร้างแบบฟอร์มการประเมิน</label>
                    <div class="">
                        <button type="submit" class="btn-blue" @click="modelh = !modelh">เพิ่มหัวข้อ</button>
                    </div>
                    <div>
                        <button type="submit" class="btn-yellow" @click="modelf = !modelf">เพิ่มแบบฟอร์ม</button>
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-t-blue mt-3" v-for="sec,i in adminform" :key="sec.section_id">
                    <div>
                        <label for="" class="head"> {{ i + 1 }} {{ sec.section }}</label>
                    </div>
                    <div v-for="ind,j in sec.indicators" :key="ind.section_id">
                      <div>
                        <label for="" class="text-2xl"> {{ i + 1  }} . {{ j + 1 }} {{ ind.indicator }}</label>
                      </div>
                      <div class="px-16">
                        <label for="">{{ ind.detail }}</label>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="modelf" class="model-overlay">
            <div class="card-t-blue">
                <div>
                    <label for="" class="head border-t-blue">เพิ่มแบบฟอร์มการประเมิน</label>
                </div>
                <div class="mt-3">
                    <label for="" class="label">เลือกหัวข้อการประเมิน</label>
                    <select name="" id="" class="input-field" v-model="form.section_id">
                        <option :value="sec.section_id" v-for="sec in newsec" :key="sec.section_id">{{ sec.section }}</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="" class="label">ตัวชี้วัด</label>
                    <input type="text" name="" class="input-field" id="" placeholder="" v-model="form.indicator">
                </div>
                <div class="mt-3">
                    <label for="" class="label">ลายละเอียด</label>
                    <input type="text" name="" class="input-field" id="" placeholder="" v-model="form.detail">
                </div>
                <div class="mt-3">
                    <label for="" class="label">เลือกรูปแบบการประเมิน</label>
                    <select name="" id="" class="input-field" v-model="form.type">
                        <option value="1234">รูปแบบ scale</option>
                        <option value="yes/no">รูปแบบ มี/ไม่มี</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="" class="label">ต้องแนบหลักฐานไหม</label>
                    <select name="" id="" class="input-field" v-model="form.file">
                        <option value="1">ต้องแนบ</option>
                        <option value="0">ไม่ต้องแนบ</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="mt-3">
                        <button type="submit" @click="addform(form)" class="btn-green">
                            บันทึก
                        </button>
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn-red" @click="modelf = !modelf">
                            ยกเลิก
                        </button>
                    </div>
                </div>
            </div>  
        </div>

        <div v-if="modelh" class="model-overlay">
            <div class="card-t-blue">
                <div>
                    <label for="" class="head border-t-blue">เพิ่มหัวช้อการประเมิน</label>
                </div>
                <div class="mt-3">
                    <input type="text" name="" class="input-field" v-model="section.section" id="" placeholder="หัวข้อการประเมิน">
                </div>
                <div class="mt-3">
                    <input type="number" name="" class="input-field" v-model="section.weight" id="" placeholder="น้ำหนักการให้คะแน">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="mt-3">
                        <button type="submit" class="btn-green" @click="addsec(section)">
                            บันทึก
                        </button>
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn-red" @click="modelh = !modelh">
                            ยกเลิก
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { adminauth } from '#imports';

const {addsec,getsec,addform,getindicator,delindicator} = adminauth()

const form = ref({
    section_id: "",
    indicator: "",
    detail: "",
    type: "",
    file: "",

})

const newsec = ref([])
const adminform = ref([])


const section = ref({
    section: "",
    weight: "",
})

// const mapdata = (section,form) => {
//     const epMap = {}

//     form.forEach(f => {
//         epMap[f.section_id] = {...f,sections:[]}
//     });
//     section.forEach(sec => {
//         epMap[sec.section_id]?.sections.push({...sec})
//     });
//     return Object.values(epMap)
// }

const mapdata = (section,form) => {
    const epMap = {}

    form.forEach(f => {
        epMap[f.section_id] = {...f,indicators:[]}
    });
    section.forEach(sec => {
        epMap[sec.section_id]?.indicators.push({...sec})
    });
    return Object.values(epMap)
}


const modelf = ref(false)
const modelh = ref(false)

const loaddata = async() => {
    newsec.value = await getsec()
    const res = await getindicator()
    adminform.value = mapdata(res[1],res[0])
    console.log(res)
    console.log(adminform.value)
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>