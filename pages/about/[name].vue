<template>
    <div>
        <p>Name {{ name }}</p>
    </div>
</template>

<script setup>
const { name } = useRoute().params
</script>

<style scoped>

</style>