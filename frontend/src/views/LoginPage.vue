<template>
    <div style="text-align:center; margin-top: 40px;">
        <h2>Login</h2>

        <div style="max-width: 420px; margin: 0 auto; text-align:left;">
            <label>Username</label>
            <input v-model="username" placeholder="username" />

            <label style="margin-top: 10px;">Password (optional)</label>
            <input v-model="password" type="password" placeholder="password" />

            <div style="margin-top: 12px;">
                <button @click="onLogin" :disabled="userStore.isLoading">
                    {{ userStore.isLoading ? "Logging in..." : "Login" }}
                </button>

                <button v-if="userStore.isLoggedIn" style="margin-left: 8px;" @click="userStore.logout()">
                    Logout
                </button>
            </div>

            <p v-if="userStore.error" style="color: crimson; margin-top: 10px;">
                {{ userStore.error }}
            </p>

            <p v-if="userStore.isLoggedIn" style="margin-top: 10px;">
                Logged in as: <b>{{ userStore.username }}</b>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useUserStore } from "../stores/user";
    import { useRouter } from "vue-router";

    const userStore = useUserStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    async function onLogin() {
        if (!username.value.trim()) {
            userStore.error = "username is required";
            return;
        }

      await userStore.login(username.value.trim(), password.value);

        if (userStore.isLoggedIn) {
            router.push("/");
        }
    }
</script>

<style scoped>
    input {
        width: 100%;
        padding: 6px;
        margin-top: 6px;
        box-sizing: border-box;
    }

    label {
        display: block;
        margin-top: 12px;
    }

    button {
        padding: 6px 10px;
    }
</style>