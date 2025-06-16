<template>
    <li>
        <a
            class="flex items-center rounded-md gap-2 dark:outline outline-1 dark:outline-gray-700 dark:text-white px-3 py-1 transition-all duration-200 dark:hover:outline-gray-500 bg-accent-indigo dark:bg-transparent text-white hover:bg-indigo-600 dark:hover:bg-transparent"
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
