import { createStore } from "vuex"
import  auth from './modules/auth/indexs'
const store = createStore({
    modules:{
        auth,
    }
})

export default store