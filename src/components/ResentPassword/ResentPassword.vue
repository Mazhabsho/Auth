<script setup>
import axios from 'axios';
import { ref } from 'vue';

 const form = ref({
    password: '',
    confirmpassword:''
 })
   async function handleSubmit (){
    const response = await axios.post('reset',{
        password,
        confirmpassword,
        token: route.params.token
    })
    route.push('/login')
  }
</script>
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Reset Password</h3>

            <div>
                <label>password</label>
            <input type="password" v-model="form.password" placeholder="Enter password">
            </div>

            <div>
                <label>Confirm Password</label>
            <input type="password" v-model="form.confirmpassword" placeholder="Enter Confirm Password">
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
</template>