<template>
    <div>
        <input type="text" name="" v-model="input1" id="" class="border" placeholder="input1">
        <input type="text" name="" v-model="input2" id="" class="border" placeholder="input2">
        <button type="submit" @click="login(input1,input2)" class="btn-blue">press</button>
    </div>
</template>

<script setup>
import { useauth } from '../composables/auth';

const {login} = useauth()

const input1 = ref("")
const input2 = ref("")


</script>

<style lang="scss" scoped>

</style>