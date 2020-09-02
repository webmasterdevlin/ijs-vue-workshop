<template>
  <div>
    <HeaderNav></HeaderNav>
    <div class="my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./shared/components/Navbar";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
/* @import "../node_modules/bootstrap-icons"; */
</style>
