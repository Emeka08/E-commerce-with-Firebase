<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">Login</h1>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                />
              </div>
              <div class="form-group">
                <p class="text-center">
                  By signing up you accept our <a href="#">Terms Of Use</a>
                </p>
              </div>
              <div class="col-md-12 text-center">
                <button
                  type="submit"
                  class="btn btn-block mybtn btn-primary tx-tfm"
                >
                  Login
                </button>
              </div>
              <div class="col-md-12">
                <div class="login-or">
                  <hr class="hr-or" />
                  <span class="span-or">or</span>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <p class="text-center">
                  <a href="javascript:void();" class="google btn mybtn"
                    ><i class="fa fa-google-plus"> </i> Signup using Google
                  </a>
                </p>
              </div>
              <div class="form-group">
                <p class="text-center">
                  Don't have account?
                  <a href="#" id="signup" @click="swap">Sign up here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  height: 85vh;
  flex-direction: column;
}
.myform {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem 1.5rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #f8f9fa;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
}
.tx-tfm {
  text-transform: uppercase;
}
.mybtn {
  border-radius: 50px;
}
h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
label {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
}
p {
  font-size: 0.75rem;
}
.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.google {
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  outline: none;
  border: 1px solid lightgrey;
}
form .error {
  color: #ff0000;
}
.modal-header {
  border: none;
  padding-bottom: 0;
}
@media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1300px !important;
    }
}
</style>
