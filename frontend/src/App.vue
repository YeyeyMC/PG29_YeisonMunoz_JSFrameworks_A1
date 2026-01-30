<script setup lang="ts">
    import HeaderLayout from "./components/HeaderLayout.vue"
    import FooterLayout from "./components/FooterLayout.vue"
</script>

<template>
    <div id="app" class="app-layout">
        <header>
            <HeaderLayout />

            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/leaderboard">Leaderboard Page</router-link>
                <router-link to="/contact">Contact Page</router-link>
            </nav>
        </header>

        <main class="app-content">
            <router-view />
        </main>

        <FooterLayout />
    </div>
</template>


<style scoped>
    nav {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

        nav a {
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            color: #333;
            background-color: #eaeaea;
        }

    #app {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }

    .app-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .app-content {
        flex: 1;
    }

</style>
