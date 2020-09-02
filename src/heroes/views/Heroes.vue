<template>
  <div class="container-fluid">
    <h1>Heroes</h1>
    <div style="display: flex; place-content: center; place-items: center;">
      <div class="mb-5">
        <Form
          :text="'Save New Hero'"
          :obj="heroForm"
          @handleSubmit="onSubmitHero"
        />
      </div>
    </div>
    <div
      v-if="isLoading"
      style="display: flex; flex-direction: row; justify-content: center;"
    >
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <section v-else>
      <div v-if="heroes.length > 0">
        <div
          class="card mt-3"
          style="width: auto;"
          v-for="hero in heroes"
          :key="hero.id"
        >
          <div v-if="editingTracker === hero.id">
            <div class="mb-5">
              <h2>Update Form Here</h2>
            </div>
          </div>

          <div v-else>
            <div class="card-header">
              <h3 class="card-title">
                {{ hero.firstName }} {{ hero.lastName }}
              </h3>
              <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
              <p class="card-text">{{ hero.knownAs }}</p>
            </div>
          </div>
          <section class="card-body">
            <div class="row">
              <button
                v-if="editingTracker === hero.id"
                @click="() => (editingTracker = '0')"
                class="btn btn-info card-link col text-center"
              >
                Cancel
              </button>

              <button
                @click="() => (editingTracker = hero.id)"
                v-else
                class="btn btn-primary card-link col text-center"
              >
                Edit
              </button>

              <button
                @click="removeHeroAction(hero.id)"
                class="btn btn-outline-danger card-link col text-center"
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Form from "../../shared/components/Form";

export default {
  name: "Heroes",
  components: {
    Form,
  },

  data: () => ({
    heroForm: {
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    },

    editingTracker: "0",
  }),

  mounted() {
    this.getHeroesAction();
  },

  computed: {
    ...mapGetters("heroModule", {
      heroes: "heroes",
      isLoading: "isLoading",
    }),
  },

  methods: {
    ...mapActions("heroModule", [
      "getHeroesAction",
      "removeHeroAction",
      "addHeroAction",
    ]),

    onSubmitHero() {
      this.addHeroAction(this.heroForm);
      this.heroForm = {};
    },
  },
};
</script>
