<template>
    <li>
        <a :href="href" class="py-2 px-3 border-purple-600 bg-accent-indigo text-white dark:bg-accent-indigo dark:hover:bg-accent-indigo/80 hover:bg-indigo-600 transition-all duration-200 flex items-center gap-2">
            <i :class="[icon, 'text-xl']"></i>
            
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