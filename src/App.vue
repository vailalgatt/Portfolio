<template>
  <div id="app">
    <!-- <v-app light> -->
      <router-view/>
    <!-- </v-app> -->
  </div>
</template>

<script>
import Home from './components/Home'
import Project from '@/components/Project'
import About from '@/components/About'
import Contact from '@/components/Contact'
export default {
  name: 'app',
  components: {
    Home,
    Project,
    About,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
