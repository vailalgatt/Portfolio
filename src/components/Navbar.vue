<template>
  <div class="navbar">
    <v-app id="inspire">
      <v-toolbar light>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
          <v-btn flat>{{ item.text }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    //   msg: 'This is the Navbar'
    // },
      items: [
        {
          text: 'Link One'
        },
        {
          text: 'Link Two'
        },
        {
          text: 'Link Three'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>