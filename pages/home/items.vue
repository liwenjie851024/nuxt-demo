<template>
    <div class="container">
        This is the items page

        <br/>
        <br/>

        <div v-for="item in items" :key="`item-${item}`">
            <NuxtLink :to="`/home/item/${item}`">Go toItem - {{item}}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { items } = useItemsStore()
</script>

<style lang="scss" scoped>

</style>