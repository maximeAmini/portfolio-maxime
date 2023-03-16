<template>
    <!-- Contact -->
    <div class="py-8 px-4 mx-auto max-w-screen-md" id="contact">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"
            style="font-family: 'Barnacle Boy', sans-serif;" data-aos="flip-up" data-aos-duration="1000">
            <span class="inline-block animate-show-name">
                <HoverLettre lettre="C" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.1s;">
                <HoverLettre lettre="o" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.2s;">
                <HoverLettre lettre="n" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.3s;">
                <HoverLettre lettre="t" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.4s;">
                <HoverLettre lettre="a" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.5s;">
                <HoverLettre lettre="c" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.5s;">
                <HoverLettre lettre="t" />
            </span>
            <span class="inline-block animate-show-name ml-4" style="animation-duration: 1.5s;">
                <HoverLettre lettre="m" />
            </span>
            <span class="inline-block animate-show-name" style="animation-duration: 1.5s;">
                <HoverLettre lettre="e" />
            </span>
        </h2>
        <form form ref="form" @submit.prevent="sendEmail" class="space-y-8">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="user_name"
                    class="border text-[gray-900] text-sm rounded-lg focus:border-[#fe8e3d] block w-full p-2.5 bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white"
                    placeholder="Your Name" required>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your
                    email</label>
                <input type="email" id="email" name="user_email"
                    class="block p-3 w-full text-sm text-[gray-900] rounded-lg border focus:border-[#fe8e3d] bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white"
                    placeholder="name@gmail.com" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-400">Your
                    message</label>
                <textarea id="message" rows="6" name="message"
                    class="block p-2.5 w-full text-sm text-[gray-900] rounded-lg border focus:border-[#fe8e3d] bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white"
                    placeholder="Leave a comment..."></textarea>
            </div>
            <!-- Button -->
            <div class="w-full pb-8 flex">
                <button type="submit" class="ml-auto">
                    <ButtonLayout>Send
                        message</ButtonLayout>
                </button>
            </div>
        </form>
    </div>
</template>
<script >
import ButtonLayout from "@/components/layouts/ButtonLayout.vue";
import HoverLettre from "@/components/layouts/HoverLetter.vue";
import emailjs from '@emailjs/browser';

export default {
    components: {
        ButtonLayout,
        HoverLettre
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_yvebh1m', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_PUBLIC_KEY')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>