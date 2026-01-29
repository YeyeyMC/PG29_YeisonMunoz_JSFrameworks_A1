<template>
    <div class="landing-page">
        <h1> Best Counter Game! </h1>
        <CounterWidget />
    </div>
</template>

<script setup lang="ts">
    import CounterWidget from "../components/CounterWidget.vue";
    import LeaderboardWidget from "../components/LeaderboardSummary.vue"
</script>

<style scoped>
    .landing-page {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }
</style>