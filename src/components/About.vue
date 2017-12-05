<template>
  <div class="about">
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card class="border-card">
            <v-card-title primary class="title">OVERVIEW</v-card-title>
                <v-card-text
                  v-text="location">
                </v-card-text>
                <v-card-text
                  v-text="workChippy">
                </v-card-text>
               <v-card-text
                v-text="additionalInformation">
              </v-card-text>
          </v-card>
        </v-flex>


<!-- education section -->
        <v-flex d-flex xs12 sm6 md4>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="blue-grey" dark>
                <v-card-title primary class="title">Education</v-card-title>
                  <v-card-text
                    v-text="education">
                  </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="blue-grey lighten-1" dark>
                <v-card-text
                  v-text="educationPCC">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex
                >
              <v-card color="blue-grey lighten-1" dark>
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
          <v-card class="border-card">
            <v-card-title primary class="title">Volunteer</v-card-title>
              <v-card-text
                v-text="MSC">
              </v-card-text>
               <v-card-media
                src="/src/img/msc.png"
                height="250px"
                contain>
              </v-card-media>
          </v-card>
        </v-flex>


<!-- work section -->
       <v-flex d-flex xs12 sm6 md12 child-flex>
          <v-layout row wrap>
            <v-flex d-flex>
               <v-card class="change">
                <v-card-title primary class="title" v-text="available"></v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
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
      location: `Based in Moutain Home AFB, ID`,
      MSC: `Chapter leader with MilSpouseCoders`,
      education: ``,
      work: ``,        
      educationPCC: `I hold a Computer Information Systems degree from Portland Community College.`,
      educationCW: `I'm a graduate of Boise CodeWorks Immersive Full-Stack. `,
      workChippy: `Owner and founder of the consulting and custom software development company Chippy Solutions. Call or Email to make an appointment for your first consultation`,
      additionalInformation: `I am a military spouse. Coffee fiend. Dog mom. STOTT certified Pilates instructor. And long time violinist.`,
      available: `I'm currently available to take new clients`
      }),
    }
    
</script>


<style scoped>
#inspire{
  padding-top: 25px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.bg-img {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/src/img/location.jpg') center center no-repeat;
  background-size: cover;
}

.border-card{
  border: solid black thin;
  padding: 15px;
}

.change{
  background: white;
}

.change:hover{
  background-color:#607d8b;
  color: white;
  cursor: pointer;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}


</style>