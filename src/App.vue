<template>
    <Nav />
    <div class="pl-16 lg:pr-8 bg-[#1E1F21] text-white ">
        <!-- photo -->
        <Photo />
        <!-- Pages -->
        <div class="lg:min-h-screen w-full pt-4 pl-8 lg:pl-96">
            <About />
            <hr class="border-gray-600" />
            <Services />
            <hr class="border-gray-600" />
            <Projects />
            <hr class="border-gray-600" />
            <Contact />
        </div>
    </div>
</template>

<script setup >
import Nav from "@/components/nav/Nav.vue";
import Photo from "@/components/nav/Photo.vue";
import About from "@/components/pages/AboutView.vue";
import Services from "@/components/pages/ServicesView.vue";
import Projects from "@/components/pages/ProjectsView.vue";
import Contact from "@/components/pages/ContactView.vue";

import {
    onMounted
} from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

