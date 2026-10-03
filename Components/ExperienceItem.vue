
<script lang="ts">

import ImageGallery from './ImageGallery.vue'

export default {

    components: {
        ImageGallery,
    },

    data: () => ({
        photosOpen: false,
    }),

    props: {
        experience: Object,
    },
    computed: {

    },
    methods: {
        isEvent(experience) {
            return experience.type === 'Event'
        },
        isProject(experience) {
            return experience.type === 'Project'
        },
        isAward(experience) {
            return experience.type === 'Award'
        },
        openPhotos() {
            this.photosOpen = true
            document.body.style.overflow = 'hidden'
            this.onKey = (event) => {
                if (event.key === 'Escape') this.closePhotos()
            }
            window.addEventListener('keydown', this.onKey)
        },
        closePhotos() {
            this.photosOpen = false
            document.body.style.overflow = ''
            if (this.onKey) window.removeEventListener('keydown', this.onKey)
        },
    },
    beforeUnmount() {
        document.body.style.overflow = ''
        if (this.onKey) window.removeEventListener('keydown', this.onKey)
    },
}

</script>
<template>
    <article class="entry" :class="'entry-' + experience.type.toLowerCase()">
        <time :datetime="experience.date">{{ experience.date }}</time>

        <div v-if="isEvent(experience)">
            <p class="entry-title">{{ experience.description }}</p>
        </div>

        <div v-else-if="isAward(experience)">
            <p class="entry-title">{{ experience.title }}</p>
        </div>

        <div v-else-if="isProject(experience)">
            <h3>{{ experience.title }}</h3>
            <p class="org" v-if="experience.organzation">{{ experience.organzation }}</p>
            <p class="desc" v-if="experience.description">{{ experience.description }}</p>
            <p class="meta" v-if="experience.role">{{ experience.role }}</p>
            <p class="tech" v-if="experience.technologies && experience.technologies.length">
                {{ experience.technologies.join(' · ') }}
            </p>
            <button
                v-if="experience.images && experience.images.length"
                type="button"
                class="photos"
                @click="openPhotos"
            >
                Photos
            </button>

            <div v-if="photosOpen" class="lightbox" @click.self="closePhotos">
                <button type="button" class="lightbox-close" @click="closePhotos">Close</button>
                <image-gallery :images="experience.images" :alt="experience.title"></image-gallery>
            </div>
        </div>
    </article>
</template>
