<template>
    <div class="contact-page">
        <h2> Contact </h2>
    </div>

    <ContactForm />
</template>

<script setup lang="ts">
    import ContactForm from "../components/ContactForm.vue" 
</script>

<style scoped>
    .contact-page {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }
</style>