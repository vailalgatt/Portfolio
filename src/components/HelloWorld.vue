<template>
  <div class="hello">
    <navbar></navbar>
    <about></about>
    <project></project>
    <contact></contact>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Project from './Project'
import Contact from './Contact'
import About from './About'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
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
