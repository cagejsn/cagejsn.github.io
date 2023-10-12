<script lang="ts">
import ProjectCard from './ProjectCard.vue'

export default {

    data: () => ({
        projects: [
            {
                title: 'Acorn Jars',
                img: './static/acorn_jars.jpg',
                description: "I created a way to grow acorns into saplings.",
                link: "https://medium.com/@CageJohnson/growing-an-oak-tree-d9ef2d202deb",
            }
        ]
    }),

    props: {

    },
    computed: {

    },
    components: {
        ProjectCard
    }
}

</script>
<template>
    <v-container fluid>
        <v-row>




            <project-card class=" v-col-sm-12 v-col-md-12 v-col-lg-6  v-col-xl-4  " v-for="project in projects"
                :key="project" :cardContent="project">
            </project-card>


        </v-row>
    </v-container>
</template>



