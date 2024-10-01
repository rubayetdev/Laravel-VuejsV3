<template>
    <div>
        <div v-if="isRegister">
            <!-- Registration Panel -->
            <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
                <form @submit.prevent="register">
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2" for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your name"
                            v-model="registerForm.name"
                        />
                        <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2" for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                            v-model="registerForm.email"
                        />
                        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 mb-2" for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your password"
                            v-model="registerForm.password"
                        />
                        <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 mb-2" for="password_confirmation">Confirm Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Confirm your password"
                            v-model="registerForm.password_confirmation"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                    <p class="mt-4 text-center">
                        Already have an account?
                        <a href="#" class="text-blue-600 hover:underline" @click="showLogin">Login</a>
                    </p>
                </form>
            </div>
        </div>

        <div v-else>
            <!-- Login Panel -->
            <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
                <form @submit.prevent="login">
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2" for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                            v-model="loginForm.email"
                        />
                        <span v-if="loginError" class="text-red-500 text-sm">{{ loginError }}</span>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 mb-2" for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter your password"
                            v-model="loginForm.password"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <p class="mt-4 text-center">
                        Don't have an account?
                        <a href="#" class="text-blue-600 hover:underline" @click="showRegister">Register</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isRegister: false, // Controls the display of registration or login form
            registerForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            loginForm: {
                email: '',
                password: '',
            },
            errors: {}, // To store validation errors from registration
            loginError: '', // To store error message from login
        };
    },
    methods: {
        showRegister() {
            this.isRegister = true;
            this.clearForms();
        },
        showLogin() {
            this.isRegister = false;
            this.clearForms();
        },
        clearForms() {
            this.registerForm = { name: '', email: '', password: '', password_confirmation: '' };
            this.loginForm = { email: '', password: '' };
            this.errors = {};
            this.loginError = '';
        },
        async register() {
            try {
                this.errors = {};
                const response = await axios.post('/api/register', this.registerForm);
                alert(response.data.message); // Display success message
                this.showLogin(); // Switch to login after successful registration
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors; // Get validation errors
                } else {
                    alert('Registration failed. Please try again.'); // Handle other errors
                }
            }
        },
        async login() {
            try {
                this.loginError = '';
                const response = await axios.post('/api/login', this.loginForm);
                // Store the token in localStorage (or Vuex)
                localStorage.setItem('auth_token', response.data.tokens);
                // Redirect to dashboard or other page
                this.$router.push('/dashboard'); // Adjust the route as necessary
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.loginError = error.response.data.message; // Display login error
                } else {
                    alert('Login failed. Please try again.'); // Handle other errors
                }
            }
        },
    },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
