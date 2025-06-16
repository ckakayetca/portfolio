<template>
    <header
        class="fixed z-10 top-0 w-full border-gray-600 dark:border-neutral-700 bg-purple-300/30 px-4 py-2 backdrop-blur-sm dark:bg-neutral-800/30"
    >
        <nav class="flex items-center justify-between">
            <div
                class="logo-container font-great-vibes text-3xl font-extrabold text-purple-800 transition-all duration-200 dark:text-accent-indigo dark:hover:text-accent-indigo/80"
            >
                <a class="leading-none" href="#hero"><span>Emil.Georgiev</span></a>
            </div>

            <ul
                id="desktop-nav"
                class="hidden items-center gap-4 text-purple-800 sm:flex dark:text-purple-100"
            >
                <Link href="#hero" icon="icon-home" text="Home" />
                <Link href="#expertises" icon="icon-info" text="About" />
                <Link href="#contact" icon="icon-mail" text="Contact" />
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>

            <button
                id="mobile-nav"
                class="flex items-center gap-4 border border-purple-900 p-3 sm:hidden"
            >
                <i class="icon-th-menu text-purple-900 dark:text-purple-200" />
            </button>
        </nav>
    </header>

    <main class="flex flex-col items-center overflow-x-hidden">
        <SectionContainer
            id="hero"
            :custom-classes="'p-7'"
        >
            <div class="fade-in grid grid-cols-2 justify-center gap-4">
                <div class="fade-in-slow flex flex-col justify-between gap-10 px-4">
                    <h1 class="mt-5 text-6xl font-thin uppercase">
                        My slogan? Everything is
                        <span class="font-bold text-accent-indigo">interesting</span>
                    </h1>

                    <p class="text-lg">
                        I'm a
                        <AccentBadge class="m-1" size="md" icon="device-laptop" text="full-stack web developer" />
                        with a passion for many things in life. Some of them are
                        <AccentBadge class="m-1" size="md" icon="flash" text="music" />
                        and
                        <AccentBadge class="m-1" size="md" icon="device-laptop" text="technology" />
                        .
                    </p>
                </div>

                <picture
                    class="move-in-right fade-in-slow mx-auto flex flex-col justify-end rounded-full little-bounce"
                >
                    <source srcset="/emil.jpg" type="image/jpeg" />
                    <img class="w-full rounded-full pulse-shadow" src="/emil.jpg" alt="Emil Georgiev" />
                </picture>
            </div>
        </SectionContainer>

        <SectionContainer
            id="expertises"
            :custom-classes="'dark:bg-neutral-800 w-full pt-7 gap-10 px-7'"
        >
            <h2 class="text-6xl font-thin uppercase">
                My
                <AccentBadge icon="book" text="Expertises" size="xl" pulse />
            </h2>

            <TechStackGrid />
        </SectionContainer>

        <SectionContainer id="current-roles">
            <h2 class="text-6xl font-thin uppercase">
                Current
                <AccentBadge icon="book" text="Roles" size="xl" pulse />
            </h2>

            <div class="flex flex-col gap-7 w-full py-10">
                <div class="flex items-center gap-4 border p-5 relative rounded-lg border-gray-300 dark:border-neutral-600">
                    <a href="https://delta.bg" target="_blank" class="w-16 h-16">
                        <picture class="w-16 h-16 flex items-end">
                            <source srcset="/delta.svg" type="image/svg+xml" alt="Delta.BG Logo" />
                            <img src="/delta.svg" alt="Delta" />
                        </picture>
                    </a>

                    <div class="flex flex-col gap-1">
                        <h3 class="text-2xl font-bold">Front-End Web Developer</h3>
                        <p class="text-sm text-neutral-600 dark:text-neutral-300">Jan 2024 - Present</p>
                        <a href="https://delta.bg" target="_blank" class="text-sm text-neutral-600 dark:text-neutral-300">Delta.BG</a>
                    </div>

                    <div class="absolute bottom-0 right-0 w-fit flex items-center gap-2 p-2">
                        <img src="/src/assets/images/vue.svg" alt="Vue.js Logo" class="w-5 h-5" />

                        <img src="/src/assets/images/nuxtjs.svg" alt="Nuxt.js Logo" class="w-5 h-5" />
                        
                        <img src="/src/assets/images/typescript.svg" alt="TypeScript Logo" class="w-5 h-5" />

                        <img src="/src/assets/images/tailwind.svg" alt="TailwindCSS Logo" class="w-5 h-5" />
                    </div>
                </div>

                <div class="flex items-center gap-4 border p-5 relative rounded-lg border-gray-300 dark:border-neutral-600">
                    <a href="https://drgogo.bg" target="_blank" class="w-16 h-16 bg-white rounded-lg overflow-hidden">
                        <picture class="w-16 h-16 bg-white">
                            <source srcset="/drgogo.png" type="image/png" alt="DR. GOGO Logo" />
                            <img class="scale-105" src="/drgogo.png" alt="DR. GOGO" />
                        </picture>
                    </a>

                    <div class="flex flex-col gap-1">
                        <h3 class="text-2xl font-bold">Full-Stack Web Developer</h3>
                        <p class="text-sm text-neutral-600 dark:text-neutral-300">Dec 2024 - Present</p>
                        <a href="https://drgogo.bg" target="_blank" class="text-sm text-neutral-600 dark:text-neutral-300">DR. GOGO</a>
                    </div>

                    <div class="absolute bottom-0 right-0 w-fit flex items-center gap-2 p-2">
                        <img src="/src/assets/images/laravel.svg" alt="Laravel Logo" class="w-5 h-5" />

                        <img src="/src/assets/images/tailwind.svg" alt="TailwindCSS Logo" class="w-5 h-5" />
                    </div>
                </div>
            </div>
        </SectionContainer>

        <SectionContainer id="music" :custom-classes="'gap-8'">
            <h2 class="text-6xl font-thin uppercase">
                The <AccentBadge icon="notes" text="Beat" size="xl" /> behind the <AccentBadge pulse icon="code" text="Code" size="xl" />
            </h2>

            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/42wDkjzWIPux4q88tag1pp?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </SectionContainer>
    </main>

    <footer />
</template>

<script setup lang="ts">
    import ThemeSwitcher from '@/components/Core/theme-switcher.vue'
    import Link from '@/components/Header/link.vue'
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
    import TechStackGrid from '@/components/tech-stack-grid.vue'

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()

            const target = e.target as HTMLAnchorElement

            document.querySelector(target.getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' })
        })
    })
</script>