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
    <about></about>
    <project></project>
    <contact></contact>
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
