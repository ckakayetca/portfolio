<template>
    <header
        class="fixed top-0 w-full border-b border-neutral-700 bg-purple-300/30 px-4 py-2 backdrop-blur-sm dark:bg-neutral-800/30"
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
                <Link href="#about" icon="icon-info" text="About" />
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

    <main class="flex flex-col items-center overflow-x-hidden pt-24">
        <SectionContainer
            id="hero"
            :custom-classes="'p-7 border-b-2 border-gray-300 dark:border-neutral-600'"
        >
            <div class="fade-in grid grid-cols-2 justify-center gap-4">
                <div class="fade-in-slow flex flex-col justify-between gap-4 px-4">
                    <h1 class="mt-5 text-6xl font-thin uppercase">
                        My slogan? Everything is
                        <span class="font-bold text-accent-indigo">interesting</span>
                    </h1>

                    <p class="mb-5 leading-8">
                        I'm a
                        <AccentBadge icon="device-laptop" text="full-stack developer" />
                        with a passion for many things in life. Some of them are
                        <AccentBadge icon="flash" text="music" />
                        and
                        <AccentBadge icon="device-laptop" text="technology" />
                        .
                    </p>
                </div>

                <picture
                    class="move-in-right fade-in-slow mx-auto flex w-[500px] flex-col justify-end overflow-hidden rounded-full"
                >
                    <source srcset="/emil.jpg" type="image/jpeg" />
                    <img class="w-full" src="/emil.jpg" alt="Emil Georgiev" />
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
    </main>

    <footer />
</template>

<script setup lang="ts">
    import ThemeSwitcher from '@/components/Core/theme-switcher.vue'
    import Link from '@/components/Header/link.vue'
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
    import TechStackGrid from '@/components/tech-stack-grid.vue'
</script>
