<template>
  <div class="contact" >
  <v-app id="inspire">
   <h1>Contact</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="blue lighten-3" dark>
            <v-card-title primary class="title">Socials</v-card-title>
            <v-card-text
              v-text="lorem">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="grey darken-2" dark >
            <v-card-title primary class="title">Email</v-card-title>
            <v-card-text
              v-text="lorem">
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>

<style scoped>
#inspire {
  padding-top: 20px;
}
</style>