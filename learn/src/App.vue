<script setup>
import { ref } from 'vue';

// import CounterComponent from './components/CounterComponent.vue';
// import PropComponent from './components/PropComponent.vue';
import SignUpForm from './components/SignUpForm.vue';
import JobsComp from './components/JobsComp.vue';

//const showPropComponent = ref(false);

// function toggleShowEvent() {
//   showPropComponent.value = !showPropComponent.value;
// }

</script>

<template>
  <header>
    <router-link to="/">Sign up</router-link>
    <router-link to="/jobs">Jobs</router-link>
    <router-link to="/counter">About</router-link>
    <!-- <CounterComponent>
      <h2>This is a slot</h2>
      <p>TEST TEST TEST TEST</p>
    </CounterComponent>
    <button @click.shift="toggleShowEvent">Component :]</button> -->
    <!-- <teleport to=".teleport" v-if="showPropComponent">
      <PropComponent dumb="Hello Every Nyan" numb="101010" @close="toggleShowEvent">
        <tamplate v-slot=links style="display: flex; justify-content: space-between">
        <a href="#">REGISTER</a>
        <a href="#">LOGIN</a>
      </tamplate>
        <p>This is slot test :)</p>
      </PropComponent>
    </teleport> -->
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
