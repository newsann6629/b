<template>
    <div class="bg-gray-300 w-screen h-screen">
        <div class="flex bg-blue-700 h-60 w-screen">
            <div>
                <img class="flex w-20 h-20 rounded-full px-2 py-2" src="" alt="">
            </div>
            <div class="flex text-3xl justify-center text-center items-center text-white w-full h-full">
                <label>ข้อมูลส่วนตัว</label>
            </div>
        </div>

        <div class="bg-white p-6 mt-2 rounded-md">
            <div class="text-center text-3xl">
                <label class="font-bold">แก้ไขข้อมูล</label>
            </div>

            <form @submit.prevent="profile(data)">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label>ชื่อ</label>
                        <input v-model="data.username" class="input-field" type="text" required>
                    </div>

                    <div>
                        <label>รหัสผ่าน</label>
                        <input v-model="data.password" class="input-field" type="password" required>
                    </div>

                    <div>
                        <label>Email</label>
                        <input v-model="data.email" class="input-field" type="email" required>
                    </div>

                    <div>
                        <label>เบอร์โทร</label>
                        <input
                            v-model="data.phone"
                            class="input-field"
                            type="text"
                            pattern="[0-9]{10}"
                            maxlength="10"
                            required
                        >
                    </div>

                    <div>
                        <label>เลขบัตรประชาชน</label>
                        <input
                            v-model="data.czid"
                            class="input-field"
                            type="text"
                            pattern="[0-9]{13}"
                            maxlength="13"
                            required
                        >
                    </div>

                    <div>
                        <label>วันเกิด</label>
                        <input v-model="data.birthday" class="input-field" type="date">
                    </div>

                    <div>
                        <label>เงินเดือน</label>
                        <input v-model="data.salary" class="input-field" type="number" required>
                    </div>

                    <div>
                        <label>ตำแหน่ง</label>
                        <select v-model="data.position" class="input-field" required>
                            <option :value="1">ครู</option>
                            <option :value="2">ผู้บริหาร</option>
                        </select>
                    </div>

                    <div>
                        <label>วิทยฐานะ</label>
                        <select v-model="data.level" class="input-field" required>
                            <option :value="1">ไม่มี</option>
                            <option :value="2">ชำนาญการ</option>
                            <option :value="3">ชำนาญการพิเศษ</option>
                            <option :value="4">เชี่ยวชาญ</option>
                            <option :value="5">เชี่ยวชาญพิเศษ</option>
                        </select>
                    </div>

                    <div>
                        <label>แผนก</label>
                        <select v-model="data.department" class="input-field" required>
                            <option :value="1">ไม่มี</option>
                            <option :value="2">การตลาด</option>
                            <option :value="3">เทคโนโลยีสารสนเทศ</option>
                            <option :value="4">บัญชี</option>
                        </select>
                    </div>
                </div>

                <div class="mt-3">
                    <button class="btn-blue">บันทึกข้อมูล</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { userauth } from "../../../composables/user"
const { profile,getprofile } = userauth()
const data = ref({})



const loaddata = async() => {
    const res = await getprofile()
    data.value = res[0]
    console.log(data.value)
}

onMounted(() => {
    loaddata()
})
</script>


<style scoped>

</style>