import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        isCollapse: true,
    }),
    actions: {
        updateCollapse(isCollapse: boolean) {
            this.isCollapse = isCollapse
        },
    },
})
