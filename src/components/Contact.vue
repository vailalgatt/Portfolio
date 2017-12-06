<template>
  <div class="contact" >
  <v-app id="inspire">
   <h1>Contact</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap id="contact">
        <v-flex d-flex xs12 sm6 md6>
          <v-card id="social">
            <v-card-title primary class="title">Socials</v-card-title>
            <v-card-text
              v-text="socialMedia">

            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card id="quickContact">
            <v-card-title primary class="title">Quick Contact</v-card-title>
              <v-card-text
                v-text="quickContact">
              </v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation id="email">
              <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                :counter="10"
                required
              ></v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-select
                label="Reason"
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                required
              ></v-select>
              <v-text-field
                label="Your Message"
                v-model="info"
                :rules="infoRules"
                required
              ></v-text-field>
                <v-btn
                  @click="submit"
                  :disabled="!valid"
                >
                  submit
                </v-btn>
            </v-form>
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
    quickContact: `Need to get ahold of me NOW?`,
    socialMedia: `Connect with me`,
    show: false,
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    info: '',
    infoRules: [
      (v) => !!v || 'Please leave a message here'
    ],
    select: null,
    items: [
      'Consulting',
      'Development/Design',
      'Volunteer Opportunity',
      'Other'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          info: this.info
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#inspire {
  padding-top: 20px;
  padding-bottom: 0px;
}

#contact{
  border: solid thin grey;
}

#quickContact{
background-color: transparent;

}

#email {
  padding: 30px;
  display: none;
}

#social {
  padding: 30px;
  background-color: transparent;
}

</style>