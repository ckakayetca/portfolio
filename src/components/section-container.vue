<template>
    <section
        :id="id"
        :class="[
            'section-container flex min-h-screen max-w-screen-lg snap-start flex-col items-center justify-start pt-16 text-neutral-900 md:justify-center dark:text-neutral-200',
            customClasses,
        ]"
        :data-label="label"
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
        label: {
            type: String,
            required: true,
        },
        customClasses: {
            type: String,
            required: false,
        },
    })
</script>
