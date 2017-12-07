<template>
  <div class="hello">
    <nav id="header" class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
      <a class="navbar-brand" href="Home"><h1>VAIL ALGATT</h1></a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="Home" id="styleLink">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="About" id="styleLink">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Project" id="styleLink">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Contact" id="styleLink">Contact</a>
          </li>
        </ul>
        <span class="navbar-text">
           <a class="nav-link" href="https://vailalgatt.github.io/resume-vail/">Resume</a>
        </span>
      </div>
    </nav>
    <about></about>
    <project></project>
    <contact></contact>
  <gmap-map
    :center="center"
    :zoom="10"
    style="width: 100%; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

export default {
  name: "Home",
  data() {
    return {
      center: { lat: 43.0511086, lng: -115.90115 },
      markers: [
        {
          position: { lat: 43.0511086, lng: -115.90115 }
        },
        {
          position: { lat: 43.0511086, lng: -115.90115 }
        }
      ]
    };
  },
  components: {
    Project,
    Contact,
    About
  }
};
</script>

<style scoped>

.nav-link{
  color: white;
  font-weight: bold;
}

.nav-link:hover{
  color: #b76e79;
}

#styleLink{
  font-weight: bold;
}

#styleLink:hover{
      text-decoration: line-through #b76e79;

}
</style>
