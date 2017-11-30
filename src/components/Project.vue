<template>
  <div class="project">
   <v-app id="cards">
    <h1>Projects</h1>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/music-player.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Music Player</span><br>
              <span>Made with:</span><br>
              <span><i>javascript, sass, bootstrap, itunes api </i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="blue" href="https://vailalgatt.github.io/Music-Player/">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

<!-- d&d -->
        <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/dd.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Dungeons Master Encounter Manager</span><br>
              <span>Made with:</span><br>
              <span><i>vue, sass, bootstrap, itunes api </i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="blue" href="https://dmem.herokuapp.com/#/">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>


<!-- Pet Welfare -->
        <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/pet-welfare.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Pet Welfare</span><br>
              <span>Made with:</span><br>
              <span><i>vue, sass, bootstrap, itunes api </i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="blue" href="https://vailalgatt.github.io/pet-welfare-upgrade/">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>



<!-- d&d -->
        <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/ruby.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Pilates Forum</span><br>
              <span>Made with:</span><br>
              <span><i>Ruby on Rails, sass, bootstrap, coffeescript </i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="blue" href="https://pilatesforum.herokuapp.com/">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>



<!-- d&d -->
        <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/kanban.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Kanban</span><br>
              <span>Made with:</span><br>
              <span><i>vue, sass, bootstrap</i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat color="blue" href="https://vailalgatt.github.io/vail-kanban/#/login">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>



<!-- d&d -->
        <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="blue--text"
            height="400px"
            src="/src/img/chippy.jpg"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Chippy Solutions</span><br>
              <span>Made with:</span><br>
              <span><i>React, sass, bootstrap </i></span>
            </div>
              <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn flat disabled color="blue" href="#">Check it out</v-btn>
          </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>                
  </v-app>
</div>
</template>

<script>
export default {
  name: 'Project',
    data: () => ({
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      })
    }
//projects to add to this component
//1. D&D manager app
//2. Pet Welfare
//3. Music Manager
//4. Ruby Pilates App
//5. MilSpouseCoders
//6. Chippy Solutions
</script>

<style scoped>
h1{
  padding-bottom: 20px;
}
</style>