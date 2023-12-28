<script setup>
import axios from 'axios';

const form = ref({
    password:" ",
    confirm_password:"",
    token:" params.token"
})


async function handleSubmit() {
 const response = await axios.post('http://localhost:8000/users',form.value)
 this.$router.push("/")
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <h2>Resent password</h2>
      <div>
        <label>Password</label>
         <input type="password" v-model="password" placeholder="password">
      </div>

       <div>
        <label>confirm Password</label>
        <input type="password" v-model="confirm_password" placeholder="confirm password">
       </div>

        <button>submit</button>
    </form>
</template>