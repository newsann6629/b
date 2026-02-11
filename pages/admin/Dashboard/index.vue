<template>
    <div>
        <div class="px-3">
            <div class="mt-3">
                <label for="" class="border-l-blue text-3xl font-bold">มอบหมายการประเมิน</label>
            </div>
            <form action="" ref="formref" @submit.prevent="usign(uid)">
                <div class="card px-3">
                <select name="" id="" class="input-field" required="" v-model="uid">
                    <option :value="u.id" v-for="u in user" :key="u.id">{{ u.username }}</option>
                </select>
                <div class="mt-3">
                    <button type="submit" class="btn-blue">
                        บันทึก
                    </button>
                </div>
                </div>
            </form>

            <div class="card mt-3" v-if="usersign.length >= 1">
                <div class="grid grid-cols-5 gap-4">
                    <div class="card-t-blue w-full text-center" v-for="u in usersign" :key="u.id" @click="delusign(u.id)">
                        <div>
                            <label for="" class="label">{{ u.username }}</label>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '#imports'

const { getuser,usign,getusign,delusign } = adminauth()
const user = ref([])
const usersign = ref([])
const uid = ref("")
const formref = ref(null)
const loaddata = async() => {
    user.value = await getuser()
    usersign.value = await getusign()
    console.log(usersign.value)
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>