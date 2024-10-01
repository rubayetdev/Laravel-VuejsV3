<script>
export default {

    methods: {
        home() {
            this.$router.push('/');
        },
        about() {
            this.$router.push('/about');
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
                <li><a href="/services" class="hover:text-gray-300">Services</a></li>
                <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
            </ul>
        </div>
    </nav>

</template>

<style scoped>

</style>
