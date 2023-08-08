<script >
export default {
  setup() {
    return {
      baseURL : "https://sc2houduan.bitlandweb.com/addons/shopro/",
     
    }
  }
}

</script>

<template>
  <div>
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/forgetpassword"></router-link>
    <router-link to="/compare"></router-link>
    <router-link to="/cart"></router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
