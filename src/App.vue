<template>
  <div id="app">
    <p>hello {{ who }}</p>
    <p>hello {{ reversedWho }}</p>
    <!--  <p>vuex counter is {{ vuexCounter }}</p> -->
    <p>vuex cntList is {{ vuexCntList }}</p>
    <p>vuex cntList2 is {{ vuexCntList2 }}</p>
    <p>vuex cntObj is {{ vuexCntObj }}</p>
    <p>vuex cntObj2 is {{ vuexCntObj2 }}</p>
    <button @click="onclick">hoge</button>
  </div>
</template>

<script>
import {MyClass} from './myclass'
import difference from 'lodash-es/difference'
import get from 'lodash-es/get'
import set from 'lodash-es/set'
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
    //vuexCounter: function() {
    //  // TODO 複雑なオブジェクトの更新を検知して、
    //  // 加工して返す
    //  return this.$store.state.count;
    //},
    vuexCntList: function() {
      return this.$store.state.cntList;
    },
    vuexCntList2: function() {
      return this.$store.state.cntList2;
    },
    vuexCntObj: function() {
      //const obj = this.$store.state.cntObj;
      //return obj
      return this.$store.state.cntObj;
    },
    vuexCntObj2: function() {
      //const obj2 = this.$store.state.cntObj2;
      //return obj2
      return this.$store.state.cntObj2;
    },
  },
  methods: {
    onclick: function() {
      this.$store.commit('increment')
      //console.log(`vuex ${this.$store.state.count}`)
      
      const mc = new MyClass(1, 2, 'hige')
      this.items.push(123) // なんの警告もなし
      //console.log(`${this.items.length}`)
      //console.log(`${mc.getS()}`)

      // lodash-es sample
      console.log(`lodash-es difference ${difference([3, 2, 1], [1, 2])}`)
      let object = { 'a': [{ 'b': { 'c': 3 } }] };
      console.log(`lodash-es get ${get(object, 'a[0].b.c')}`) // => 3
      console.log(`lodash-es get ${get(object, 'a[1].b.c')}`) // => undefined
      console.log(`lodash-es get ${get(object, 'a[0].b.d')}`) // => undefined
      set(object, 'a[0].b.c', 4)
      console.log(`lodash-es set result ${get(object, 'a[0].b.c')}`) // => 4
    }
  }
};
</script>
