<template>
    <Nav />
    <div class="pl-16 lg:pr-8 bg-[#1E1F21] text-white ">
        <Photo />
        <div class="lg:min-h-screen w-full pt-4 pl-8 lg:pl-96">

            <About />
            <hr class="border-gray-600" />

        </div>
    </div>
</template>

<script setup >
import Nav from "./components/nav/Nav.vue";
import Photo from "./components/nav/Photo.vue";
import About from "./components/pages/AboutView.vue";

import {
    onMounted
} from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

