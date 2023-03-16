<template>
    <span href="#contact">
        <slot />
    </span>
</template>

<style scoped>
span {
    display: block;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    color: #fe8e3d;
    border-color: #fe8e3d;
    padding: 10px;
    letter-spacing: 2px;
    transition: all .25s;
}

span:hover {
    letter-spacing: 8px;
}
</style>