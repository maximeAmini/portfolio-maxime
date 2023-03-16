<template>
    <span class="inline-block" :class="{ 'animate-wiggle text-[#FD8D3E]': hover }" @mouseover="hover = true"
        @mouseleave="changeHover()">
        {{ lettre }}
    </span>
</template>

<script>
export default ({
    props: ['lettre'],
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        changeHover() {
            setTimeout(() => {
                this.hover = false;
            }, 1000);
        }
    }
})
</script>