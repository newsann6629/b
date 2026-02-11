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
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '#imports'

const { getuser,usign } = adminauth()
const user = ref([])
const uid = ref("")
const formref = ref(null)
const loaddata = async() => {
    user.value = await getuser()
    console.log(user.value)
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>