<template>
    <div>
        <div class="px-3">
            <div class="mt-3">
                <label for="" class="border-l-blue text-3xl font-bold">มอบหมายการประเมิน</label>
            </div>
            <form action="" ref="formref" @submit.prevent="bsign(group)">
                <div class="card px-3">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <select name="" id="" class="input-field" v-model="group.user_id" required="">
                            <option :value="u.id" v-for="u in user" :key="u.id">{{ u.username }}</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" class="input-field" v-model="group.role" required="">
                            <option value="1">ประธาน</option>
                            <option value="2">กรรมการ</option>
                        </select>
                    </div>
                </div>
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
import { adminauth } from '#imports';

const { getuser,bsign } = adminauth()
const user = ref([])
const formref = ref(null)
const group = ref([])
const test = () =>{
    console.log(group.value)
}
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