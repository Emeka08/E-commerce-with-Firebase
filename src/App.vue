<template>
  <div>
    <AppHeader />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  background: rgba(0, 0, 0, 0.7);
}
a {
  text-decoration: none !important;
}
h1,
h2,
h3,
p {
  font-family: "Kaushan Script", cursive;
}
</style>
