<script>
import axios from 'axios';

export default {
    data() {
        return {
            userData: null, // Store user data here
        };
    },
    created() {
        this.getUserData();
    },
    methods: {
        async getUserData() {
            try {
                // Get the token from local storage
                const token = localStorage.getItem('auth_token');

                if (!token) {
                    throw new Error("No token found");
                }

                // Make a GET request to the server to get the authenticated user's data
                const response = await axios.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("Response:", response); // Debug: check the response structure

                this.userData = response.data; // Assuming the response is the user object directly
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }
    }
};
</script>

<template>
    <div class="dashboard">
        <h1>Welcome to the Dashboard</h1>
        <div v-if="userData">
            <p><strong>Name:</strong> {{ userData.name }}</p>
            <p><strong>Email:</strong> {{ userData.email }}</p>
            <!-- Add more fields as needed -->
        </div>
        <div v-else>
            <p>Loading user data...</p>
        </div>
    </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
