<template>
  <div>
    <AppHeader />
    <div class="d-xl-flex">
      <AppAside class="d-none d-xxl-block w-20" />
      <router-view class="routes w-80" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppAside from './components/AppAside'
import AppFooter from './components/AppFooter'

export default {
  components: { AppHeader, AppAside, AppFooter }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
.d-xl-flex {
  top: 40px;
  position: relative;
}
body {
  background: rgba(0, 0, 0, 0.15);
}
a {
  text-decoration: none !important;
}
.routes {
  height: 85vh;
}
.w-20 {
  width: 17%;
}
@media (min-width: 1360px) {
  .w-80 {
    width: 83%;
  }
  .d-xxl-block {
    display: block !important;
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: white;
  border: none;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ef476eb0;
}
::-webkit-scrollbar-thumb:active {
  background: #ef476eb0;
}
::-webkit-scrollbar-track {
  background: white;
  border: none;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: white;
}
::-webkit-scrollbar-track:active {
  background: white;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
