<template>
    <div>
        <h1>This is a homepage</h1>
        <Todo/>
        <Products/>
    </div>
</template>

<script setup>
  /*setTimeout(()=>{
    navigateTo('/about', { replace: true})
  }, 5000)*/
  useHead({
    title: "Nuxt vue demo",
    meta: [
        { name: 'description', content:'this is nuxt3 demo'},
        { property:'og:title', content: "this is og title"}
    ],
    link: [
        {real: 'stylesheet', href:"/styles.css"}
    ]
  })
</script>

<style scoped>

</style>