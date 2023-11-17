
<script lang="ts">


export default {

    data: () => ({
        showPhotos: false,

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
        }
    },
}

</script>
<template>
    <v-timeline-item v-if="isEvent(experience)" dot-color="blue" size="small">
        <div class="text-overline mb-1">
            {{ experience.date }}
        </div>
        <div class="d-flex">

            <div>
                <strong>{{ experience.description }}</strong>
            </div>
        </div>
    </v-timeline-item>

    <v-timeline-item v-else-if="isAward(experience)" dot-color="blue" size="large">
        <template v-slot:icon>
            <v-icon v-if="experience.icon" >{{ experience.icon  }}</v-icon>
            <v-icon v-else>mdi-star</v-icon>
        </template>
        <div class="text-overline mb-1">
            {{ experience.date }}
        </div>
        <div class="d-flex">

            <div>
                <strong>{{ experience.title }}</strong>
            </div>
        </div>
    </v-timeline-item>

    <v-timeline-item v-else-if="isProject(experience)" dot-color="blue">
        <template v-slot:icon>
            <v-icon v-if="experience.icon" >{{ experience.icon  }}</v-icon>
            <v-icon v-else-if="experience.discipline !== 'Software'">mdi-code-braces</v-icon>
            <v-icon v-else>mdi-code-braces</v-icon>
        </template>
        <div class="text-overline mb-1">
            {{ experience.date }}
        </div>

        <v-card class="elevation-2 v-card-experience-item">
            <v-card-title style="text-wrap: pretty; white-space: normal; word-break: keep-all;">
                {{ experience.title }}
            </v-card-title>

            <v-card-subtitle style="text-wrap: pretty;">
                {{ experience.organzation }}
            </v-card-subtitle>

            <v-card-text>
                {{ experience.description }}
            </v-card-text>


            <template v-if="experience.role">
                <v-card-subtitle style="text-wrap: pretty; ">
                    Role
                </v-card-subtitle>
                <v-card-text>
                    <v-chip> {{ experience.role }}</v-chip>
                </v-card-text>

            </template>


            <tempate v-if="experience.technologies && experience.technologies.length > 0">
                <v-card-subtitle>
                    Technologies
                </v-card-subtitle>
                <v-card-text>
                    <v-chip-group>
                        <v-chip v-for="technology in experience.technologies">
                            {{ technology }}
                        </v-chip>
                    </v-chip-group>
                </v-card-text>
            </tempate>

            <template v-if="experience.images && experience.images.length > 0">
                <v-dialog width="500">
                    <template v-slot:activator="{ props }">
                        <v-card-actions>
                            <v-spacer>
                            </v-spacer>
                            <v-btn v-bind="props">Photos</v-btn>
                        </v-card-actions>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <v-card>
                            <v-img v-if="experience.images.length == 1" :src="experience.images[0]"
                                aspect-ratio="1/1"></v-img>
                            <v-carousel v-else-if="experience.images.length > 1" hide-delimiters>
                                <v-carousel-item v-for="imageURL in experience.images" :key="imageURL" :src="imageURL"
                                    aspect-ratio="1/1"></v-carousel-item>

                            </v-carousel>
                        </v-card>

                    </template>
                </v-dialog>
            </template>










        </v-card>



    </v-timeline-item>
</template>

