<template>
    <span class="uppercase bg-accent-indigo py-1 px-2 inline-flex items-center gap-1 mx-1 font-bold text-sm">
        <i :class="`icon-${icon}`" />

        <span>{{ text }}</span>
    </span>
</template>

<script setup lang="ts">
    defineProps({
        icon: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    })
</script>