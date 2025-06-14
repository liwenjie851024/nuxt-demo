<template>
    <div class="container">
        This is the index page

        <br/>
        <br/>

        <router-link to="/home/user">Go to Home -> User page</router-link>

        <br/>
        <br/>

        <router-link to="/home/items">Go to Home -> Items page</router-link>

        <br/>
        <br/>
        
        <router-link to="/login">Go to Login page</router-link>

        <br/>
        <br/>

        <p>$device.isDesktop: {{ $device.isDesktop }}</p>
        <p>$device.isMobile: {{ $device.isMobile }}</p>
        <p>$device.isTablet: {{ $device.isTablet }}</p>
        <p>$device.isMobileOrTablet: {{ $device.isMobileOrTablet }}</p>
        <p>$device.isDesktopOrTablet: {{ $device.isDesktopOrTablet }}</p>
        <p>$device.isIos: {{ $device.isIos }}</p>
        <p>$device.isWindows: {{ $device.isWindows }}</p>
        <p>$device.isMacOS: {{ $device.isMacOS }}</p>
        <p>$device.isApple: {{ $device.isApple }}</p>
        <p>$device.isAndroid: {{ $device.isAndroid }}</p>
        <p>$device.isFirefox: {{ $device.isFirefox }}</p>
        <p>$device.isEdge: {{ $device.isEdge }}</p>
        <p>$device.isChrome: {{ $device.isChrome }}</p>
        <p>$device.isSafari: {{ $device.isSafari }}</p>
        <p>$device.isCrawler: {{ $device.isCrawler }}</p>
        <p>$device.isSamsung: {{ $device.isSamsung }}</p>

    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss" scoped>

</style>