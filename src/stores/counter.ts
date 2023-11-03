import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const usePostStore = defineStore('posts', {
  state: () => ({
    /** @type {{ text: string, id: number, liked: boolean }[]} */
    posts: [],
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    allPosts(state) {
      return state.posts;
    }
  },
  actions: {
    // any amount of arguments, return a promise or not
    addPost(text: string) {
      // you can directly mutate the state
      this.posts.push({ text: text, id: this.nextId++, liked: false })
    },
    toggleLike(id: number) {
      const post = this.posts.filter(x => x.id == id)[0]
      post.liked = !post.liked;
    },
    deletePost(id: number) {
      this.posts = this.posts.filter(x => x.id != id)
    },
    editPost(id: number, text: string) {
      this.posts.find(x => x.id == id).text = text
    }
  },
}
)


export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'nasdsa',
    email: '',
  }),
  getters: {
    getName(state) {
      return state.name;
    },
    getEmail(state) {
      return state.email;
    },
  },
  actions: {
    setName(text: string) {
      this.name = text
    },
    setEmail(text: string) {
      this.email = text
    },
  },
}
)