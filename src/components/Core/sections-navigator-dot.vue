<template>
    <a
        :class="['section-link group flex w-full items-center justify-end gap-2']"
        :href="`#${section.id}`"
    >
        <span
            :class="[
                'hidden transition-all duration-200 xl:block dark:text-white',
                active
                    ? 'text-lg'
                    : 'text-sm opacity-0 group-hover:text-lg group-hover:opacity-100',
            ]"
        >
            {{ section.getAttribute('data-label') }}
        </span>

        <div
            :class="[
                'section-link-indicator rounded-full bg-accent-indigo transition-all duration-200',
                active
                    ? 'h-4 w-4 lg:mr-2'
                    : 'mx-1 h-2 w-2 group-hover:mx-0 group-hover:h-4 group-hover:w-4',
            ]"
        />
    </a>
</template>

<script setup lang="ts">
    defineProps({
        section: {
            type: HTMLElement,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    })
</script>
