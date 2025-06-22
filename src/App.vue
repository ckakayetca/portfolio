<template>
    <header class="fixed top-0 z-10 w-full px-4 py-2 backdrop-blur-sm">
        <nav class="flex items-center justify-between">
            <div
                class="logo-container font-great-vibes text-3xl font-extrabold text-purple-800 transition-all duration-200 dark:text-accent-indigo dark:hover:text-accent-indigo/80"
            >
                <a class="leading-none" href="#"><span>Emil.Georgiev</span></a>
            </div>

            <ThemeSwitcher />
        </nav>
    </header>

    <main
        class="relative flex max-h-screen snap-y snap-mandatory flex-col items-center overflow-y-auto overflow-x-hidden"
    >
        <Hero />
        <Expertises />
        <CurrentRoles />
        <Certifications />
        <Music />

        <!-- Sections Navigator (absolute element) -->
        <SectionsNavigator />
    </main>

    <footer
        class="fixed bottom-0 flex w-full items-center justify-between p-2 backdrop-blur-sm md:p-4"
    >
        <div class="flex items-center gap-4">
            <a
                class="hover:scale-110"
                href="https://www.instagram.com/3m1l10.v3rc3tt1/"
                target="_blank"
            >
                <img class="h-5 w-5 md:h-6 md:w-6" src="/instagram.svg" alt="Instagram" />
            </a>

            <a
                class="hover:scale-110"
                href="https://www.linkedin.com/in/emil-georgiev-139529286/"
                target="_blank"
            >
                <img class="h-5 w-5 md:h-6 md:w-6" src="/linkedin.svg" alt="LinkedIn" />
            </a>

            <a class="hover:scale-110" href="https://github.com/ckakayetca" target="_blank">
                <img class="h-5 w-5 md:h-6 md:w-6" src="/github.svg" alt="GitHub" />
            </a>
        </div>

        <div class="text-sm text-gray-500 dark:text-neutral-400">
            <a
                class="hover:text-gray-700 dark:hover:text-neutral-300"
                href="mailto:emil.tg0045@gmail.com"
            >
                emil.tg0045@gmail.com
            </a>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'

    import SectionsNavigator from '@/components/Core/sections-navigator.vue'
    import ThemeSwitcher from '@/components/Core/theme-switcher.vue'
    import Certifications from '@/components/Sections/certifications.vue'
    import CurrentRoles from '@/components/Sections/current-roles.vue'
    import Expertises from '@/components/Sections/expertises.vue'
    import Hero from '@/components/Sections/hero.vue'
    import Music from '@/components/Sections/music.vue'

    onMounted(() => {
        document.querySelectorAll("a[href^='#']").forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault()

                const target = e.target as HTMLElement

                // There's a chance that the target is a child of the anchor, so we need to check the parent element
                const targetHref =
                    target.getAttribute('href') ?? target.parentElement?.getAttribute('href')

                document.querySelector(targetHref!)?.scrollIntoView({ behavior: 'smooth' })
            })
        })
    })
</script>
