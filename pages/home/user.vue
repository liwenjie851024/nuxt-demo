<template>
    <div class="container">
        This is the user page

        <br/>
        <br/>

        <p>name: {{ name }}</p>
        <p>age: {{ age }}</p>
        <p>email: {{ email }}</p>
    </div>
</template>

<script setup lang="ts">
    const { name, age, email } = useStore()
</script>

<style lang="scss" scoped>

</style>