<template>
  <div class="bg-gray-300 w-screen h-screen">
    <!-- Header -->
    <div class="flex bg-blue-700 w-screen h-60">
      <div>
        <img class="flex w-20 h-20 rounded-full px-2 py-2" src="" alt="">
      </div>
      <div class="flex justify-center items-center text-center text-3xl text-white w-full h-full">
        <label>ระบบประเมินบุคลากรออนไลน์</label>
      </div>
    </div>

    <div class="grid grid-cols-2">

      <!-- ข่าวสาร -->
      <div class="px-2 py-2 font-bold text-2xl">
        ข่าวสารและประกาศ

        <div
          class="bg-white p-6 rounded-md shadow-lg mt-4"
          v-for="time in t"
          :key="time.time_id"
        >
          <div>{{  time.time }}</div>
          <div class="text-base font-normal">
            เริ่มการประเมิน {{ TH(time.start) }}
          </div>
          <div class="text-base font-normal">
            จบการประเมิน {{ TH(time.expire) }}
          </div>
        </div>

      </div>

      <!-- Login -->
      <div class="flex justify-end">
        <div class="px-2 py-2">
          <div class="bg-white p-6 mt-2 mb-2 rounded-md shadow-lg w-80">
            <div class="text-center mt-2 mb-2">
              <label class="font-bold text-xl">Log in</label>
            </div>

            <div class="mt-2 mb-2">
              <label>Username</label>
              <input v-model="u" class="border w-full p-1" type="text">
            </div>

            <div class="mt-2 mb-2">
              <label>Password</label>
              <input v-model="p" class="border w-full p-1" type="password">
            </div>

            <div>
              <button
                @click="login(u,p)"
                class="py-2 text-white text-xl bg-blue-600 hover:bg-blue-700 w-full"
              >
                เข้าสู่ระบบ
              </button>
            </div>
            <div>
                <nuxt-link class="hover:text-blue-500" to="register">ลงทะเบียน</nuxt-link>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useauth } from '../composables/auth'
import { userauth } from '../composables/user'

const { login } = useauth()
const { gettime } = userauth()

const u = ref("")
const p = ref("")
const t = ref([""])


const TH = (datestr) => {
  if (!datestr) return ""
  return new Date(datestr).toLocaleDateString("th-TH")
}

const lodetime = async () => {
  try {
    const res = await gettime()
    t.value = res.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  lodetime()
})
</script>

<style scoped>
</style>