<template>
  <div class="fixed-to">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand ml-2" to="/">Online Shop</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-light"></span>
      </button>

      <div class="collapse navbar-collapse mt-1" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/adminpage" class="nav-link text-light">Admin <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Links</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item ml-5 d-none d-md-blocks">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control search mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light search-btn my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
        <div>
          <button
            type="button"
            class="btn text-light px-0 login-signup mr-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Login | Register
          </button>
          <a href="" class="cart btn text-light d-none">
            <i class="fas fa-shopping-cart mr-1"></i>
            My Cart
            <span>1</span>
          </a>
        </div>
      </div>
      <LoginSignUp />
    </nav>
  </div>
</template>

<script>
import LoginSignUp from '../views/LoginSignup'

export default {
  data () {
    return {
    }
  },
  components: { LoginSignUp }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 7.2vh;
  background-color: #E8748F;
  padding: 0;
}
.navbar-brand {
  color: #FFD166;
  font-size: 1.35rem;
  font-weight: 500;
}
.search-btn {
  /* width: 150px; */
  border: 1px  solid #FFD166 !important;
  /* background-color: #FFD166 !important; */
  color: #FFD166;
}
.cart {
  background-color: #06D6A0;
}
.cart:hover {
  background-color: #06d69eab;
}
.search-btn:hover {
  border: none !important;
  background-color: #FFD166 !important;
  color: #fff;
}
.cart span {
  background-color: white;
  color: black;
  padding: .1rem .5rem;
  margin-left: .4rem;
  border: none;
  border-radius: 2px;
}
a:hover {
  text-decoration: none;
}
.login-signup:hover {
  color: #FFD166 !important;
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
}
.navbar-light .navbar-toggler {
  color: rgba(0,0,0,.5);
  border: none;
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 1083px) {
  .navbar {
    padding: 0 1rem;
    height: 8vh;
  }
  .d-md-blocks {
    display: block !important;
  }
  .cart {
    display: inline !important;
  }
}
@media (max-width: 500px) {
  .navbar-collapse {
    background-color: rgba(0, 0, 0, 0.15);
    color: black !important;
    padding: .5rem .7rem;
  }
}
</style>
