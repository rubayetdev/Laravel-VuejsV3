<script setup>

</script>

<template>
    <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="register">
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="name">Name</label>
                <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" v-model="registerForm.name" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="email">Email</label>
                <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" v-model="registerForm.email" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 mb-2" for="password">Password</label>
                <input type="password" id="password" class="w-full p-2 border border-gray-300 rounded" placeholder="Enter your password" v-model="registerForm.password" />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Register</button>
            <p class="mt-4 text-center">
                Already have an account?
                <a href="#" class="text-blue-600 hover:underline" @click="showLogin">Login</a>
            </p>
        </form>
    </div>

</template>

<style scoped>

</style>
