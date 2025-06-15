<template>
    <li>
        <a
            class="flex items-center gap-2 border-purple-600 bg-accent-indigo px-3 py-2 text-white transition-all duration-200 hover:bg-indigo-600 dark:bg-accent-indigo dark:hover:bg-accent-indigo/80"
            :href="href"
        >
            <i :class="[icon, 'text-xl']" />

            <span class="text-white dark:text-purple-100">
                {{ text }}
            </span>
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
