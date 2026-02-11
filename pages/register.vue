<template>
    <div class="bg-gray-300 w-screen h-screen ">
        <div class="flex bg-blue-700 h-60 w-screen ">
            <div>
                <img class="flex w-20 h-20 rounded-full px-2 py-2" src="" alt="">
            </div>
            <div class="flex text-3xl justify-center text-center items-center text-white w-full h-full">
                <label for="">ลงทะเบียนเพื่อใช้งานระบบ</label>
            </div>
        </div>
        <div class="bg-white p-6 mt-2 rounded-md">
            <div class="text-center text-3xl">
                <label class="font-bold" for="">ลงทะเบียน</label>
            </div>
            <form @submit.prevent="submit" action="">
                    <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="">ชื่อ</label>
                        <input v-model="data.username" required="" class="input-field" type="text">
                    </div>
                    <div>
                        <label for="">รหัสผ่าน</label>
                        <input v-model="data.password" required=""  class="input-field" type="password">
                    </div>
                    <div>
                        <label for="">email</label>
                        <input v-model="data.email" required="" class="input-field"type="email">
                    </div>
                     <div>
                        <label for="">เบอร์โทร</label>
                        <input v-model="data.phone" required="" pattern="[0-9]{10}" maxlength="10" class="input-field" type="text">
                    </div>
                     <div>
                        <label for="">เลขบัตรประชาชน</label>
                        <input v-model="data.czid" required="" pattern="[0-9]{13}" maxlength="13" class="input-field"type="text">
                    </div>
                <div>
                        <label for="">วันเกิด</label>
                        <input v-model="data.date" required=""  class="input-field" type="date">
                    </div>
                     <div>
                        <label for="">เงินเดือน</label>
                        <input v-model="data.sal" required="" class="input-field" type="number">
                    </div>
                     <div>
                        <label for="">ตำแหน่ง</label>
                        <select v-model="data.position" class="input-field" name="" id="">
                            <option :value="1">ครู</option>
                            <option :value="2">ผู้บริหาร</option>
                        </select>
                    </div>
                     <div>
                        <label for="">วิทยฐานะ</label>
                        <select v-model="data.level" class="input-field" name="" id="">
                            <option :value="1">ไม่มี</option>
                            <option :value="2">ชำนาญการ</option>
                            <option :value="3">ชำนาญการพิเศษ</option>
                            <option :value="4">เชี่ยวชาญ</option>
                            <option :value="5">เชี่ยวชาญพิเศษ</option>
                        </select>
                    </div>
                     <div>
                        <label for="">แผนก</label>
                        <select v-model="data.department" class="input-field" name="" id="">
                            <option :value="1">ไม่มี</option>
                            <option :value="2">การตลาด</option>
                            <option :value="3">เทคโนโลยีสารสนเทศ</option>
                            <option :value="4">บัญชี</option>
                        </select>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="btn-blue ">ลงทะเบียน</button>
                </div>
                <div class="mt-2">
                    <nuxt-link class="hover:text-blue-500" to="/">Log in</nuxt-link>
                </div>
                </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useauth } from "../composables/auth"

const { register } = useauth()

const data = ref({})

const submit = () => {
  register(data.value)
}
</script>


<style lang="scss" scoped>

</style>