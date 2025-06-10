<template>
    <li class="rounded-md">
        <a :href="href" class="p-3 bg-purple-100 dark:bg-accent-indigo dark:hover:bg-accent-indigo/80 transition-all duration-200">
            <i :class="icon"></i>
            {{ text }}
        </a>
    </li>
</template>

<script setup lang="ts">
    defineProps({
        href: {
            type: String,
            required: true,
        },
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