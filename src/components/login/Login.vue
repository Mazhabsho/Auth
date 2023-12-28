<script setup>
import { ref } from 'vue';
import axios from 'axios';

const forms = ref({
    email:" ",
    password:" "
})


async function handleSubmits() {
    const response = await axios.post('http://localhost:8000/users', forms.value);
    return localStorage.setItem("token", response.forms.token);
    this.$store.dispatch("user", response.data.user), 
   this.$router.push('/')
}

</script>

<template>
    <div class="w-[500px] mx-auto bg-red-500">
        <form @submit.prevent="handleSubmits">
     <h3>Login</h3>
    <div class="form-group">
     <label>Email</label>
     <input type="email" v-model="forms.email" class="form-control" placeholder="email">
    </div>

    <div class="form-group">
     <label>Password</label>
     <input type="password" v-model="forms.password" class="form-control" placeholder="password">
    </div>

    <button>login</button>
     <p>
        <router-link to="forgot">forgot password ?</router-link>
     </p>
    </form>
    </div>
    
</template>