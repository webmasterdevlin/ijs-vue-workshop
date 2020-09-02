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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
