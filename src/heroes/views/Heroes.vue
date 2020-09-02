<template>
  <div class="container-fluid">
    <h1>Heroes</h1>
    <section>
      <div v-if="heroes.length > 0">
        <div class="card mt-3" style="width: auto;" v-for="hero in heroes" :key="hero.id">
          <div class="card-header">
            <h3 class="card-title">{{ hero.firstName }} {{ hero.lastName }}</h3>
            <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
            <p class="card-text">{{ hero.knownAs }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
