<template>
    <div>
        <div class="px-3">
            <div class="mt-3">
                <label for="" class="border-l-blue font-bold text-3xl">กำหนดระยะเวลาการประเมิน</label>
            </div>
            <div class="card">
                <div class="grid grid-cols-2 gap-4">
                    <div class="card-t-blue">
                        <div>
                            <label for="">การประเมินรอบที่1</label>
                            <div class="mt-3">
                                <input type="datetime-local" name="" id="" class="input-field">
                            </div>
                            <div class="mt-3">
                                <input type="datetime-local" name="" id="" class="input-field">
                            </div>
                        </div>
                    </div>
                    <div class="card-t-blue">
                        <div>
                            <label for="">การประเมินรอบที่2</label>
                        </div>
                        <div class="mt-3">
                            <input type="datetime-local" name="" id="" class="input-field">
                        </div>
                        <div class="mt-3">
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

</script>

<style lang="scss" scoped>

</style>