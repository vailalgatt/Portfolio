<template>
  <div class="about">
        <div class="wrap-banner">
          <div class="main-title">
            <h2>
              OVERVIEW
            </h2>
            <p class="subtitle">
              <div v-text="location"></div>
            </p>
            <p class="subtitle">
              <div v-text="MSC"></div>
            </p>
            <p class="subtitle">
              <div v-text="educationPCC"></div>
            </p>
            <p class="subtitle">
              <div v-text="workChippy"></div>
            </p>
            <p class="subtitle">
              <div v-text="additionalInformation"></div>
            </p>
            <p class="subtitle">
              <div v-text="available"></div>
            </p>        
          </div>
          <vue-particles
            color="#b76e79"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="star"
            :particleSize="4"
            linesColor="#b76e79"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles> 
        </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
  })
};
</script>


<style scoped>
.about {
  background-color: black;
  color: white;
  padding-bottom: 100px;
  padding-top: 20px;
}

.subtitle{
  border-top: solid #b76e79 thin;
  padding: 20px;
}
  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: inline-flex;
    /* height: 100%; */
    justify-content: center;
  }

.main-section {
  max-width: 650px;
  margin: auto;
  padding: 0 1rem;
}

</style>