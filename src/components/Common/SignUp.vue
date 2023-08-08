<script>
import axios from "axios";
import Swal from 'sweetalert2'
export default {
  data() {
    return {
        name: null,
      phone: null,
      password: null,
      confirmPassword: null,
      isNotSame: 'this.password !== this.confirmPassword',
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        // call signup api
        const user = {
          phone: this.phone,
          Name: this.name,
          password: this.password,
        };
        console.log("user", user);
        await axios
          .post("https://sc2houduan.bitlandweb.com/addons/shopro/user/register", user)
          .then(() => {
            this.$router.replace("/login");
            Swal.fire({
              text: "User signup successful, please login",
              icon: "success",
            });
          })
          .catch((err) => console.log("err", err));
      } else {
        // show some error
        Swal.fire({
          text: "passwords don't match",
          icon: "error",
        });
      }
    },
  },
};
</script>
<template>
    <section class="gry-bg py-4">
        <div class="profile">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                        <div class="card">
                            <div class="text-center pt-4">
                                <h1 class="h4 fw-600">
                                    Create an account
                                </h1>
                            </div>
                            <div class="px-4 py-3 py-lg-4">
                                <div class="">
                                    <form @submit="signup" id="reg-form" class="form-default" role="form"
                                        action="/register" method="POST">
                                        <input type="hidden" name="_token" >
                                        <div class="form-group">
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Your Name"
                                            v-model="name"
                                            name="name"
                                            required>
                                        </div>

                                        <div class="form-group">
                                            <input 
                                            type="tel" 
                                            class="form-control"  
                                            placeholder="Enter your phone number"
                                            name="phone"
                                            v-model="phone"
                                            required
                                            >
                                        </div>

                                        <div class="form-group">
                                            <input 
                                            type="password" 
                                            class="form-control" 
                                            placeholder="Password"
                                            v-model="password"
                                            name="password"
                                            required>
                                        </div>
                                        <div class="form-group">
                                            <input 
                                            type="password" 
                                            class="form-control" 
                                            placeholder="Confirm Password"
                                            v-model="confirmPassword"
                                            name="password_confirmation"
                                            required>
                                        </div>


                                        <div class="mb-3">
                                            <label class="aiz-checkbox">
                                                <input type="checkbox" name="checkbox_example_1" required="">
                                                <span class="opacity-60">By signing up you agree to our terms and
                                                    conditions.</span>
                                                <span class="aiz-square-check"></span>
                                            </label>
                                        </div>

                                        <div class="mb-5 ">
                                            <button type="submit" class="btn btn-primary w-100 fw-600">Create
                                                Account</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="text-center">
                                    <p class="text-muted mb-0">Already have an account?</p>
                                    <a href="/login">Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>.form-group {
    margin-bottom: 1rem;
}</style>
