<template>
  <div class="footer d-flex justify-content-center align-items-center fixed-bottom">
    <h2 class="mb-0">Designed by <a target="blank" href="http://emekaportfolio.surge.sh/#/">Emeka</a></h2>
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
.footer {
  height: 7.8vh;
  border-top: 3px solid #E8748F;
  background-color: #E8748F;
}
h2 {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 5px;
  color: black;
  text-align: center;
}
a {
  color: #FFD166;
}
a:hover{
  color: #e8748f93;
}
@media (min-width: 576px) {
  h2 {
    font-size: 15px;
  }
}
@media (min-width: 1083px) {
  .footer {
    height: 7vh;
  }
}
@media (min-width: 1360px) {
  .footer {
    background-color: inherit;
  }
  a {
    color: #E8748F;
  }
}
</style>
