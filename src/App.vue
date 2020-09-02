<template>
  <div id="app">
    <h1 v-if="message.length">MESSAGE: {{ message }}</h1>
    <h1 v-else>No messages</h1>

    <input v-model="message" />

    <button @mouseenter="clearMessage">Clear</button>

    <div v-for="n in messages" :key="n">
      <div>{{ n }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    message: "Vuejs Workshop",
    messages: ["naruto", "sasuke", "lee", "kakashi"],
  }),

  methods: {
    clearMessage() {
      this.message = "";
    },
    // other methods...
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    // HTTP GET REQUEST
  },
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
