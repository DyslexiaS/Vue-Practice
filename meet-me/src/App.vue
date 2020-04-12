<template>
  <div class="container">
    <app-new-block></app-new-block>

  </div>
</template>

<script>
import NewBlock from './components/NewBlock.vue';

export default {
  name: 'App',
  components: {
    appNewBlock: NewBlock,
  }
}
</script>

<style>

</style>
