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
      //state.cntObj[Math.floor(Date.now() / 1000)] = state.count // caveat
      //Vue.set(state.cntObj, Math.floor(Date.now() / 1000), state.count) // reactive
      //state.cntObj2["latestCnt"] = state.count // caveat
      //Vue.set(state.cntObj, "LatestCnt", state.count) // reactive
      //state.cntObj2 = { ...state.cntObj2, latestCnt: state.count } // ビルドエラー
      //state.cntList.push(state.count) // NOT caveat
      //state.cntList2[0] = state.count // caveat
      //Vue.set(state.cntList2, 0, state.count) // reactive
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
