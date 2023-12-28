<script setup>
import { computed } from '@vue/reactivity';
import { mapGetters } from 'vuex';

function handleClick (){
    localStorage.removeItem("token")
    store.dispatch("user", null)
    router.push('/');
}

computed: {
   mapGetters(['users'])
}

</script>

<template>
    <div class="bg-black/80">
        <div class="nav py-5 flex justify-between items-center w-[1000px] mx-auto">
        <div>
            <router-link to="/"> <h2 class="text-3xl text-white font-bold">Logo</h2></router-link>
        </div>
        <div v-if="!users">
             <router-link to="/login"><button class=" bg-sky-500 px-5 mr-5 rounded border-none outline-none text-white shadow-lg py-2">login</button></router-link>
             <router-link to="/register"><button class=" bg-sky-500 px-5 rounded border-none outline-none text-white shadow-lg py-[8px]">Sing in</button></router-link>
        </div>
        <div v-if="users">
             <a href="javascript:void(0)"><button @click="handleClick" class=" bg-sky-500 px-5 mr-5 rounded border-none outline-none text-white shadow-lg py-2">logout</button></a>
        </div>
      
    </div>
    </div>
</template>

