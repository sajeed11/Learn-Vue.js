<template lang="">
    <div>
        <h1>Hello Vue :)</h1>

        <button @click= "toggleShow">
            <span v-if="showBooks">Hide</span>
            <span v-else>Show</span>
        </button>

        <div v-if = "showBooks">
            <ul>
                <li v-for="book in books" :key="book.id">
                    {{ book.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            books: [
                { id: 1, name: '《算法导论》' },
                { id: 2, name: '《UNIX编程艺术》' },
                { id: 3, name: '《编程珠玑》' },
                { id: 4, name: '《代码大全》' },
            ],
            showBooks: true,
        }
    },

    methods: {
        toggleShow() {
            this.showBooks = !this.showBooks
        }
    }
}
</script>
<style lang="">
    
</style>