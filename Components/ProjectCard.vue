
<script lang="ts">


export default {

    data: () => ({
        showDetail: false,

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
        <v-card elevation="4" style="height:100%; display: flex; flex-direction: column;">
            <v-img v-if="cardContent.imgs.length == 1" :src="cardContent.imgs[0]" style="height: 400px" cover></v-img>
            <v-carousel v-else-if="cardContent.imgs.length > 1" hide-delimiters height="400">
                <v-carousel-item v-for="imageURL in cardContent.imgs" :key="imageURL" :src="imageURL"
                    cover></v-carousel-item>

            </v-carousel>

            <v-progress-circular v-else></v-progress-circular>



            <v-card-title>

                {{ cardContent.title }}

            </v-card-title>

            <v-card-text>
                {{ cardContent.description }}
            </v-card-text>


            <v-card-subtitle v-if="cardContent.team && cardContent.team.length > 0">Team Members</v-card-subtitle>
            <v-card-text v-if="cardContent.team && cardContent.team.length > 0">
                <v-chip class="team-member-chip" v-for="teamMember in cardContent.team" :key="teamMember" cover>{{ teamMember }}</v-chip>
            </v-card-text>


            <v-card-actions v-if="cardContent.link">

                <v-spacer></v-spacer>
                <v-btn :href="cardContent.link" color="orange-lighten-2" variant="text" target="_blank">
                    See More
                </v-btn>
            </v-card-actions>



        </v-card>
    </div>
</template>

