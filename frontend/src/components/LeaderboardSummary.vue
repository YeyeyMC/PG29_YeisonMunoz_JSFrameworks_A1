<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td> {{ item.player }} </td>
                    <td> {{ item.score }} </td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error"> {{ errorMessage }} </p>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";

    type LeaderboardItem = {
        player: string;
        score: number;
    }

    const leaderboardData = ref<LeaderboardItem[]>([]); 
    const errorMessage = ref("");

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/leaderboard-summary`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const data = (await res.json()) as LeaderboardItem[];
        leaderboardData.value = data;
    }

    onMounted(() => {
        fetchData();
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