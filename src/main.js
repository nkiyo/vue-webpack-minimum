import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    cntList: [], 
    cntList2: [], // 毎回同じ要素を更新 
    cntObj: {}, // 毎回フィールドを追加
    cntObj2: {}, // 毎回フィールドを更新
    // TODO より複雑な配列、オブジェクト
  },
  mutations: {
    increment (state) {
      state.cntObj[Math.floor(Date.now() / 1000)] = state.count
      state.cntObj2["latestCnt"] = state.count
      state.cntList.push(state.count)
      state.cntList2[0] = state.count
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
