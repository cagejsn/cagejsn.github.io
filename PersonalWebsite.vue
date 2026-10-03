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
    tab: 'Experience',
    items: [
    'Experience', 'Hire Me', 'Personal Projects', 'Resume'
    ],
  }),

  props: {

  },
  computed: {

  },
  watch: {
    tab() {
      window.scrollTo(0, 0)
    }
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
  <div class="shell">
    <header class="top">
      <div class="brand">Cage Johnson</div>
      <nav class="nav" aria-label="Sections">
        <button
          v-for="item in items"
          :key="item"
          type="button"
          :class="{ active: tab === item }"
          :aria-current="tab === item ? 'page' : null"
          @click="tab = item"
        >
          {{ item }}
        </button>
      </nav>
    </header>

    <main class="stage">
      <experience v-show="tab === 'Experience'"></experience>
      <hire-me v-show="tab === 'Hire Me'"></hire-me>
      <projects v-show="tab === 'Personal Projects'"></projects>
      <resume v-if="tab === 'Resume'" url="./resume.pdf"></resume>
    </main>
  </div>
</template>
