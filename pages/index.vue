<template>
    <div>
        <h1>This is a homepage</h1>
    </div>
</template>

<script setup>
  setTimeout(()=>{
    navigateTo('/about', { replace: true})
  }, 5000)
</script>

<style scoped>

</style>