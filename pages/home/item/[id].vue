<template>
    <div class="container">
        Item id: {{ id }}

        <br/>
        <br/>

        <button @click="$router.back()">Go back</button>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute()
    const id = route.params.id
</script>

<style scoped>
    button {
        padding: 10px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>