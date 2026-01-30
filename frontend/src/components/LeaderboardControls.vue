<template>
    <div class="leaderboard-controls">
        <h3>Leaderboard Controls</h3>
        <p>This button simulates leaderboard actions :D</p>

        <button @click="refreshLeaderboard">Refresh Leaderboard</button>
    </div>
</template>

<script setup lang="ts">
    const refreshLeaderboard = () => {
        alert("Leaderboard refreshed!");
    }
</script>
