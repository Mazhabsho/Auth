<script setup>
import { computed } from 'vue';
import axios from 'axios';
import { ref } from 'vue';
 import { mapState } from 'vuex';
import router from '../../routes';
import store from '../../vuex/Vuex';
import Error from '../../components/error/Error.vue'

 const form = ref({
    email: "",
    password:"",
    error:''
 })

computed:{
   mapState('auth', {
     age: state => state.age
    })
}

 async function handleSubmit() {
  try{
  const response = await axios.post('/login', form.value)
  localStorage.setItem('token, response.form.token')
  store.dispatch('users', response.data.users)
  router.push("/")
} catch(e){
  this.error = 'Invalid password or email'
}
  }
</script>


<template>
  <div class="w-[500px] mt-[150px] mx-auto bg-slate-300 px-10 py-10 rounded-md">
    
     <h2 class="my-2 text-3xl font-serif"> Login {{ name }}</h2>
    <form @submit.prevent="handleSubmit">
    <div>
        <label>Email</label>
        <input type="email" v-model="form.email" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"   placeholder="Email ...">
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model="form.password" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="Password ...">
    </div>
    <button class="bg-sky-500 text-white border-none outline-none px-10 py-2 rounded-md shadow-md">Login</button>

    <p class="text-[serif] mt-2">
      <router-link to="forgot">forgot-pasword</router-link>
    </p>
 </form>
  </div>
</template>