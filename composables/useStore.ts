import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
    }),
})