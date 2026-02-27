<template>
    <form class="contact-form" @submit.prevent="submitContact">
        <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" placeholder="Your name" />
        </div>

        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" placeholder="Your email" />
        </div>

        <div class="form-group">
            <label>Message</label>
            <input v-model="message" type="text" placeholder="Your message" />
        </div>

        <button type="submit" :disabled="loading">
            {{ loading ? "Sending..." : "Send" }}
        </button>

        <p v-if="successMessage">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const name = ref("");
    const email = ref("");
    const message = ref("");

    const loading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");

    const API_URL = "http://localhost:3000";

    const submitContact = async () => {
        successMessage.value = "";
        errorMessage.value = "";

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            errorMessage.value = "Please fill all fields.";
            return;
        }

        loading.value = true;

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: name.value.trim(),
                    email: email.value.trim(),
                    message: message.value.trim(),
                }),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                const msg =
                    (data && (data.message || data.error)) || `Request failed (${res.status})`;
                throw new Error(msg);
            }

            successMessage.value = "Message sent";

            name.value = "";
            email.value = "";
            message.value = "";
        } catch (err: any) {
            errorMessage.value = err?.message || "Error sending message.";
        } finally {
            loading.value = false;
        }
    };
</script>

<style scoped>
    .contact-form {
        max-width: 400px;
        margin: 0 auto;
        text-align: left;
    }

    .form-group {
        margin-bottom: 16px;
    }

    label {
        display: block;
        margin-bottom: 4px;
        font-weight: 500;
    }

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        font-family: Arial;
    }

    .error {
        margin-top: 8px;
    }
</style>