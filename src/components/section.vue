<template>
    <section :id="id" :class="['flex flex-col items-center justify-center max-w-screen-xl text-neutral-900 dark:text-neutral-200', customClasses]">
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