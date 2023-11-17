<script lang="ts">
import ProjectCard from './ProjectCard.vue'

import { defineComponent } from 'vue'
export default ({

    data: () => ({
        projects: [

            {
                title: 'Desk, STEM Homework App',
                imgs: ['./static/desk_screenshot.jpg'],
                description: "An iOS app for Engineering Homework Help",
                link: "https://www.youtube.com/watch?v=J84n16w1tZ0",
                team: ["Cage", "Ben", "Arjun", "Zak", "Daniel"]
            },
            {
                title: 'Acorn Jars',
                imgs: ['./static/acorn_jars.jpg', './static/acorn_jars2.jpg'],
                description: "I created a way to grow acorns into saplings.",
                link: "https://medium.com/@CageJohnson/growing-an-oak-tree-d9ef2d202deb",
                team: []
            },
            {
                title: 'Bicycle Yoga Mat Holder',
                imgs: ['./static/yoga_mat_holder1.jpg', './static/yoga_mat_holder2.jpg'],
                description: "I made a yoga mat holder that goes on a bike's handlebars.",
                team: []
            },
            {
                title: 'Bird House',
                imgs: ['./static/bird_house2.jpg', './static/bird_house1.jpg', './static/bird_house3.jpg'],
                description: "I recycled an old fence into a bird house.",
                team: []
            },
            {
                title: 'Movable Post',
                imgs: ['./static/concrete_post1.jpg', './static/concrete_post2.jpg'],
                description: "These movable posts have a cement base.",
                team: []
            },

        ]
    }),

    props: {

    },
    computed: {

    },
    components: {
        ProjectCard
    }
})

</script>
<template>
    <v-container fluid class="projects-container">
        <v-row>




            <project-card class=" v-col-sm-12 v-col-md-12 v-col-lg-6  v-col-xl-4 project-card" v-for="project in this.projects"
                :key="project" :cardContent="project">
            </project-card>


        </v-row>
    </v-container>
</template>



