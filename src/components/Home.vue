<template>
  <div class="hello">
    <v-app id="inspire">
      <v-toolbar light>
        <v-toolbar-title>Vail Algatt</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
          <v-btn flat>{{ item.text }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app>
    <about div class="col-xs-12"></about>
    <project div class="col-xs-12"></project>
    <contact div class="col-xs-12"></contact>
  </div>
</template>

<script>
import Project from './Project'
import Contact from './Contact'
import About from './About'

export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          text: 'About'
        },
        {
          text: 'Projects'
        },
        {
          text: 'Contact'
        }
      ]
    }
  },
  components: {
    Project,
    Contact,
    About
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello{
      margin-top:0px;
}
</style>
