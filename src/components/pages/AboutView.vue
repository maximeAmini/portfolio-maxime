<template>
    <!-- About me -->
    <div class="lg:h-screen flex flex-wrap pt-6" id="about">
        <!-- start balise -->
        <div class="w-full before:content-['<'] after:content-['>'] text-[#393939]"
            style="font-family: 'Dramaturgi Underground', sans-serif">html</div>
        <div class="w-full before:content-['<'] after:content-['>'] text-[#393939] ml-4"
            style="font-family: 'Dramaturgi Underground', sans-serif">body</div>
        <div class="w-full before:content-['<'] after:content-['>'] text-[#393939] ml-8"
            style="font-family: 'Dramaturgi Underground', sans-serif">h1</div>

        <!-- Title -->
        <h1 class="mb-4 text-6xl relative inline-block ml-10" style="font-family: 'Barnacle Boy', sans-serif;"
            data-aos="fade-right" data-aos-duration="1000">
            About Me
        </h1>
        <div class="w-full before:content-['<'] after:content-['/>'] text-[#393939] ml-8"
            style="font-family: 'Dramaturgi Underground', sans-serif">h1</div>

        <!-- presentations -->
        <div class="w-full before:content-['<'] after:content-['>'] text-[#393939] ml-8"
            style="font-family: 'Dramaturgi Underground', sans-serif">p</div>

        <div class="text-sm font-mono font-extralight text-[#fe8e3d] ml-10" data-aos="fade-right" data-aos-duration="1500">
            25 years / Web Devlopper / Freelance / Master in computer system
        </div>
        <div class="pr-4 text-sm ml-10" data-aos="fade-right" data-aos-duration="2000">
            I am a fullstack web developer, so my job is creating web site : it can go from a simple showcase
            page to a web application. I can wear several hats for the same project, from the client's
            specifications to the design and modeling, including the development of the APIs (Application
            Programming Interface) in the back-end, the creation of the pages with the integration of the design, or
            take care of setting up the system and/or servers.
            <br />
            As a full stack developer, I am involved from conception to finalization of the product. I make sure to
            solve the problem or the initial need of the client, by setting right tools and/or developing sites and
            applications, and then make sure that everything that has been done works properly.
        </div>
        <div class="w-full before:content-['<'] after:content-['/>'] text-[#393939] ml-8"
            style="font-family: 'Dramaturgi Underground', sans-serif">p</div>

        <!-- End balise -->
        <div class="w-full before:content-['<'] after:content-['/>'] text-[#393939] ml-4"
            style="font-family: 'Dramaturgi Underground', sans-serif">body</div>
        <div class="w-full before:content-['<'] after:content-['/>'] text-[#393939]"
            style="font-family: 'Dramaturgi Underground', sans-serif">html</div>

        <!-- Button -->
        <div class="w-full pb-8 flex pr-8">
            <a href="#contact" class="ml-auto text-xl">
                <ButtonLayout>Contact me !</ButtonLayout>
            </a>
        </div>
    </div>
</template>

<script >
import ButtonLayout from "@/components/layouts/ButtonLayout.vue";
export default ({
    components: {
        ButtonLayout
    },
})
</script>