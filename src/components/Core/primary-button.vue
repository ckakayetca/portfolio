<template>
    <button
        class="rounded-md bg-accent-indigo px-3 py-1 text-white transition-all duration-200 hover:bg-indigo-600 dark:bg-accent-indigo dark:hover:bg-accent-indigo/80"
    >
        <i v-if="icon" :class="[icon, 'text-xl']" />

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
