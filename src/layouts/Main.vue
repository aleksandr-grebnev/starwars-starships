<template>
  <div class="container">
    <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">The Star Wars Starships</h1>
          <p class="lead text-muted">A Starship resource is a single transport craft that has hyperdrive capability.</p>
            <router-link to="/">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                    Home
                </button>
            </router-link>
        </div>
      </section>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped>
  :root {
    --jumbotron-padding-y: 3rem;
  }

  .jumbotron {
    padding-top: var(--jumbotron-padding-y);
    padding-bottom: var(--jumbotron-padding-y);
    margin-bottom: 0;
    background-color: #fff;
  }
  @media (min-width: 768px) {
    .jumbotron {
      padding-top: calc(var(--jumbotron-padding-y) * 2);
      padding-bottom: calc(var(--jumbotron-padding-y) * 2);
    }
  }

  .jumbotron p:last-child {
    margin-bottom: 0;
  }

  .jumbotron-heading {
    font-weight: 300;
  }

  footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  footer p {
    margin-bottom: .25rem;
  }

  .box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
  }

  [v-cloak] {
    display: none;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .post-cards {
    min-height: 250px;
    padding: 30px;
    background-color: #252519;
    color: #fff;
    margin: 10px;
  }

  .b-preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
  }
</style>
