<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref("/")

 async function handleSubmit(){
    const response = await axios.post('forgot', email.value)
    console.log(1);
    console.log(response);
 }
</script>

<template>
   <div class="w-[500px] mt-[150px] mx-auto bg-slate-300 px-10 py-10 rounded-md">
      <form @submit.prevent="handleSubmit">
        <h3>Forgot password</h3>
         <div>
            <label>email</label>
            <input type="email" v-model="email.email" placeholder="email ...">
         </div>
         <button>submit</button>
    </form>
   </div>
    
</template>