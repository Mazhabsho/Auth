<script setup>
import { ref } from 'vue';
import axios from  "axios"
import { RouterLink } from 'vue-router';

const form = ref({
    firstname:'',
    lastname:'',
    email:'',
    password:'', 
    passwordconfirm:''
})


 async function handleSubmit(){
        const response = await axios.post('register', form.value).
        then(response =>{console.log(response)}).
        catch(e =>{console.error(r)})
        router.push('/login')
    }   

</script>

<template>
    <div class="w-[500px] mt-[40px] mx-auto bg-slate-300 px-10 py-5 rounded-md">
        <h2 class="my-2 text-3xl font-serif">Register</h2>
    <form @submit.prevent="handleSubmit">
        <div> 
            <label>FirstName</label>
            <input type="text" v-model="form.firstname" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="FirstName ...">
        </div>
        <div>
            <label>LastName</label>
            <input type="text" v-model="form.lastname" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="LastName ...">
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="form.email" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="email ...">
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="form.password" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="password ...">
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" v-model="form.passwordconfirm" class="w-full py-2 pl-2 my-2 outline-none border-none rounded"  placeholder="Confirmpassword ...">
        </div>
        <div class="mt-5">
            <RouterLink to="/" type="submit" class="bg-sky-500  text-white border-none outline-none px-10 py-2 rounded-md shadow-md">submit</RouterLink>
        </div>
    </form>
</div>
</template>