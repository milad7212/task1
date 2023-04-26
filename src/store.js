import { createStore } from "vuex";

const store = createStore({
  state: {
    dataTable: [
      { code: 10248, name: "میلاد", family: "حسنی" },
      { code: 10249, name: "سجاد", family: "حسنی" },
    ],
  },
  mutations: {
    updateDataTable(state, newData) {
      state.dataTable = [newData, ...state.dataTable];
    },
    editDataTable(state,newData) {
        
        const newArr=[...state.dataTable];
        newArr[newData.index]=newData.data
        state.dataTable=newArr
       
    },
  },
  actions: {
    setDataTable({ commit }, newData) {
      commit("updateDataTable", newData);
    },
    setEditRow({commit},newData){
        commit('editDataTable',newData)
    }
  },
  getters: {
    allData: (state) => state.dataTable,
  },
});

export default store;
