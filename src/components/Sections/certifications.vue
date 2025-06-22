<template>
    <SectionContainer
        id="certifications"
        :custom-classes="'w-full gap-8 md:gap-12'"
        label="Certifications"
    >
        <h2 class="font-thin uppercase">
            <AccentBadge icon="star" text="Certifications" size="xl" pulse />
        </h2>

        <div class="grid grid-cols-1 gap-3 px-5 xs:gap-5 md:grid-cols-2 md:gap-8 md:px-10">
            <Certificate
                v-for="(certificate, index) in certificates"
                :key="index"
                :certificate="certificate"
            />
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
    import Certificate from '@/components/Sections/partials/certificate.vue'
    import AccentBadge from '@/components/accent-badge.vue'
    import SectionContainer from '@/components/section-container.vue'

    const certificates = [
        {
            title: 'Angular',
            link: 'https://softuni.bg/Certificates/Details/183012/5a6647b1',
            issuer: 'SoftUni',
            date: 'Jun 2023',
            img: 'softuni-logo.png',
            issuerLink: 'https://softuni.bg',
        },
        {
            title: 'VueJS',
            link: 'https://softuni.bg/Certificates/Details/199040/a971926f',
            issuer: 'SoftUni',
            date: 'Nov 2023',
            img: 'softuni-logo.png',
            issuerLink: 'https://softuni.bg',
        },
        {
            title: 'JavaScript Web Developer Diploma',
            link: 'https://softuni.bg/certificates/details/199334/6c01bda2',
            issuer: 'SoftUni',
            date: 'Dec 2023',
            img: 'softuni-logo.png',
            issuerLink: 'https://softuni.bg',
        },
        {
            title: 'TypeScript',
            link: 'https://softuni.bg/Certificates/Details/215621/ae884bd3',
            issuer: 'SoftUni',
            date: 'Apr 2024',
            img: 'softuni-logo.png',
            issuerLink: 'https://softuni.bg',
        },
        {
            title: 'AMTIS IT Competition Mentor',
            link: '/amtis-certificate.jpg',
            issuer: 'Аз мога - тук и сега',
            date: 'Jun 2025',
            img: 'amtis-logo.png',
            issuerLink: 'https://az-moga.bg',
        },
    ]
</script>
