<template>
    <button class="py-2 px-3 bg-accent-indigo text-white dark:bg-accent-indigo dark:hover:bg-accent-indigo/80 hover:bg-indigo-600 transition-all duration-200">
        <i v-if="icon" :class="[icon, 'text-xl']"></i>
        
        <span v-if="text" class="text-white dark:text-purple-100">
            {{ text }}
        </span>
    </button>
</template>

<script setup lang="ts">
    defineProps({
        icon: {
            type: String,
        },
        text: {
            type: String,
        },
    })
</script>