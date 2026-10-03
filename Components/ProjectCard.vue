
<script lang="ts">

import ImageGallery from './ImageGallery.vue'

export default {

    components: {
        ImageGallery,
    },

    props: {
        cardContent: Object,
    },
}

</script>
<template>
    <article class="project">
        <image-gallery :images="cardContent.imgs" :alt="cardContent.title"></image-gallery>

        <h2>{{ cardContent.title }}</h2>
        <p class="desc">{{ cardContent.description }}</p>

        <p class="meta" v-if="cardContent.team && cardContent.team.length">
            Team members · {{ cardContent.team.join(', ') }}
        </p>

        <a v-if="cardContent.link" class="more" :href="cardContent.link" target="_blank" rel="noopener noreferrer">
            See More
        </a>
    </article>
</template>
