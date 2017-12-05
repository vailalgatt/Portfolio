<template>
  <div class="contact" >
  <v-app id="inspire">
   <h1>Contact</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card class="change">
            <v-card-title primary class="title">Socials</v-card-title>
            <v-card-text
              v-text="socials">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card id="email">
            <v-form v-model="valid" ref="form" lazy-validation>
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
              <v-btn @click="clear">clear</v-btn>
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

<style scoped>
#inspire {
  padding-top: 20px;
}

#email{
  padding: 30px;;
}

.show {
  background: white;
}

.show:hover {
  background-color: #607d8b;
  color: white;
  cursor: pointer;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}

.change {
  background: white;
}

.change:hover {
  background-color: #607d8b;
  color: white;
  cursor: pointer;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}
</style>