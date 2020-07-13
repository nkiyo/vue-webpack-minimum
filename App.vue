<template>
<div id="app">
  <p>hello {{ who }}</p>
  <button @click="onClick">hoge</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      who: 'MAIN monk studiooo'
    }
  },
  methods: {
    onClick() {
      console.log(`aho`)
    }
  }
}
</script>
