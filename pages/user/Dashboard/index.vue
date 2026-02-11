<template>
  <div class="min-h-screen">
    <div class="px-3">
        <div class="mt-3 border border-l-blue">
            <label for="" class="text-2xl font-bold">หน้าแรก</label>
            <i class="mdi mdi-home text-2xl"></i>
        </div>
    </div>
    <div class="mt-3 px-3">
        <div class="grid grid-cols-2 gap-4">
            <div>
               <label for="" class="text-2xl">การประเมินตนเอง</label>
               <div class="card-t-blue">
                <div v-if="time">
                    <div v-if="user.length >= 1">
                        <nuxt-link to="form" class="hover:text-gray-500">ทำแบบประเมิน</nuxt-link>
                    </div>
                    <div v-if="user.length == 0">
                        <div class="border-dashed border-2 p-10">
                            <label for="" class="label">ไม่มีแบบฟอร์มการประเมินในเวลานี้</label>
                        </div>
                    </div>
                </div>
                <div v-if="!time">
                    <div class="border border-dashed text-center text-gray-500 p-6 ">
                        แบบฟอร์มยังไม่เปิดให้ทำในเวลานี้
                    </div>
                </div>
               </div> 
            </div>
            <div>
                <label for="" class="text-2xl">กรรมการผู้รับการประเมิน</label>
                <div class="card-t-blue">
                    <div v-if="time">
                        <div v-if="board.length >= 1">
                            <div v-for="d in board" :key="d.id">
                                <nuxt-link :to="`user/${d.id}`">{{ d.username }}</nuxt-link>
                            </div>
                        </div>
                        <div v-if="board.length == 0">
                            <div class="border-dashed border-2 p-10">
                                <label for="" class="label">ไม่มีแบบฟอร์มการประเมินในเวลานี้</label>
                            </div>
                        </div>
                    </div>
                    <div v-if="!time">
                    <div class="border border-dashed text-center text-gray-500 p-6 ">
                        แบบฟอร์มยังไม่เปิดให้ทำในเวลานี้
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { userauth } from '#imports'

const user = ref([])
const board = ref([])
const time = ref({})

const { gettime,getbsign,getusign,getbuser } = userauth()

const loaddata = async() => {
    const store = useUserStore()
    const t = await gettime()
    time.value = t[0]
    user.value = await getusign(time.value)
    board.value = await getbuser(time.value)  
}

onMounted(() => {
    loaddata()
})
</script>

<style lang="scss" scoped>

</style>