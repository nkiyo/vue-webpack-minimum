<template>
<div id="app">
  <p>hello {{ who }}</p>
  <button @click="onClick">hoge</button>
</div>
</template>

<script>
export default {
  name: 'subapp',
  data() {
    return {
      who: 'SUB monk studiooo'
    }
  },
  methods: {
    onClick() {
      console.log(`aho`)
    }
  }
}
</script>
