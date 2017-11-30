<template>
  <div class="hello">
    <nav id="header" class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <a class="navbar-brand" href="Home"><h1>Vail Algatt</h1></a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Project">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Contact">Contact</a>
          </li>
        </ul>
        <span class="navbar-text">
           <a class="nav-link" href="Resume">Resume</a>
        </span>
      </div>
    </nav>
    <about></about>
    <project></project>
    <contact></contact>
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
    }
  },
  components: {
    Project,
    Contact,
    About
  }
};
</script>

<style scoped>

</style>
