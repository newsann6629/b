<template>
    <div class="">
        <div class="flex justify-center w-screen h-screen">
            <div v-if="form.length >= 1" class="">
                <div>
                    <label for="" class="head border-l-blue">แบบฟอร์มสำหรับกรรมการ</label>
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

                        <div v-for="s in ind.scores" :key="s.indicator_id">
                            <div>
                                <label for="" class="label">คะแนนการประเมินตัวเอง</label>
                            </div>
                            <div>
                                <label for="" class="">{{ s.score }}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <input type="text" name="" v-model="comment" placeholder="comment" id="" class="input-field">
                </div>
                <div class="mt-3">
                    <input type="file" name="" id="" @change="onchange($event)" class="input-field">
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn-blue" @click="sentbform(score,files,time,comment,uid)">
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

const { gettime,getbform,sentbform } = userauth()
const time = ref({})
const form = ref([])

const files = ref({})
const comment = ref("")
const score = ref({})

const test =() =>{
    console.log(files.value)
}

function onchange(e){
    files.value = e.target.files[0]
}

const route = useRoute()
const uid = route.params.id

const mapdata = (section,form,score) => {
    const epMap = {}

    form.forEach(f => {
        epMap[f.section_id] = {...f,indicators:[]}
    });
    section.forEach(sec => {
        epMap[sec.section_id]?.indicators.push({...sec,scores:[]})
    });
    score.forEach(s => {
        Object.values(epMap).forEach(score => {
            score.indicators.find(i => (i.indicator_id == s.indicator_id))
            ?.scores.push({...s})
        });
    });

    return Object.values(epMap)
}

const loaddata = async() => {
    const t = await gettime()
    time.value = t[0]
    const res = await getbform(uid,time.value)
    form.value = mapdata(res[1],res[0],res[2])
    console.log(form.value)
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>