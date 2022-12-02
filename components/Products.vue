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

/*const page = ref(1)

const { data: products, error, refresh, pending } = await useFetch(() => `/products?size=3&page=${page.value}`, {

    headers: {
        Authorization: `Bearer ${ runTimeConFig.public.appSecret }`
    },

    baseURL: runTimeConFig.public.baseUrl
})

function fetchNew() {
    page.value ++;
    refresh();
}*/

const page = ref(1)

const { data: products, error, refresh, prending } = await useAsyncData('products', () => {
//some code before api call
    return $fetch(`${runTimeConFig.public.baseUrl}/products?size=3&page=${page.value}`, {
        headers: {
            Authorization: `Bearer ${ runTimeConFig.public.appSecret }`
        }   
    })
})

function fetchNew() {
    page.value ++;
    refresh();
}

</script>

<style scoped>

</style>