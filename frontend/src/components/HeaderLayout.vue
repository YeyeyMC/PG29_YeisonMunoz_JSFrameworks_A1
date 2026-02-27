<template>
    <section class="header">
        <h1>My Incredible Game!</h1>
        <p>Yeison Munoz - VFS - Javascript Frameworks</p>

        <div style="margin-top: 10px;">
            <span v-if="userStore.isLoggedIn">
                User: <b>{{ userStore.username }}</b>
            </span>
            <span v-else>
                Not logged in
            </span>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { useUserStore } from "../stores/user";
    const userStore = useUserStore();
</script>

<style scoped>
    .header {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }

        .header h1 {
            margin: 0;
            font-size: 30px;
            font-weight: 600;
            color: #222;
        }

        .header p {
            margin-top: 8px;
            font-size: 20px;
            color: #555;
        }
</style>