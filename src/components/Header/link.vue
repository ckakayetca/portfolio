<template>
    <li>
        <a
            class="flex items-center gap-2 rounded-md bg-accent-indigo px-3 py-1 text-white outline-1 transition-all duration-200 hover:bg-indigo-600 dark:bg-transparent dark:text-white dark:outline dark:outline-gray-700 dark:hover:bg-transparent dark:hover:outline-gray-500"
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
