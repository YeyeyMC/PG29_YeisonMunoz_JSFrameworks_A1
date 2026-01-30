<template>
    <div class="leaderboard-page">
        <h2> Leaderboard </h2>
        <LeaderboardInfo />
        <LeaderboardControls />
        <LeaderboardWidget />
    </div>
</template>

<script setup lang="ts">
    import LeaderboardWidget from "../components/LeaderboardSummary.vue"
    import LeaderboardControls from "../components/LeaderboardControls.vue"
    import LeaderboardInfo from "../components/LeaderboardInfo.vue"
</script>

<style scoped>
    .leaderboard-page {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }

    h2 {
        font-size: 30px;
    }
</style>