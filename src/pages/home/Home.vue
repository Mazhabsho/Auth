<script setup>
import axios from 'axios';
import { ref } from 'vue';

const users = ref({
    users : null
})

 async function created () {
   const response = await axios.get('/users')
   store.dispatch("http://localhost:8000/users", response.data);
 }
</script>

<template>  
   <div class="w-[500px] mx-auto mt-10">
    <h2>Hello Vue</h2>
    <h2 v-if="users">Hi,  {{ users.first_name }} {{ users.last_name }}</h2>
    <h2 v-if="!users">You not loged in!</h2>
   </div>
</template>