<template>
    <div class="vue-template">
        <h2>{{ msg }}</h2>
        <form>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fab fa-google"></i></a></li>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
export default {
  name: 'LoginComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: crimson;

h2 {
  margin: 20px 0 20px;
  color: black;
}
label{
  color: black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
}/*
.forgot-password
{
  background-color:black !important;
}*/
.form-control{
    width: 50%;
    margin-left: 25%;
    margin-bottom: 20px;
}
.vertical-center .form-control:focus {
  border-color: black;
  box-shadow: none;
}


.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>