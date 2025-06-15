<template>
    <section
        :id="id"
        :class="[
            'flex max-w-screen-xl flex-col items-center justify-center text-neutral-900 dark:text-neutral-200',
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
