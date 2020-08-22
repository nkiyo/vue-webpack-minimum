<template>
  <div id="app">
    <p>hello {{ who }}</p>
    <p>hello {{ reversedWho }}</p>
    <p>vuex counter is {{ vuexCounter }}</p>
    <button @click="onclick">hoge</button>
  </div>
</template>

<script>
import {MyClass} from './myclass'
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
    },
    vuexCounter: function() {
      // TODO 複雑なオブジェクトの更新を検知して、
      // 加工して返す
      return this.$store.state.count;
    }
  },
  methods: {
    onclick: function() {
      this.$store.commit('increment')
      //console.log(`vuex ${this.$store.state.count}`)
      
      const mc = new MyClass(1, 2, 'hige')
      this.items.push(123) // なんの警告もなし
      //console.log(`${this.items.length}`)
      //console.log(`${mc.getS()}`)
    }
  }
};
</script>
