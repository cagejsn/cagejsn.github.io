<script lang="ts">
import ProjectCard from './ProjectCard.vue'

import { defineComponent } from 'vue'

import ExperienceItem from './ExperienceItem.vue'
export default defineComponent({

    components: {
        ExperienceItem
    },

    data: () => ({
        showOptions: false,

        experienceType: ['Project', 'Event', 'Job', 'Award'],
        experienceDiscipline: ['Software', 'Other'],
        personalProfessional: ['Professional'],


        experiences: [

            {
                type: 'Event',
                personalOrProfessional: 'Professional',
                description: "Worked at Camp Champions as a Division Leader",
                date: "2017-06",
            },
            {
                type: 'Event',
                personalOrProfessional: 'Personal',
                description: "Graduated from the University of Texas at Austin",
                date: "2017-05",

            },
            {
                type: 'Event',
                personalOrProfessional: 'Professional',
                description: "Started working at Mutual Mobile",
                date: "2017-09",
            },
            {

                type: 'Event',
                personalOrProfessional: 'Professional',
                description: "Started working at Slalom Consulting",
                date: "2018-04"
            },
            {
                type: 'Event',
                personalOrProfessional: 'Professional',
                description: "Left Slalom Consulting",
                date: "2023-09",
            },

            {
                type: 'Event',
                personalOrProfessional: 'Personal',
                description: "Enrolled at the University of Texas at Austin",
                date: "2011-08",
            },

            {
                title: 'Eagle Scout Project',
                type: 'Project',
                medium: "Other",
                personalOrProfessional: "Personal",
                organzation: "Boy Scouts of America",
                date: "2009-11",
                description: "After a flood destroyed a prayer center at my mom's church, I raised money to re-build it and add a pergola.",
                images: ['./static/eagleproject1.jpg'],
                icon: 'mdi-twitter'            
            },

            {
                title: 'Eagle Scout',
                type: 'Award',
                medium: "Other",
                personalOrProfessional: "Personal",
                organzation: "Boy Scouts of America",
                date: "2010-02",
                description: "",
            },

            {
                title: 'UT Electrical Engineering Freshman Game Design Competition',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Personal",
                organzation: "Engineering School",
                date: "2014-02",
                description: "A friend and I programmed PacMan, complete with sounds. We placed 2nd.",
                images: ['./static/pacman1.jpg','./static/pacman2.jpg'],
                technologies: ["C", "TI Launchpad"],
                icon: 'mdi-ghost'
            },
            {
                title: 'UT Electrical Engineering Senior Design Project',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Personal",
                organzation: "Engineering School",
                date: "2016-08",
                description: "Our senior design project was a 'startup' called Modul-Aid. It was an IOT device and an accompanying iOS app. The IOT Device communicated with the iOS app through the headphone jack.",
                images: ['./static/modulaid0.jpg','./static/modulaid1.jpg', './static/modulaid2.jpg', './static/modulaid3.jpg',  './static/modulaid4.jpg', './static/modulaid5.jpg'],
                technologies: ["iOS", "C"],
            },

            {
                title: 'Desk, STEM Homework App',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Personal",
                organzation: "Startup",
                date: "2017-01",
                description: "While I was in college, a group of friends and I started a company called 'Desk'. We made an iOS app for STEM learning.",
                images: ['./static/desk1.jpg','./static/desk2.jpg'],
                technologies: ["iOS", "MyScript SDK"],
            },


            {
                title: 'Android App for H-E-B',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Mutual Mobile",
                date: "2018-01",
                description: "While I was at Mutual Mobile I built fingerprint login for H-E-B's Android App. When the feature first went live it was used by hundreds-of-thousands of users. This App has since been retired and replaced.",
                images: [],
                technologies: ["android"],
            },

            {
                title: 'Cloud Migration for Legacy Online Store',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2018-05",
                description: "I worked on a service in a brand new cloud architecture to help an online retailer move from on-prem to the cloud.",
                images: [],
                technologies: ["java", "spring boot", "Google Cloud Platform"],
            },

            {
                title: 'Internal Slalom Blockchain Hackathon',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2019-11",
                description: "Our hackathon entry was a system to track air-worthiness for commerical aircraft. Our team advanced to the finals.",
                images: [],
                technologies: ["Hyperledger Fabric", "javascript"],
            },

            {
                title: 'Demo App for a IOT product',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2020-01",
                description: "I built an iOS app to showcase data that is generated by modern vehicle platforms.",
                images: [],
                technologies: ["iOS"],
            },

            {
                title: 'Refund API for a Real-Time Payments Product',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2020-01",
                description: "I was part of the team that built a 'refund' api for a Venmo competitior.",
                images: [],
                technologies: ["java", "spring boot", "karate"],
            },

            {
                title: 'Cloud Tools',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2020-01",
                description: "I worked a internal product for developers to provision cloud resources at a company with a multi-cloud strategy.",
                images: [],
                technologies: ["typeScript", "vue", "express", "Microsoft SQL Server"],
            },

            {
                title: 'Re-Platform Billing Jobs + Test Harness',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2020-04",
                description: "I worked on re-platforming several applications in a large digital advertising organization. Additionally, I worked on feature development to support advertising & billing in a new territory. Near the end of this project I collaborated with a Senior Engineer to build a Test Harness for these complex billing jobs. This would enable a later re-write which I would go on to help with.",
                images: [],
                technologies: ["Java", "python2", "python3", "airflow", "docker", "Spring Boot", "oracle"],
            },

            {
                title: 'Re-Architect Billing Jobs + Tax Rule Modifications',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2021-08",
                description: "I worked on a re-write of the billing jobs code base from scratch in Java. Additionally, I led a team to implement a large tax feature across several applications. I was responsible for the design and testing strategy of this Tax Feature and I wrote a body of architecture documents to help my team understand the changes to each database and application.",
                images: [],
                technologies: ["java", "python3", "airflow", "docker", "drop wizard", "oracle"],
                role: "Engineering Lead"
            },

            {
                title: 'iOS App for Field Engineers',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2021-10",
                description: "I was part of a team that built an app for AT&T's field engineers. This app could 3d scan field assets using the iPhone 12 pro's lidar sensor and upload them for review & annotation on a web-based frontend. Among other contributions, I helped the team by compressing the images from the 3d scan as well as building a 3d cropping tool. We won an internal award for the app.",

                technologies: ["iOS", "ARKit", "iOS MetalKit"],
            },

            {
                title: 'Customer Data Platform',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2022-03",
                description: "I served as the Engineering Lead and Quality Lead for a re-build of the ETL at the heart of a Customer Data Platform (CDP). The CDP was a 'bring-your-own' data marketing solution that allowed users to run marketing campaigns based on the data they uploaded. Additionally, the ETL at the heart of the platform had built in transforms to help users massage the data into a uniform and usable format.",
                images: [],
                technologies: ["terraform", "python", "AWS Lambda", 'AWS Glue', "AWS DynamoDB", "AWS Step Functions", "Snowflake"],
                role: "Engineering Lead"
            },

            {
                title: 'Onboarding Portal',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2022-10",
                description: "I took over as the engineering lead for an onboarding portal project, and delivered it to production. In addition to normal feature work, I integrated DataDog Real User Monitoring, and wrote runbooks on the deployment methods.",
                images: [],
                technologies: ["djangoCMS", "python", "html/css/js", 'DataDog RUM', "postgres", 'nginx', 'docker'],
                role: "Engineering Lead"
            },

            {
                title: 'Studier',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Personal",
                organzation: "Personal Project",
                date: "2022-08",
                description: "While on Personal Leave from Slalom, I built an e-learning platform called Studier.",
                images: [],
                technologies: ["terraform", "golang", "vue2", 'AWS', "postgres", 'nginx'],
            },

            {
                title: 'Customer 360 Canonical Data Model',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2023-01",
                description: "I helped a large multi-national corporation build a set of highly configurable datapipelines that moved CRM data from various regional systems to a central datastore so it could be queried uniformly accross the enterprise.",
                images: [],
                technologies: ["python3", "golang", 'Google Cloud Platform', "postgres", 'docker', 'terraform'],
                role: "Engineering Lead"
            },

            {
                title: 'Data Governance Tools',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Slalom Consulting",
                date: "2023-07",
                description: "As part of a team responsible for Data Governance Tools, I built a data pipeline that identified duplicate datasets in different data stores. I also built a dashboard with streamlit which allowed for a manual review process of the 'clustered' datasets. This helped reduce the total workload on stewards.",
                images: [],
                technologies: ["python3.11", "streamlit", "postgres", "airflow", "alation", "datahub"],
                role: "Engineering Lead"
            },

            {
                title: 'Looking for my next role',
                type: 'Project',
                medium: "Software",
                personalOrProfessional: "Professional",
                organzation: "Job Search",
                date: "2023-11",
                description: "I am looking for my next role. I would like to work for a 30-500 person growth stage company. I am based in Austin and I am interested in in-person, hybrid, or remote roles.",
                images: [],                
                role: "Senior Software Engineer",
                icon: 'mdi-help'
            },

        ]
    }),

    props: {

    },
    computed: {

        sortedExperiences() {

            return this.experiences.sort((experience1, experience2) => {
                if (experience1.date > experience2.date) {
                    return -1
                } else {
                    return 1
                }
            })
        },

        filteredExperiences() {
            return this.sortedExperiences.filter((experience) => {

                if (!this.personalProfessional.includes(experience.personalOrProfessional)) {
                    return false
                }

                for (const experienceType of experience.type) {

                }
                return true

            })
        }

    },
    watch: {

    },



})

</script>
<template>
    <v-container fluid class="projects-container">

        <v-card>

            <v-toolbar density="compact">
                <v-toolbar-title>Filters</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn @click="showOptions = !showOptions">{{ showOptions ? 'Close' : 'Open' }}</v-btn>
            </v-toolbar>

            <v-expand-transition>
                <div v-show="showOptions">

                    <v-card-text>
                        <h2 class="text-h6 mb-2">
                            Personal / Professional
                        </h2>

                        <v-chip-group v-model="personalProfessional" column multiple>
                            <v-chip filter variant="outlined" value="Personal">
                                Personal
                            </v-chip>
                            <v-chip filter variant="outlined" value="Professional">
                                Professional
                            </v-chip>


                        </v-chip-group>

                        <!-- TODO -->
                        <!-- <h2 class="text-h6 mb-2">
                            Type
                        </h2>

                        <v-chip-group v-model="experienceType" column multiple>
                            <v-chip filter variant="outlined" value="Project">
                                Project
                            </v-chip>
                            <v-chip filter variant="outlined" value="Award">
                                Award
                            </v-chip>
                            <v-chip filter variant="outlined" value="Job">
                                Job
                            </v-chip>
                            <v-chip filter variant="outlined" value="Event">
                                Event
                            </v-chip>
                        </v-chip-group>

                        <h2 class="text-h6 mb-2">
                            Discipline
                        </h2>

                        <v-chip-group v-model="experienceMedium" column multiple>
                            <v-chip filter variant="outlined" value="Software">
                                Software
                            </v-chip>
                            <v-chip filter variant="outlined" value="Other">
                                Other
                            </v-chip>

                        </v-chip-group> -->
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>


        <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-timeline  density="compact" align="start" style="width: 100%;">

                    <template v-for="experience in filteredExperiences">

                        <experience-item :experience="experience"></experience-item>

                    </template>

                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>



