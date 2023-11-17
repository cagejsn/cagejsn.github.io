<script lang="ts">

import Resume from './Components/Resume.vue'
import AboutMe from './Components/AboutMe.vue'
import Projects from './Components/Projects.vue'
import Videos from './Components/Videos.vue'
import Experience from './Components/Experience.vue'
import HireMe from './Components/HireMe.vue'


import { defineComponent } from 'vue'

export default defineComponent({

  data: () => ({
    tab: null,
    items: [
    'Experience', 'Hire Me', 'Personal Projects', 'Resume'
    ],
  }),

  props: {

  },
  computed: {

  },
  components: {
    'resume': Resume,
    'about-me': AboutMe,
    'projects': Projects,
    'videos': Videos,
    'experience': Experience,
    'hire-me': HireMe
  }
})

</script>

<template>
  <v-app>

    <v-app-bar density="compact" >
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-app-bar>


    <v-window v-model="tab" style="height: 100%; background-color: #eeeeee;">
      <v-window-item value="Experience" class="window-item">
        <experience></experience>
      </v-window-item>
      <v-window-item value="Hire Me" class="window-item">
        <hire-me></hire-me>
      </v-window-item>
      <v-window-item value="Personal Projects" class="window-item">
        <projects></projects>
      </v-window-item>

      <v-window-item value="Resume" class="window-item">
        <resume url="./resume.pdf"></resume>
      </v-window-item>

    </v-window>


  </v-app>
</template>



