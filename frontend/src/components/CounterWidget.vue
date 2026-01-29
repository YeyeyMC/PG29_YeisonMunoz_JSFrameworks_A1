<template>
    <section class="counter">
        <h2>Counter: </h2>
        <p>Count: {{ store.count }}</p>
        <p>Double: {{ store.doubleCount }}</p>

        <button @click="store.increment">Increment</button>
    </section>
</template>

<script setup lang="ts">
    import { useCounterStore } from "../stores/counter.ts";

    const store = useCounterStore();

    //import { onMounted, ref } from "vue";

    //type LeaderboardItem = {
    //    player: string;
    //    score: number;
    //}

    //const leaderboardData = ref<LeaderboardItem[]>([]);
    //const errorMessage = ref("");

    //async function fetchFunction() {
    //    const res = await fetch(`http://localhost:3000/api/leaderboard-summary`)

    //    const json = await res.json();
    //    console.log(json);
    //}

    //const fetchData = async () => {
    //    const res = await fetch(`http://localhost:3000/api/leaderboard-summary`, {
    //        method: "GET",
    //        headers: { "Accept": "application/json" }
    //    });
    //    const data = (await res.json()) as LeaderboardItem[];
    //    leaderboardData.value = data;
    //}

    //onMounted(() => {
    //    fetchData();
    //});
</script>

<style scoped>
    .counter {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }

    button {
        padding: 10px 10px;
        cursor: pointer;
        font-family: Arial;
    }
</style>