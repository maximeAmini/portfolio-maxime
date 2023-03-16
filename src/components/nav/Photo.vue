<template>
    <!-- photo -->
    <div
        class="box overflow-hidden w-full drop-shadow-2xl lg:w-1/4 bg-[url('./img/photo.png')] bg-no-repeat bg-bottom shadow-lg lg:fixed lg:h-screen animate-wipe-enter">
        <div class="mt-8 pb-12 h-full text-center flex flex-wrap justify-center ">
            <div class="w-full">
                <h1 class="w-full text-4xl font-bold" style="font-family: 'Barnacle Boy', sans-serif;">
                    <!-- name -->
                    <span class="inline-block animate-show-name text-7xl">
                        <HoverLettre lettre="M" />
                    </span>
                    <span class="inline-block animate-show-name text-7xl" style="animation-duration: 1.1s;">
                        <HoverLettre lettre="a" />
                    </span>
                    <span class="inline-block animate-show-name text-7xl" style="animation-duration: 1.2s;">
                        <HoverLettre lettre="x" />
                    </span>
                    <span class="inline-block animate-show-name text-7xl" style="animation-duration: 1.3s;">
                        <HoverLettre lettre="i" />
                    </span>
                    <span class="inline-block animate-show-name text-7xl" style="animation-duration: 1.4s;">
                        <HoverLettre lettre="m" />
                    </span>
                    <span class="inline-block animate-show-name text-7xl" style="animation-duration: 1.5s;">
                        <HoverLettre lettre="e" />
                    </span>
                    <br />
                    <!-- second name -->
                    <span class="inline-block animate-show-name">
                        <HoverLettre lettre="A" />
                    </span>
                    <span class="inline-block animate-show-name">
                        <HoverLettre lettre="m" />
                    </span>
                    <span class="inline-block animate-show-name">
                        <HoverLettre lettre="i" />
                    </span>
                    <span class="inline-block animate-show-name">
                        <HoverLettre lettre="n" />
                    </span>
                    <span class="inline-block animate-show-name">
                        <HoverLettre lettre="i" />
                    </span>
                </h1>
                <h2 class="w-full text-lg text-[#fd6800] font-extrabold">Web Devlopper</h2>
            </div>
            <div class="mt-auto w-full text-xl">
                <a href="https://web.facebook.com/profile.php?id=100088863112649" target="_blank" ><i
                        class="hover:scale-125 hover:text-[#139CF8] ease-in-out duration-300 fa-brands fa-facebook-f"></i></a>
                <a href="http://www.linkedin.com/in/makhlouf-amini-%200b115619a/" target="_blank" ><i
                        class="hover:scale-125 hover:text-[#0961B8] ease-in-out duration-300 ml-6 fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/maximeAmini" target="_blank" ><i
                        class="hover:scale-125 hover:text-[#1A1D21] ease-in-out duration-300 ml-6 fa-brands fa-github"></i></a>
                <a href="#" target="_blank" ><i
                        class="hover:scale-125 hover:text-[#1C99E6] ease-in-out duration-300 ml-6 fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import HoverLettre from "@/components/layouts/HoverLetter.vue";
export default ({
    components: {
        HoverLettre
    },
})
</script>
