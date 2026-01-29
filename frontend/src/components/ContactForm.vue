<template>
    <form class="contact-form">
        <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
        </div>

        <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
        </div>

        <button type="button">Send</button>
    </form>
</template>

<script setup lang="ts">
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

    input, textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        font-family: Arial;
    }

    textarea {
        resize: vertical;
        min-height: 80px;
    }

    button {
        padding: 8px 16px;
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
