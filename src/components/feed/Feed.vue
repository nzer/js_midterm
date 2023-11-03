<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import { RouterLink } from 'vue-router'
import {usePostStore} from '../../stores/counter'

const newPostText = ref('');
const editingPostId = ref(-1);
const postStore = usePostStore()
const submitNewPost = () => {
    if (editingPostId.value == -1 && newPostText.value && newPostText.value != '') {
        postStore.addPost(newPostText.value)
    }
    else {
        postStore.editPost(editingPostId.value, newPostText.value)
        editingPostId.value = -1;
        newPostText.value = ''
    }
}
const editPost = (id: number, text: string) => {
    editingPostId.value = id
    newPostText.value = text
}
</script>

<template>
    <div class="newPost">
        <Textarea v-model="newPostText" rows="5" cols="30" />
        <Button label="Submit" v-if="editingPostId == -1" @click="submitNewPost" />
        <Button label="Save" v-if="editingPostId != -1" @click="submitNewPost" />
    </div>
    <div class="content">
        <div v-for="item in postStore.allPosts">
            <RouterLink :to="`/post/${item.id}`" >
                 <p>{{ item.text }}</p>
            </RouterLink>
            <br>
            <Button label="Like" v-if="!item.liked" @click="postStore.toggleLike(item.id)" />
            <Button label="Unlike" v-if="item.liked" @click="postStore.toggleLike(item.id)" />
            <Button label="Edit" @click="editPost(item.id, item.text)" />
            <Button label="Delete" @click="postStore.deletePost(item.id)" />
        </div>
    </div>
</template>

<style scoped>
div.content > div {
    border: 4px solid #60e111;
    margin: 8px 12px;
}
div.content > div > * {
    margin: 8px 12px;
}
a p {
    color: #000;
    margin: 0 8px;
}
</style>