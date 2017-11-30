<template>
  <div class="about">
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card color="blue lighten-3" dark>
            <v-card-title primary class="title">About</v-card-title>
            <v-card-text
              v-text="about">
            </v-card-text>
          </v-card>
        </v-flex>

<!-- education section -->
        <v-flex d-flex xs12 sm6 md4>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="grey darken-2" dark >
                <v-card-title primary class="title text-xs-center">Education</v-card-title>
                  <v-card-text
                    v-text="education">
                  </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="grey darken-2" dark >
                <v-card-text
                  v-text="educationPCC">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex
                >
                  <v-card
                    color="grey darken-2"
                    dark
                  >
                    <v-card-text
                      v-text="educationCW">
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>


        <v-flex d-flex xs12 sm6 md4 child-flex>
          <v-card color="blue lighten-3" dark>
            <v-card-title primary class="title">Volunteer</v-card-title>
              <v-card-text
                v-text="MSC">
              </v-card-text>
          </v-card>
        </v-flex>


<!-- work section -->
       <v-flex d-flex xs12 sm6 md6 child-flex>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="grey darken-2" dark>
                <v-card-text
                  v-text="workChippy">
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 sm6 md6>
          <v-card color="grey darken-2" dark>
            <v-card-text
              v-text="additionalInformation">
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
  name: 'About',
    data: () => ({
      about: `Based in Mountain Home AFB, ID.`, 
      MSC: `I am a chapter leader with MilSpouseCoders 
              `,
      education: ``,        
      educationPCC: `I hold a Computer Information Systems degree from Portland Community College.`,
      educationCW: `I'm a graduate of Boise CodeWorks Immersive Full-Stack. `,
      workChippy: `Owner and founder of the consulting and customer software development company Chippy Solutions. Call or Email to make an appointment for your first consultation`,
      additionalInformation: `I am a military spouse. Coffee fiend. Dog mom. STOTT certified Pilates instructor. And long time violinist.`
      })
    }
</script>

<style scoped>
#inspire{
  padding-top: 25px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
</style>