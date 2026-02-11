<template>
  <div class="p-6 bg-gray-100 w-full h-full flex justify-center">
    <div class="max-w-6xl mx-auto bg-white shadow rounded-xl p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">ผลการประเมิน</h1>

      <table class="min-w-full border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="border px-4 py-2 text-left w-12">#</th>
            <th class="border px-4 py-2 text-left">ชื่อผู้เข้าประเมิน</th>
            <th class="border px-4 py-2 text-left">ชื่อกรรมการผู้ประเมิน</th>
            <th class="border px-4 py-2 text-center">คะแนนตัวเอง</th>
            <th class="border px-4 py-2 text-center">คะแนนจากกรรมการ</th>
            <th class="border px-4 py-2 text-center">Comment จากกรรมการ</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(u, i) in user" :key="i" class="hover:bg-gray-50">
            <td class="border px-4 py-2">
              {{ i }}
            </td>

            <td class="border px-4 py-2">
              {{ u.user_username }}
            </td>

            <td class="border px-4 py-2">
              {{ u.board_username ?? "ยังไม่ระบุกรรมการ" }}
            </td>

            <td class="border px-4 py-2 text-center">
              {{ u.selfsum ?? "ยังไม่ประเมิน" }}
            </td>

            <td class="border px-4 py-2 text-center">
              <div v-if="!u.board_username">
                {{ "ยังไม่ประเมิน" }}
              </div>
              <div v-if="u.board_username">
                {{ u.boardsum }}
              </div>
            </td>

            <td class="border px-4 py-2 text-center">
              {{ u.comment ?? "ยังไม่ประเมิน" }}
            </td>
          </tr>

          <tr v-if="!user">
            <td colspan="6" class="text-center py-6 text-gray-500">
              ไม่มีข้อมูลการประเมิน
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { userauth } from '#imports';

const { getresult,gettime } = userauth()

const user = ref([])

const result = ref([])
const time = ref([])
// const map = (user,board,noboard) => {
//     const epMap = {}


//     user.forEach(u => {
        
//     });
// }

const loaddata = async() => {
    const t = await gettime()
    time.value = t[0]
    result.value = await getresult(time.value)    
};

onMounted(() => {
  loaddata();
});
</script>
