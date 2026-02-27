<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>

        <p v-if="leaderboardStore.isLoading">Loading...</p>
        <p v-else-if="leaderboardStore.error" class="error">
            {{ leaderboardStore.error }}
        </p>

        <table v-else>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in leaderboardStore.sortedItems" :key="item.id">
                    <td>{{ item.player_name }}</td>
                    <td>{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { useLeaderboardStore } from "../stores/leaderboard";

    const leaderboardStore = useLeaderboardStore();

    onMounted(() => {
        leaderboardStore.fetchLeaderboard();
    });
</script>

<style scoped>
    .leaderboard-summary {
        margin-top: 16px;
    }

    .leaderboard-summary h2 {
        font-size: 20px;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
        min-width: 260px;
        background-color: #ffffff;
    }

    th {
        background-color: #f0f0f0;
        font-weight: 600;
    }

    th, td {
        padding: 8px 16px;
        border: 1px solid #ddd;
        text-align: center;
    }

    .error {
        color: rebeccapurple;
        margin-top: 8px;
    }

</style>