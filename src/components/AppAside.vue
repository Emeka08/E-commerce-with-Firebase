<template>
  <div class="aside ml-3 mr-4 mt-3">
    <h2>Categories</h2>
    <aside></aside>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside {
  /* width: 100%; */
  height: 70vh;
}
aside {
  background-color: #ef476eb0;
  height: 100%;
  overflow: auto;
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
