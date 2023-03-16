<template>
    <nav class="bg-[#1E1F21] fixed h-screen pb-4 flex flex-wrap z-40 text-xl #1A1B1D" :class="show ? 'w-52' : 'w-16'">
        <!-- Bars -->
        <div class="w-full text-2xl">
            <div class="w-full h-16 bg-[#FD8D3E] flex items-center" :class="show ? 'justify-start pl-4' : 'justify-center'" @click="unshow()">
                <i class="fa-solid fa-bars"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'" style="font-family: 'Barnacle Boy', sans-serif;">Maxime Amini</span>
            </div>
        </div>
        <!-- nav -->
        <div class="flex flex-wrap w-full">
            <a href="#about"
                class="w-full text-[#9C9C9E] hover:text-[#FD8D3E]" :class="show ? 'text-left pl-4' : 'text-center'">
                <i class="fa-regular fa-user"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'">About me</span>
                </a>
            <a href="#services"
                class="w-full text-[#9C9C9E] hover:text-[#FD8D3E]" :class="show ? 'text-left pl-4' : 'text-center'">
                <i class="fa-regular fa-pen-to-square"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'">My services</span>
            </a>
            <a href="#projets"
                class="w-full text-[#9C9C9E] hover:text-[#FD8D3E]" :class="show ? 'text-left pl-4' : 'text-center'">
                <i class="fa-solid fa-computer"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'">Latest Projects</span>
            </a>
            <a href="#contact"
                class="w-full text-[#9C9C9E] hover:text-[#FD8D3E]" :class="show ? 'text-left pl-4' : 'text-center'">
                <i class="fa-solid fa-phone"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'">Contact</span>
            </a>

        </div>
        <!-- Get cv -->
        <a href="../assets/img/makhlouf-amini.pdf" download class="w-full mt-auto text-[#9C9C9E]" :class="show ? 'text-left pl-4' : 'text-center'">
            <i class="fa-solid fa-cloud-arrow-down"></i> <span class="ml-4 text-lg" :class="show ? 'inline' : 'hidden'">My cv</span>
        </a>
    </nav>
</template>

<script>
export default ({
    props: ['lettre'],
    data() {
        return {
            show: false,
        };
    },
    methods: {
        unshow() {
            this.show = !this.show
        }
    }
})
</script>