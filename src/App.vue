<template>
    <Nav />
    <div class="pl-16 lg:pr-8 bg-[#1E1F21]">
        <Photo/>
    </div>
</template>

<script setup >
import Nav from "./components/nav/Nav.vue";
import Photo from "./components/nav/Photo.vue";
import {
        onMounted
    } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

