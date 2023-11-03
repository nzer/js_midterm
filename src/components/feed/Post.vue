<script setup lang="ts">
import Button from 'primevue/button';
import { useRouter, useRoute } from 'vue-router'
import {usePostStore} from '../../stores/counter'
const postStore = usePostStore()
const id: number = +useRoute().params.id
const item = postStore.allPosts.find(x => x.id == id)
console.log(id)
</script>

<template>
    <p>{{ item.text }}</p>
    <br>
    <Button label="Like" v-if="!item.liked" @click="postStore.toggleLike(item.id)" />
    <Button label="Unlike" v-if="item.liked" @click="postStore.toggleLike(item.id)" />
</template>

<style scoped>
div.content > div {
    border: 4px solid #60e111;
    margin: 8px 12px;
}
div.content > div > * {
    margin: 8px 12px;
}
</style>