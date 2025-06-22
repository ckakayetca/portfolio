<template>
    <PrimaryButton :icon="icon" title="Switch Theme" @click="toggleTheme" />
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue'

    import PrimaryButton from '@/components/Core/primary-button.vue'

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = ref(localStorage.getItem('theme') ?? prefersDark)

    const icon = computed(() =>
        theme.value === 'dark' ? 'icon-weather-sunny' : 'icon-weather-night',
    )

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', theme.value)
        document.documentElement.classList.toggle('dark', theme.value === 'dark')
    }
</script>
