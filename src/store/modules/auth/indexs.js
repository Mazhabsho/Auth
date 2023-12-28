import  mutations from "./mutation"
import  getters from "./getters"
import  actions from "./actions"


export default {
    namespaced: true,
    state (){
        return{
            name: 'fron-end',
            age: 21
        };
    },
    mutations,
    getters,
    actions
}