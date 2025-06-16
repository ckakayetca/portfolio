<template>
    <section
        :id="id"
        :class="[
            'flex max-w-screen-xl flex-col h-screen items-center justify-center text-neutral-900 dark:text-neutral-200 border-b border-gray-300 dark:border-neutral-600',
            customClasses,
        ]"
    >
        <slot />
    </section>
</template>

<script setup lang="ts">
    defineProps({
        id: {
            type: String,
            required: true,
        },
        customClasses: {
            type: String,
            required: false,
        },
    })
</script>
