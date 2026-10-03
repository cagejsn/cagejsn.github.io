<script lang="ts">

export default {
    data: () => ({
        index: 0,
    }),

    props: {
        images: {
            type: Array,
            default: () => [],
        },
        alt: {
            type: String,
            default: '',
        },
    },

    methods: {
        prev() {
            const count = this.images.length
            this.index = (this.index - 1 + count) % count
        },
        next() {
            const count = this.images.length
            this.index = (this.index + 1) % count
        },
    },
}

</script>
<template>
    <figure class="frame" v-if="images && images.length" @click.stop>
        <img :src="images[index]" :alt="alt">
        <div class="frame-nav" v-if="images.length > 1">
            <button type="button" @click="prev" aria-label="Previous photo">‹</button>
            <span>{{ index + 1 }} / {{ images.length }}</span>
            <button type="button" @click="next" aria-label="Next photo">›</button>
        </div>
    </figure>
</template>
