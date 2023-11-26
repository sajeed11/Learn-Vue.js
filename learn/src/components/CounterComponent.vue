<template lang="">
    <div>
        <h1>Hello Vue :)</h1>

        <button @click= "toggleShow">
            <span v-if="showBooks">Hide</span>
            <span v-else>Show</span>
        </button>

        <div v-if = "showBooks">
            <ul>
                    <li v-for="book in books" :key="book.id" :class="{is_fav: book.isFav, is_not_fav: !book.isFav}" @click="toggleIsFav(book)">
                            {{ book.name }}
                    </li>
            </ul>
        </div>

        <input type="text" ref="name">
        <button @click="addName">Add Name</button>
    </div>
</template>
<script setup>

    import { ref } from 'vue'

const books = ref(
    [
        { id: 1, name: '《算法导论》', isFav: true },
        { id: 2, name: '《UNIX编程艺术》', isFav: false },
        { id: 3, name: '《编程珠玑》', isFav: true },
        { id: 4, name: '《代码大全》', isFav: false },
    ]
);

const showBooks = ref(true);

const name = ref(null)

function toggleShow() {
    showBooks.value = !showBooks.value;
}

function toggleIsFav(book) {
    book.isFav = !book.isFav;
}

function addName() {
    console.log(name.value.value);
}
</script>
<style>
    .is_fav {
        color: red;
    }

    .is_fav::before {
        content: '❤️';
    }

    .is_fav::after {
        content: '❤️';
    }

    .is_not_fav {
        color: #ccc;
    }

    .is_not_fav::before {
        content: '🤍';
    }

    .is_not_fav::after {
        content: '🤍';
    }
</style>