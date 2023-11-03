<script setup lang="ts">
import { storeToRefs } from 'pinia'
import InputText from 'primevue/inputtext';

import {useProfileStore} from '../../stores/counter'
const profileStore = useProfileStore()
const { name, email } = storeToRefs(profileStore)
</script>

<template>
    <h2>Edit profile</h2>
    <div class="form">
        Name:
        <InputText type="text" v-model="name" />
        Email:
        <InputText type="email" v-model="email" />
    </div>
</template>

<style scoped>
.form {

    display: flex;
    flex-direction: column;
}
</style>

  