<template>
    <div>
        <h1>Product</h1>
        {{ products }}
        <ul v-if="products?.data">
            <li v-for="(item, index) in products.data" :key="index">{{ item.name }}</li>
        </ul>
        <button @click="fetchNew">Refresh Data</button>
    </div>
</template>

<script setup>

const runTimeConFig = useRuntimeConfig();
//const products = ref([])

//console.log(runTimeConFig.public.appSecret)
//console.log(runTimeConFig.public.baseUrl)

/*onMounted(()=> {
    fetch(`${runTimeConFig.public.baseUrl}/products`, {
        headers: {
            Authorization: `Bearer ${ runTimeConFig.public.appSecret }`
        }
    }).then(res => res.json).then(data => products.value = data)
})*/

const { data: products, error } = await useFetch(`${runTimeConFig.public.baseUrl }/products?size=10&search_keyword=Web+app+with`, {
    headers: {
        Authorization: `Bearer ${ runTimeConFig.public.appSecret }`
    }
})

</script>

<style scoped>

</style>