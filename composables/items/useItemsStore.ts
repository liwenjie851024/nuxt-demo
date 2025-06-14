import { defineStore } from 'pinia'

export const useItemsStore =  defineStore('itemsStore', {
    state: () => ({
        items: [
            'apple', 'orange', 'picha', 'banana', 'grape'
        ],
    }),
})