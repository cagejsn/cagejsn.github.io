<script lang="ts">

import Resume from './Components/Resume.vue'
import AboutMe from './Components/AboutMe.vue'
import Projects from './Components/Projects.vue'
import Videos from './Components/Videos.vue'
export default {

  data: () => ({
    tab: null,
    items: [
      'Projects', 'About Me', 'Resume'
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
    'videos': Videos
  }
}

</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <v-tabs v-model="tab" align-tabs="title">
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-window v-model="tab" style="height: 100%">
        <v-window-item value="Projects" class="window-item">
          <projects></projects>
        </v-window-item>
        <v-window-item value="About Me" class="window-item">
          <about-me></about-me>
        </v-window-item>
        <v-window-item value="Resume" class="window-item">
          <resume url="./resume.pdf"></resume>
        </v-window-item>
      </v-window>
    </v-main>
  </v-app>
</template>



