<template>
    
    <div class="py-6" id="projets">

        <!-- Title & button -->
        <div class="flex items-center">
            <h1 class="text-4xl w-1/2 " style="font-family: 'Barnacle Boy', sans-serif;" data-aos="flip-up" data-aos-duration="1000">Latest Projects</h1>
            <div class="ml-3 w-1/2 relative flex items-center justify-end">
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <span class="inline-flex rounded-md">
                            <button type="button"
                                class="inline-flex items-center px-3 py-2">
                                <p class="mr-2 text-sm text-[#565658]">All projects</p>
                                <p class="bg-[#241F21] w-8 h-8 flex items-center justify-center rounded-lg"><i
                                        class="fa-solid fa-sliders"></i></p>
                            </button>
                        </span>
                    </template>

                    <template #content>
                        <a class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out text-[#565658]">
                            HTML/CSS Only
                        </a>
                        <a class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out text-[#565658]">
                            VueJs/Laravel
                        </a>
                    </template>
                </Dropdown>
            </div>

        </div>

        <!-- Projets -->
        <div class="mt-4">
            <!-- Fist Line -->
            <div class="flex flex-wrap px-8">

                <a class="group block" href="https://www.itconsdev.com/" target="_blank" data-aos="zoom-in" data-aos-duration="500">
                    <div
                        class="h-52 w-52 bg-[url('./img/itconsdev.png')] bg-no-repeat bg-cover bg-center rounded-lg flex items-end mt-8 justify-end">
                        <div
                            class="-mr-4 -mb-4 w-12 h-12 rounded bg-[#252022] text-white text-xl flex items-center justify-center group-hover:w-52 group-hover:h-52 group-hover:mr-0 group-hover:mb-0 group-hover:bg-[#252022]/50 group-hover:text-3xl ease-in-out duration-300">
                            01</div>
                    </div>
                    <h4 class="w-52 text-lg font-extralight mt-2">Itconsdev</h4>
                </a>

                <a class="block mx-auto group" href="https://www.itconsdev.com/logiciels/628a49db085724fdae781f85" target="_blank"  data-aos="zoom-in" data-aos-duration="1500">
                    <div
                        class="h-52 w-52 bg-[url('./img/sgs.png')] bg-no-repeat bg-cover bg-center rounded-lg flex items-end justify-end mt-8 lg:mt-16 lg:ml-auto">
                        <div
                            class="-mr-4 -mb-4 w-12 h-12 rounded bg-[#252022] text-white text-xl flex items-center justify-center group-hover:w-52 group-hover:h-52 group-hover:mr-0 group-hover:mb-0 group-hover:bg-[#252022]/50 group-hover:text-3xl ease-in-out duration-300">
                            02</div>
                    </div>

                    <h4 class="w-52 text-lg font-extralight mt-2">Sgs from Itconsdev</h4>
                </a>

                <a class="group block" href="http://www.giuseppecabizzosu.it/" target="_blank" data-aos="zoom-in" data-aos-duration="2000">
                    <div
                        class="h-52 w-52 bg-[url('./img/bib.png')] bg-no-repeat bg-cover bg-center rounded-lg flex items-end justify-end mt-8 lg:mt-28 lg:ml-auto">
                        <div
                            class="-mr-4 -mb-4 w-12 h-12 rounded bg-[#252022] text-white text-xl flex items-center justify-center group-hover:w-52 group-hover:h-52 group-hover:mr-0 group-hover:mb-0 group-hover:bg-[#252022]/50 group-hover:text-3xl ease-in-out duration-300">
                            03</div>

                    </div>
                    <h4 class="w-52 text-lg font-extralight mt-2">Giuseppe Cabizzosu</h4>
                </a>

            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "@/Components/layouts/DropdownLayout.vue";

export default ({
    components: {
        Dropdown
    },
})
</script>

