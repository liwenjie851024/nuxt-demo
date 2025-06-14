<template>
    <div class="container">
        This is the login page

        <br/>
        <br/>

        <button @click="$router.push('/home/items')">Go items</button>
    </div>

    <Footer></Footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    button {
        padding: 10px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>