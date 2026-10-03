<script lang="ts">

export default {

    props: {
        url: String,
    },
    computed: {
        resumeSrc() {
            const ua = navigator.userAgent
            const chromium = /chrome|chromium|edg/i.test(ua) && !/crios|fxios|edgios/i.test(ua)
            // Chrome's PDF viewer understands these. Safari's viewer goes blank if they are present.
            return chromium ? this.url + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH' : this.url
        },
    },
}

</script>
<template>
    <div class="panel-resume">
        <iframe :src="resumeSrc" title="Resume"></iframe>
    </div>
</template>
