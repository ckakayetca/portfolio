<template>
    <SectionContainer
        id="expertises"
        :custom-classes="'dark:bg-neutral-800 w-full pt-16 xs:pt-20 lg:pt-10 gap-8 md:gap-12 px-7'"
        label="Expertises"
    >
        <h2 class="text-4xl font-thin uppercase md:text-6xl">
            <AccentBadge icon="book" text="Expertises" size="xl" pulse />
        </h2>

        <TechStackGrid />
    </SectionContainer>
</template>

<script setup lang="ts">
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
    import TechStackGrid from '@/components/tech-stack-grid.vue'
</script>
