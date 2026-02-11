<template>
    <div class="">
        <div class="flex justify-center w-screen h-screen">
            <div v-if="form.length >= 1" class="">
                <div>
                    <label for="" class="head border-l-blue">แบบฟอร์มประเมินตนเอง</label>
                </div>
                <div class="card mt-3" v-for="sec,i in form" :key="sec.section_id">
                    <div>
                        <label for="" class="head"> {{ i + 1 }} . {{ sec.section }}</label>
                    </div>
                    <div v-for="ind,j in sec.indicators" :key="ind.section_id" class="card-t-blue mt-3">
                        <div>
                            <label for="" class="text-2xl"> {{ i + 1 }} . {{ j + 1 }} {{ ind.indicator }}</label>
                        </div>
                        <div>
                            <label for="" class="label">{{ ind.detail }}</label>
                        </div>

                        <div v-if="ind.type == '1234'">
                            <select name="" id="" class="input-field" v-model="score[ind.indicator_id]">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div v-if="ind.type == 'yes/no'">
                            <div class="">
                                <input type="radio" name="" id="" value="yes" v-model="score[ind.indicator_id]">
                                <label for="" class="px-3">มี</label>
                                <input type="radio" name="" id="" value="no" v-model="score[ind.indicator_id]"> 
                                <label for="" class="px-3">ไม่มี</label>
                            </div>
                        </div>

                        <div v-if="ind.freq == '1'" class="mt-3">
                            <input type="file" name="" @change="e => onchange(e, ind.indicator_id)" id="" class="input-field">
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn-blue" @click="sentform(score,files,time)">
                        ส่งแบบประเมิน
                    </button>
                </div>
            </div>
            <div v-if="form.length == 0">
                <div class="border-dashed border-2 p-10">
                    <label for="" class="label">ไม่มีแบบฟอร์มการประเมินในเวลานี้</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { userauth } from '#imports'

const { gettime,getform,sentform } = userauth()
const time = ref({})
const form = ref([])

const score = ref({})
const files = ref([])

const test = () => {
    console.log(files.value)
}

function onchange(e,section_id){
    files.value[section_id] = e.target.files[0]
}

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

const loaddata = async() => {
    const t = await gettime()
    time.value = t[0]
    const res = await getform(time.value)
    form.value = mapdata(res[1],res[0])
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>