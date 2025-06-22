<template>
    <SectionContainer id="hero" :custom-classes="'p-5 lg:p-7'" label="Home">
        <div class="fade-in grid grid-cols-2 justify-center gap-10 lg:gap-4 lg:px-10">
            <div
                class="fade-in-slow order-2 col-span-2 flex flex-col justify-between gap-10 px-4 lg:order-1 lg:col-span-1"
            >
                <h1
                    class="text-center text-4xl font-thin uppercase xs:text-5xl lg:mt-5 lg:text-left lg:text-6xl"
                >
                    My slogan? Everything is
                    <span class="font-bold text-accent-indigo">interesting</span>
                </h1>

                <p class="text-lg font-thin lg:font-normal">
                    I'm a
                    <AccentBadge
                        class="m-1"
                        size="sm"
                        icon="device-laptop"
                        text="full-stack web developer"
                    />
                    with a passion for many things in life. Some of them are
                    <AccentBadge class="m-1" size="sm" icon="flash" text="music" />
                    and
                    <AccentBadge class="m-1" size="sm" icon="device-laptop" text="technology" />
                </p>
            </div>

            <picture
                class="move-in-right fade-in-slow little-bounce order-1 col-span-2 mx-auto flex max-w-screen-xs flex-col justify-end rounded-full lg:order-2 lg:col-span-1 lg:max-w-full"
            >
                <source srcset="/emil.jpg" type="image/jpeg" />
                <img class="pulse-shadow w-full rounded-full" src="/emil.jpg" alt="Emil Georgiev" />
            </picture>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
</script>
