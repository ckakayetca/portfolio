<template>
    <span :class="`accent-badge uppercase bg-accent-indigo text-purple-100 inline-flex items-center gap-1 mx-1 font-bold ${sizeClasses} ${pulse ? 'pulse-shadow' : ''}`">
        <i :class="`icon-${icon}`" />

        <span>{{ text }}</span>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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
        }
    })

    const sizeClasses = computed(() => {
        switch (props.size) {
            case 'sm':
                return 'text-sm py-1 px-2';
            case 'md':
                return 'text-base py-1 px-2';
            case 'lg':
                return 'text-lg py-2 px-3';
            case 'xl':
                return 'text-6xl py-3 px-4';
            default:
                return 'text-sm';
        }
    })
</script>

<style>
    @keyframes pulseShadow {
        0% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 1);
        }
        90% {
            box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
        }
    }

    .pulse-shadow {
        animation: pulseShadow 2s infinite;
    }
</style>