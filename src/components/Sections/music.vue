<template>
    <SectionContainer id="music" :custom-classes="'gap-5 md:gap-20'" label="Music">
        <h2 class="text-center text-3xl font-thin uppercase md:text-6xl">
            The beat behind the
            <AccentBadge pulse icon="code" text="Code" size="xl" />
        </h2>

        <div class="iframe-container w-full p-5">
            <iframe
                style="border-radius: 12px"
                src="https://open.spotify.com/embed/playlist/42wDkjzWIPux4q88tag1pp?utm_source=generator&theme=0"
                width="100%"
                height="400"
                frameBorder="0"
                allowfullscreen="false"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'
</script>
