<template>
  <div id="app">
    <p>hello {{ who }}</p>
    <p>hello {{ reversedWho }}</p>
    <button @click="onclick">hoge</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      who: "monk studio",
      /** @type {{id: number, text: string}[]} */
      items: []
    };
  },
  computed: {
    reversedWho: function() {
      return this.who
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    onclick: function() {
      this.items.push(123)
      console.log(`${this.items.length}`)
    }
  }
};
</script>
