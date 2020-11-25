<template>
  <div>
    <h2 class="text-dark px-3 my-3">Ice Cream</h2>
    <AppItems />
  </div>
</template>

<script>
import AppItems from '../components/AppItems'

export default {
  components: { AppItems }
}
</script>

<style scoped>
h2::before {
  content: '';
  position: absolute;
  width: 20%;
  height: 3px;
  margin-top: 33px;
  background: #E8748F;
  z-index: -1;
}
@media (min-width: 1200px) {
  h2{
    font-size: 1.3rem;
    margin-top: 3.6rem !important;
    margin-bottom: 1.2rem;
  }
  .mt-5 {
    margin-top: 4rem !important;
  }
  h2::before {
    width: 4%;
    top: 45px;
    left: inherit;
  }
}
</style>
