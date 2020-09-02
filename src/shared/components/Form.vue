<template>
  <div class="card my-3" style="width: auto;">
    <VeeForm
      class="card-header"
      @submit="onSubmit"
      :validation-schema="reusableFormValidation"
      style="min-width: 460px"
    >
      <section class="d-flex flex-row">
        <div class="mt-3 mr-3 input-width">
          <section class="form-group">
            <label for="firstName" class="mr-2">First Name</label>
            <ErrorMessage name="firstName" class="text-danger" />
            <Field
              id="firstName"
              v-model="obj.firstName"
              placeholder="📛"
              autocomplete="off"
              name="firstName"
              as="input"
              type="text"
              class="form-control"
            />
          </section>
        </div>
        <div class="mt-3 ml-3 input-width">
          <section class="form-group">
            <label for="lastName" class="mr-2">Last Name</label>
            <ErrorMessage name="lastName" class="text-danger" />
            <Field
              id="lastName"
              v-model="obj.lastName"
              placeholder="📛"
              autocomplete="off"
              name="lastName"
              as="input"
              type="text"
              class="form-control"
            />
          </section>
        </div>
      </section>
      <section class="form-group">
        <label for="house" class="mt-3 mr-2">House</label>
        <ErrorMessage name="house" class="text-danger" />
        <Field
          id="house"
          v-model="obj.house"
          placeholder="🏠"
          autocomplete="off"
          name="house"
          as="input"
          type="text"
          class="form-control"
        />
      </section>
      <section class="form-group">
        <label for="knownAs" class="mt-3 mr-2">Known as</label>
        <ErrorMessage name="knownAs" class="text-danger" />
        <Field
          id="knownAs"
          v-model="obj.knownAs"
          placeholder="👀"
          autocomplete="off"
          name="knownAs"
          as="input"
          type="text"
          class="form-control"
        />
      </section>
      <button type="submit" class="btn btn-success mt-3">
        {{ text }}
      </button>
      <pre>{{ obj }}</pre>
    </VeeForm>
  </div>
</template>

<script>
import { Field, Form as VeeForm, ErrorMessage } from "vee-validate";
import { reusableFormValidation } from "./reusableFormValidation";

export default {
  name: "Form",

  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },

  data: () => ({
    reusableFormValidation,
  }),

  props: {
    text: {
      type: String,
      default: () => String,
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped></style>
