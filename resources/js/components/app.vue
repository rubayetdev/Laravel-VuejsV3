<script setup>

import NavBar from "@/components/componentsFile/navBar.vue";
import FooterBar from "@/components/componentsFile/footerBar.vue";
</script>

<template>
<div>
    <nav-bar></nav-bar>
        <router-view></router-view>
    <footer-bar></footer-bar>
</div>
</template>

<style scoped>

</style>
