<template>
    <div class="grid w-full grid-cols-3 gap-7">
        <a
            v-for="tech in techStack"
            :key="tech.name"
            :class="`flex flex-col items-center justify-center gap-8 rounded-md border border-neutral-400 bg-white/10 px-5 py-7 transition-all duration-200 dark:border-neutral-600 dark:bg-neutral-700/80`"
            :href="tech.link"
            target="_blank"
            @mouseover="(event) => onHover(event, tech.color)"
            @mouseleave="onLeave"
        >
            <img class="h-32 w-32 transition-all duration-100" :src="tech.image" :alt="tech.name" />

            <span class="text-lg">{{ tech.name }}</span>
        </a>
    </div>
</template>

<script setup lang="ts">
    import laravel from '@/assets/images/laravel.svg'
    import node from '@/assets/images/nodejs.svg'
    import nuxtjs from '@/assets/images/nuxtjs.svg'
    import tailwind from '@/assets/images/tailwind.svg'
    import typescript from '@/assets/images/typescript.svg'
    import vue from '@/assets/images/vue.svg'

    function onHover(event: Event, color: string) {
        const target = event.target as HTMLElement

        if (target.tagName !== 'A') return

        target.style.filter = `drop-shadow(0 5px 10px ${color})`
        target.style.scale = '1.05'
        target.style.transform = 'translateY(-10px)'

        const img = target.querySelector('img') as HTMLImageElement

        if (img) {
            img.style.filter = `drop-shadow(0 5px 5px ${color})`
        }
    }

    function onLeave(event: Event) {
        const target = event.target as HTMLElement

        if (target.tagName !== 'A') return

        target.style.filter = 'drop-shadow(0 0 0 transparent)'
        target.style.scale = '1'
        target.style.transform = 'translateY(0)'

        const img = target.querySelector('img') as HTMLImageElement

        if (img) {
            img.style.filter = 'drop-shadow(0 0 0 transparent)'
        }
    }

    const techStack = [
        {
            name: 'Vue',
            image: vue,
            color: '#41B883',
            link: 'https://vuejs.org/',
        },
        {
            name: 'Nuxt.js',
            image: nuxtjs,
            color: '#8CC84B',
            link: 'https://nuxt.com/',
        },
        {
            name: 'Node.js',
            image: node,
            color: '#8CC84B',
            link: 'https://nodejs.org/',
        },
        {
            name: 'TypeScript',
            image: typescript,
            color: '#017ACB',
            link: 'https://www.typescriptlang.org/',
        },
        {
            name: 'Laravel',
            image: laravel,
            color: '#FF2D20',
            link: 'https://laravel.com/',
        },
        {
            name: 'Tailwind CSS',
            image: tailwind,
            color: '#06B6D4',
            link: 'https://tailwindcss.com/',
        },
    ]
</script>
