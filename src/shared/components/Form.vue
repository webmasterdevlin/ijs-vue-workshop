<template>
  <div class="card my-3" style="width: auto;">
    <form class="card-header">
      <section class="d-flex flex-row">
        <div class="mt-3 mr-3 input-width">
          <section class="form-group">
            <label for="firstName">First Name</label>
            <input />
          </section>
        </div>
        <div class="mt-3 ml-3 input-width">
          <section class="form-group">
            <label for="lastName">Last Name</label>
            <input />
          </section>
        </div>
      </section>
      <section class="form-group">
        <label for="house" class="mt-3">House</label>
        <input />
      </section>
      <section class="form-group">
        <label for="knownAs" class="mt-3">Known as</label>
        <input />
      </section>
      <button type="submit" class="btn btn-success mt-3">
        text
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {},

  methods: {},
};
</script>

<style scoped></style>
