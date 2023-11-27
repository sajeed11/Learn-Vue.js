<template >
    <div @click="closeThis">
        <div>
            <h1>{{ dumb }}</h1>
            <slot>DEFAULT VLUE :D</slot>

            <div class="actions">
                <slot name="links"></slot>
            </div>

            <h2>{{ numb }}</h2>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        dumb: String,
        numb: Number
    })

function closeThis() {
        this.$emit('close')
    }
</script>
<style scoped>
    
</style>