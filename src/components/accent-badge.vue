<template>
    <span
        :class="`accent-badge mx-1 inline-flex items-center gap-1 bg-accent-indigo font-bold uppercase text-purple-100 ${sizeClasses} ${pulse ? 'pulse-shadow' : ''}`"
        v-bind="$attrs"
    >
        <i :class="`icon-${icon}`" />

        <span>{{ text }}</span>
    </span>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: 'sm',
        },
        pulse: {
            type: Boolean,
            default: false,
        },
    })

    const sizeClasses = computed(() => {
        switch (props.size) {
            case 'sm':
                return 'text-sm py-1 px-2 rounded-md'
            case 'md':
                return 'text-base py-1 px-2 rounded-md'
            case 'lg':
                return 'text-lg py-2 px-3 rounded-md'
            case 'xl':
                return 'text-6xl py-3 px-4 rounded-xl'
            default:
                return 'text-sm rounded-md'
        }
    })
</script>

<style>
    @keyframes pulseShadow {
        0% {
            box-shadow: 0 0 0 0 rgba(120, 85, 200, 1);
        }
        90% {
            box-shadow: 0 0 30px 20px rgba(168, 85, 247, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
        }
    }

    .pulse-shadow {
        animation: pulseShadow 2s infinite;
    }
</style>
