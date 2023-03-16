<template>
    <!-- Contact -->
    <div class="py-8 px-4 mx-auto max-w-screen-md" id="contact">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"
            style="font-family: 'Barnacle Boy', sans-serif;" data-aos="fade-down" data-aos-duration="1000">Contact Me
        </h2>
        <form form ref="form" @submit.prevent="sendEmail" class="space-y-8">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="user_name"
                    class="shadow-sm border text-[gray-900] text-sm rounded-lg focus:border-[#fe8e3d] block w-full p-2.5 bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
                    placeholder="Your Name" required>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your
                    email</label>
                <input type="email" id="email" name="user_email"
                    class="block p-3 w-full text-sm text-[gray-900] rounded-lg border shadow-sm focus:border-[#fe8e3d] bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
                    placeholder="name@gmail.com" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-400">Your
                    message</label>
                <textarea id="message" rows="6" name="message"
                    class="block p-2.5 w-full text-sm text-[gray-900] rounded-lg shadow-sm border focus:border-[#fe8e3d] bg-[#2A2A2A] border-gray-600 placeholder-gray-400 text-white"
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
import emailjs from '@emailjs/browser';

export default {
    components: {
        ButtonLayout
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