
<script lang="ts">


export default {

    data: () => ({

    }),

    props: {
        cardContent: Object,
    },
    computed: {

    }
}

</script>
<template>
    <div class="px-2 pb-0 pt-4">
        <v-card>
            <v-img :src="cardContent.img" style="aspect-ratio: 1.5;" cover></v-img>

            <v-card-title>
                {{ cardContent.title }}
            </v-card-title>

            <v-card-text>
                {{ cardContent.description }}
            </v-card-text>


            <v-card-actions>

                <v-spacer></v-spacer>
                <v-btn :href="cardContent.link" color="orange-lighten-2" variant="text" target="_blank">
                    See More
                </v-btn>




            </v-card-actions>


        </v-card>
    </div>
</template>

