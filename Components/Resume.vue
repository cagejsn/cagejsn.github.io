<script lang="ts">

export default {

    props: {
        url: String,
    },
    computed: {
        getResumeURL() {
            return this.url + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
        }
    }
}

</script>
<template>
    <iframe allowtransparency="true" :src="getResumeURL" type="application/pdf" frameBorder="0" scrolling="auto"
        style="width: 100%; height: 100%"></iframe>
</template>



