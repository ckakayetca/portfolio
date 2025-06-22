<template>
    <SectionContainer
        id="current-roles"
        :custom-classes="'w-full gap-8 md:gap-20'"
        label="Current Roles"
    >
        <h2 class="text-4xl font-thin uppercase md:text-6xl">
            Current
            <AccentBadge icon="book" text="Roles" size="xl" pulse />
        </h2>

        <div class="flex w-full flex-col gap-7 px-5 md:px-10">
            <div
                class="relative flex items-center gap-4 rounded-lg border border-gray-300 p-5 dark:border-neutral-600"
            >
                <a class="h-16 w-16" href="https://delta.bg" target="_blank">
                    <picture class="flex h-16 w-16 items-end">
                        <source srcset="/delta.svg" type="image/svg+xml" />
                        <img src="/delta.svg" alt="Delta BG Logo" />
                    </picture>
                </a>

                <div class="flex flex-col gap-1">
                    <h3 class="font-bold xs:text-xl md:text-2xl">Front-End Web Developer</h3>

                    <div
                        class="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300"
                    >
                        <p>Full time</p>

                        <p>•</p>

                        <p>Jan 2024 - Present</p>
                    </div>

                    <a
                        class="text-sm text-neutral-600 dark:text-neutral-300"
                        href="https://delta.bg"
                        target="_blank"
                    >
                        Delta.BG
                    </a>
                </div>

                <div class="absolute bottom-0 right-0 flex w-fit items-center gap-2 p-2">
                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/vue.svg"
                        alt="Vue.js Logo"
                        title="Vue.js"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/nuxtjs.svg"
                        alt="Nuxt.js Logo"
                        title="Nuxt.js"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/typescript.svg"
                        alt="TypeScript Logo"
                        title="TypeScript"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/tailwind.svg"
                        alt="TailwindCSS Logo"
                        title="TailwindCSS"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/sass.svg"
                        alt="Sass Logo"
                        title="Sass"
                    />
                </div>
            </div>

            <div
                class="relative flex items-center gap-4 rounded-lg border border-gray-300 p-5 dark:border-neutral-600"
            >
                <a
                    class="h-16 w-16 overflow-hidden rounded-lg bg-white"
                    href="https://drgogo.bg"
                    target="_blank"
                >
                    <picture class="h-16 w-16 bg-white">
                        <source srcset="/drgogo.png" type="image/png" />
                        <img class="scale-105" src="/drgogo.png" alt="DR. GOGO Logo" />
                    </picture>
                </a>

                <div class="flex flex-col gap-1">
                    <h3 class="font-bold xs:text-xl md:text-2xl">Full-Stack Web Developer</h3>

                    <div
                        class="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300"
                    >
                        <p>Contractor</p>

                        <p>•</p>

                        <p>Dec 2024 - Present</p>
                    </div>

                    <a
                        class="text-sm text-neutral-600 dark:text-neutral-300"
                        href="https://drgogo.bg"
                        target="_blank"
                    >
                        DR. GOGO
                    </a>
                </div>

                <div class="absolute bottom-0 right-0 flex w-fit items-center gap-2 p-2">
                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/laravel.svg"
                        alt="Laravel Logo"
                        title="Laravel"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/livewire.svg"
                        alt="Laravel Livewire Logo"
                        title="Laravel Livewire"
                    />

                    <img
                        class="h-5 w-5"
                        src="/src/assets/images/tailwind.svg"
                        alt="TailwindCSS Logo"
                        title="TailwindCSS"
                    />
                </div>
            </div>

            <div
                class="relative flex items-center gap-4 rounded-lg border border-gray-300 p-5 dark:border-neutral-600"
            >
                <picture class="h-16 w-16 rounded-lg">
                    <source
                        srcset="/question-mark.svg"
                        type="image/svg+xml"
                        alt="Question Mark Logo"
                    />
                    <img class="scale-105" src="/question-mark.svg" alt="Question Mark" />
                </picture>

                <div class="flex flex-col gap-1">
                    <h3 class="font-bold xs:text-xl md:text-2xl">Open for More</h3>

                    <p class="text-sm text-neutral-600 dark:text-neutral-300">Contact Me!</p>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
</script>
