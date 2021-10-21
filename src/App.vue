<template>
  <div id="app" class="font-publicSans">
    <header>
      <top-header />
    </header>
    <main>
      <section>
        <intro />
      </section>
      <section>
        <reason />
      </section>
      <section>
        <articles />
      </section>
    </main>
    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
import header from './components/header.vue';
import intro from './components/intro.vue';
import reason from './components/reason.vue';
import articles from './components/articles.vue';
import footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    'top-header': header,
    intro,
    reason,
    articles,
    'bottom-footer': footer
  }
}
</script>

<style>

</style>
