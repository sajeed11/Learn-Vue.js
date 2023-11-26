<template >
    <div>
        <h1>{{ dumb }}</h1>
        <h1>{{ numb }}</h1>
    </div>
</template>
<script setup>
    const props = defineProps({
        dumb: String,
        numb: Number
    })
</script>
<style scoped>
    
</style>