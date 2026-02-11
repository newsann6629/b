<template>
    <div class="relative overflow-hidden h-screen">
        <div class="flex">
            <div class="bg-blue-600 h-screen">
                <div class="max-w-50">
                    <div class="mt-3 px-20">
                        <img src="" alt="" class="w-20 h-20 rounded-full">
                        <label for="" class="text-white">username</label>
                        <div>
                            <button type="submit" class="border text-white rounded-md px-2.5 py-2.5" @click="logout">Logout</button>
                        </div>
                    </div>
                    <div class="mt-3 px-3">
                        <nuxt-link to="/user/Dashboard/" class="text-white">หน้าแรก</nuxt-link>
                    </div>
                    <div class="mt-3 px-3">
                        <nuxt-link to="/user/Dashboard/" class="text-white">แก้ไขโปรไฟล์</nuxt-link>
                    </div>
                    
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '#imports';

const store = useUserStore()
const go = useRouter()

function logout(){
    store.Logout()
    go.push("/")
}
</script>

<style lang="scss" scoped>

</style>