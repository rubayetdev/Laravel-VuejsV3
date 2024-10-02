<script>
import axios from 'axios';

export default {
    data() {
        return {
            isAuthenticated: false,
        };
    },
    created() {
        this.checkAuthentication();
    },
    methods: {
        home() {
            this.$router.push('/');
        },
        about() {
            this.$router.push('/about');
        },
        loginPage() {
            this.$router.push('/login');
        },
        dashboardPage() {
            if (this.isAuthenticated) {
                this.$router.push('/dashboard');
            } else {
                this.$router.push('/login');
            }
        },
        async logout() {
            try {
                // Get the token from local storage
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    throw new Error("No token found");
                }

                // Make the logout request to the server
                await axios.post('/api/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Remove the token from local storage
                localStorage.removeItem('auth_token');
                this.isAuthenticated = false;

                // Redirect to the login page and clear history
                this.$router.push('/').then(() => {
                    window.history.pushState(null, '', window.location.href);
                });
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
        checkAuthentication() {
            // Check if the user is logged in
            this.isAuthenticated = !!localStorage.getItem('auth_token');
        },
    },
    watch: {
        // Watch the route change to update authentication status
        $route() {
            this.checkAuthentication();
        },
    },
};
</script>

<template>
    <nav class="bg-blue-600 p-4 text-white">
        <div class="container mx-auto flex justify-between items-center">
            <a @click="home" class="text-lg font-bold cursor-pointer">My Website</a>
            <ul class="flex space-x-4">
                <li><a @click="home" class="hover:text-gray-300 cursor-pointer">Home</a></li>
                <li><a @click="about" class="hover:text-gray-300 cursor-pointer">About</a></li>

                <li v-if="!isAuthenticated">
                    <a @click="loginPage" class="hover:text-gray-300 cursor-pointer">Login</a>
                </li>
                <li v-if="isAuthenticated">
                    <a @click="dashboardPage" class="hover:text-gray-300 cursor-pointer">Dashboard</a>
                </li>
                <li v-if="isAuthenticated">
                    <a @click="logout" class="hover:text-gray-300 cursor-pointer">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
