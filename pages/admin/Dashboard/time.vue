<template>
    <div>
        <div class="px-3">
            <div class="mt-3">
                <label for="" class="border-l-blue font-bold text-3xl">กำหนดระยะเวลาการประเมิน</label>
            </div>
            <div class="card">
                <div class="card-t-blue">
                        <div>
                            <div class="mt-3">
                                <label for="">เริ่ม</label>
                                <input type="datetime-local" name="" id="" class="input-field">
                            </div>
                            <div class="mt-3">
                                <label for="">ปิด</label>
                                <input type="datetime-local" name="" id="" class="input-field">
                            </div>
                        </div>
                    </div>
                <div>
                    <button type="submit" class="btn-blue mt-3">
                        บันทึก
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '../../../composables/admin';

const { gettime } = adminauth()

const start = ref("")
const expire = ref("")

const TH = (datestr) => {
  if (!datestr) return ""
  return new Date(datestr).toLocaleDateString("th-TH")
}

const loaddata = async() => {
    const t = gettime()
    console.log(t.value)
}

onMounted(() => {
    loaddata()
})

</script>

<style lang="scss" scoped>

</style>